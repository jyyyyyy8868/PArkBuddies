// Park Buddies global state management (Zustand)
// Manage user profiles, discovery records, garden items, location state, buddy characters
// Structured data persisted to localStorage, photos stored in IndexedDB

import { create } from "zustand";
import type {
  GardenItem,
  LocationResult,
  Park,
  UserDiscovery,
  UserProfile,
  VerificationResult,
  BuddyState,
  BuddyCharacter,
  GameItem,
  FeedResult,
  PlantDiscovery,
} from "../models/types";
import { dataStorage, locationService } from "../services/serviceFactory";
import { clearAllPhotos } from "../services/photoStorage";
import { getItemProperty, rarityToItemType } from "../data/itemProperties";

const STORAGE_KEY = "park-buddies-state";

interface PersistState {
  user: UserProfile;
  discoveries: UserDiscovery[];
  gardenItems: GardenItem[];
  characters: BuddyCharacter[];
  /** Food inventory: plantId → count (consumable) */
  foodInventory: Record<string, number>;
}

function loadState(): PersistState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      user: parsed.user,
      discoveries: parsed.discoveries ?? [],
      gardenItems: parsed.gardenItems ?? [],
      characters: parsed.characters ?? [],
      foodInventory: parsed.foodInventory ?? {},
    };
  } catch {
    return null;
  }
}

function saveState(state: PersistState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

function generateUserId(): string {
  return `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const DEFAULT_NICKNAMES = ["Park Walker", "Plant Observer", "Leaf Collector", "Nature Explorer", "Garden Gardener"];

function pickNickname(): string {
  return DEFAULT_NICKNAMES[Math.floor(Math.random() * DEFAULT_NICKNAMES.length)];
}

// ===========================================================================
// Decoration buddy game helper functions
// ===========================================================================

/** Hunger decay per hour */
const HUNGER_DECAY_PER_HOUR = 8;

/** Create a new character */
function createNewCharacter(parkId: string): BuddyCharacter {
  return {
    parkId,
    hunger: 80,
    lastFedAt: Date.now(),
    equippedClothingIds: [],
    equippedDecorationIds: [],
  };
}

/** Hunger decay calculation */
function decayHunger(character: BuddyCharacter): BuddyCharacter {
  const now = Date.now();
  const hoursPassed = (now - character.lastFedAt) / (1000 * 60 * 60);
  if (hoursPassed < 1 || character.lastFedAt === 0) return character;
  const decay = Math.floor(hoursPassed * HUNGER_DECAY_PER_HOUR);
  return { ...character, hunger: Math.max(0, character.hunger - decay) };
}

/** Derive game item from plant data */
function deriveGameItem(plant: PlantDiscovery, themeColor: string): GameItem {
  const props = getItemProperty(plant.id);
  const itemType = rarityToItemType(props.rarity);
  return {
    id: plant.id,
    parkId: plant.parkId,
    name: plant.name,
    description: plant.unlockReward || `Natural gift from ${plant.name}`,
    type: itemType,
    rarity: props.rarity,
    iconSvg: plant.itemIconSvg || plant.fullSvg,
    themeColor,
    satiety: props.satiety,
    clothingSlot: props.clothingSlot,
    decorationSlot: props.decorationSlot,
    decorationSvg: props.decorationSvg,
  };
}

interface AppState {
  // Data
  parks: Park[];
  user: UserProfile;
  discoveries: UserDiscovery[];
  gardenItems: GardenItem[];
  characters: BuddyCharacter[];
  foodInventory: Record<string, number>;
  userLocation: LocationResult | null;
  locationRequested: boolean;
  locationLoading: boolean;

  // Initialization
  initStore: () => void;

  // User
  setNickname: (nickname: string) => void;

  // Location
  requestLocation: () => Promise<void>;
  clearLocation: () => void;
  setSimulatedLocation: (lng: number, lat: number, parkName?: string) => void;
  checkInPark: (parkId: string) => { inRange: boolean; buddyJustUnlocked: boolean };
  getNearbyParks: (limit?: number) => { park: Park; distance: number }[];

  // Discovery records
  recordDiscovery: (
    parkId: string,
    plantId: string,
    verificationResult: VerificationResult,
    photoBlobId: string
  ) => { isFirstDiscovery: boolean; buddyJustUnlocked: boolean };
  isPlantDiscovered: (parkId: string, plantId: string) => boolean;
  getDiscoveredPlantIds: (parkId: string) => string[];
  getDiscoveryCount: (parkId: string) => number;

  // Buddy
  getBuddyState: (parkId: string) => BuddyState;

  // Garden
  getGardenItemsForPark: (parkId: string) => GardenItem[];
  getUnlockedBuddyParks: () => string[];
  getRecentGardenChange: () => GardenItem | null;

  // Decoration buddy game
  /** Get character state (including hunger decay) */
  getCharacter: (parkId: string) => BuddyCharacter | null;
  /** Feed (consume 1 food, increase fullness) */
  feedBuddy: (parkId: string, foodItemId: string) => FeedResult;
  /** Equip/unequip clothing */
  toggleEquipClothing: (parkId: string, itemId: string) => { equipped: boolean };
  /** Equip/unequip decoration */
  toggleEquipDecoration: (parkId: string, itemId: string) => { equipped: boolean };
  /** Get all unlocked items */
  getUnlockedItems: () => GameItem[];
  /** Get unlocked items for a specific park */
  getUnlockedItemsForPark: (parkId: string) => GameItem[];
  /** Get food inventory (with count) */
  getFoodStock: () => { item: GameItem; count: number }[];
  /** Get unlocked clothing items */
  getUnlockedClothing: () => GameItem[];
  /** Get unlocked decoration items */
  getUnlockedDecorations: () => GameItem[];

  // Statistics
  getStats: () => {
    visitedParks: number;
    discoveredPlants: number;
    unlockedBuddies: number;
    totalItems: number;
  };

  // Data cleanup
  deleteAllData: () => Promise<void>;
}

export const useAppStore = create<AppState>((set, get) => ({
  parks: [],
  user: { id: "", nickname: "", createdAt: 0 },
  discoveries: [],
  gardenItems: [],
  characters: [],
  foodInventory: {},
  userLocation: null,
  locationRequested: false,
  locationLoading: false,

  initStore: () => {
    const parks = dataStorage.getParks();
    const saved = loadState();
    if (saved && saved.user.id) {
      // Backward compatible: create characters for unlocked buddies missing character records
      const existingCharacters = saved.characters ?? [];
      const unlockedBuddyParks = (saved.gardenItems ?? [])
        .filter((g) => g.sourceType === "buddy")
        .map((g) => g.parkId);
      const existingParkIds = new Set(existingCharacters.map((c) => c.parkId));
      const missingCharacters = unlockedBuddyParks
        .filter((parkId) => !existingParkIds.has(parkId))
        .map((parkId) => createNewCharacter(parkId));

      // Backward compatible with old character data format (mood/exp → hunger)
      const migratedCharacters = [...existingCharacters, ...missingCharacters].map((c) => {
        if (c.hunger === undefined) {
          return createNewCharacter(c.parkId);
        }
        return c;
      });

      // Backward compatible with old food inventory: initialize 1 food for discovered common plants with no record
      const foodInv = { ...saved.foodInventory };
      const plantItems = (saved.gardenItems ?? []).filter(
        (g) => g.sourceType === "plant"
      );
      for (const gi of plantItems) {
        const plant = parks.find((p) => p.id === gi.parkId)?.plants.find((p) => p.id === gi.sourceId);
        if (plant) {
          const props = getItemProperty(plant.id);
          if (props.rarity === "common" && foodInv[plant.id] === undefined) {
            foodInv[plant.id] = 1;
          }
        }
      }

      set({
        parks,
        user: saved.user,
        discoveries: saved.discoveries ?? [],
        gardenItems: saved.gardenItems ?? [],
        characters: migratedCharacters,
        foodInventory: foodInv,
      });
      saveState({
        user: saved.user,
        discoveries: saved.discoveries ?? [],
        gardenItems: saved.gardenItems ?? [],
        characters: migratedCharacters,
        foodInventory: foodInv,
      });
    } else {
      const newUser: UserProfile = {
        id: generateUserId(),
        nickname: pickNickname(),
        createdAt: Date.now(),
      };
      set({ parks, user: newUser });
      saveState({ user: newUser, discoveries: [], gardenItems: [], characters: [], foodInventory: {} });
    }
  },

  setNickname: (nickname: string) => {
    const state = get();
    const updatedUser = { ...state.user, nickname };
    set({ user: updatedUser });
    saveState({
      user: updatedUser,
      discoveries: state.discoveries,
      gardenItems: state.gardenItems,
      characters: state.characters,
      foodInventory: state.foodInventory,
    });
  },

  requestLocation: async () => {
    set({ locationLoading: true, locationRequested: true });
    try {
      const loc = await locationService.getLocation();
      set({ userLocation: loc, locationLoading: false });
    } catch {
      set({ userLocation: null, locationLoading: false });
    }
  },

  clearLocation: () => {
    set({ userLocation: null, locationRequested: false });
  },

  setSimulatedLocation: (lng, lat, parkName) => {
    set({
      userLocation: { lng, lat, accuracy: 50, isDemo: true },
      locationRequested: true,
      locationLoading: false,
    });
    if (parkName) {
      console.log(`Simulated location set to: ${parkName} (${lng},${lat})`);
    }
  },

  checkInPark: (parkId) => {
    const state = get();
    const park = state.parks.find((p) => p.id === parkId);
    if (!park || !state.userLocation) {
      return { inRange: false, buddyJustUnlocked: false };
    }

    const inRange = locationService.isInParkRange(
      state.userLocation.lng,
      state.userLocation.lat,
      park
    );

    if (!inRange) {
      return { inRange: false, buddyJustUnlocked: false };
    }

    const buddyAlreadyUnlocked = state.gardenItems.some(
      (g) => g.sourceType === "buddy" && g.sourceId === parkId
    );

    if (buddyAlreadyUnlocked) {
      return { inRange: true, buddyJustUnlocked: false };
    }

    // Unlock buddy + create buddy character
    const buddyItem: GardenItem = {
      id: `garden-buddy-checkin-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      userId: state.user.id,
      sourceType: "buddy",
      sourceId: parkId,
      parkId,
      unlockedAt: Date.now(),
      isDemo: state.userLocation.isDemo,
    };

    const newGardenItems = [...state.gardenItems, buddyItem];
    const newCharacter = createNewCharacter(parkId);
    const newCharacters = [...state.characters, newCharacter];

    set({ gardenItems: newGardenItems, characters: newCharacters });
    saveState({
      user: state.user,
      discoveries: state.discoveries,
      gardenItems: newGardenItems,
      characters: newCharacters,
      foodInventory: state.foodInventory,
    });

    return { inRange: true, buddyJustUnlocked: true };
  },

  getNearbyParks: (limit = 5) => {
    const state = get();
    if (!state.userLocation || state.parks.length === 0) return [];
    return state.parks
      .map((park) => ({
        park,
        distance: locationService.getDistance(
          state.userLocation!.lng,
          state.userLocation!.lat,
          park.lng,
          park.lat
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  },

  recordDiscovery: (parkId, plantId, verificationResult, photoBlobId) => {
    const state = get();
    const isDemo = verificationResult.isDemo;

    const existing = state.discoveries.find(
      (d) => d.parkId === parkId && d.plantId === plantId
    );
    const isFirstDiscovery = !existing;

    let newDiscoveries = state.discoveries;
    if (isFirstDiscovery) {
      const newDiscovery: UserDiscovery = {
        id: `disc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        userId: state.user.id,
        parkId,
        plantId,
        verificationResult,
        photoBlobId,
        discoveredAt: Date.now(),
        isDemo,
      };
      newDiscoveries = [...state.discoveries, newDiscovery];
    }

    let newGardenItems = state.gardenItems;
    let newCharacters = state.characters;
    let newFoodInv = { ...state.foodInventory };
    let buddyJustUnlocked = false;

    if (isFirstDiscovery) {
      // Record plant unlock
      const plantGardenItem: GardenItem = {
        id: `garden-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        userId: state.user.id,
        sourceType: "plant",
        sourceId: plantId,
        parkId,
        unlockedAt: Date.now(),
        isDemo,
      };
      newGardenItems = [...newGardenItems, plantGardenItem];

      // Handle items based on rarity
      const park = state.parks.find((p) => p.id === parkId);
      const plant = park?.plants.find((p) => p.id === plantId);
      if (plant) {
        const props = getItemProperty(plantId);
        if (props.rarity === "common") {
          // common → food (+1, repeatable)
          newFoodInv[plantId] = (newFoodInv[plantId] ?? 0) + 1;
        }
        // rare/epic → clothing/decoration, permanently owned once unlocked, no inventory needed
      }

      // Check buddy unlock
      if (park) {
        const discoverCount = newDiscoveries.filter(
          (d) => d.parkId === parkId
        ).length;
        const buddyAlreadyUnlocked = state.gardenItems.some(
          (g) => g.sourceType === "buddy" && g.sourceId === parkId
        );
        if (
          discoverCount >= park.buddy.unlockCondition.discoverCount &&
          !buddyAlreadyUnlocked
        ) {
          const buddyItem: GardenItem = {
            id: `garden-buddy-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            userId: state.user.id,
            sourceType: "buddy",
            sourceId: parkId,
            parkId,
            unlockedAt: Date.now(),
            isDemo,
          };
          newGardenItems = [...newGardenItems, buddyItem];
          const newCharacter = createNewCharacter(parkId);
          newCharacters = [...newCharacters, newCharacter];
          buddyJustUnlocked = true;
        }
      }
    }

    set({
      discoveries: newDiscoveries,
      gardenItems: newGardenItems,
      characters: newCharacters,
      foodInventory: newFoodInv,
    });
    saveState({
      user: state.user,
      discoveries: newDiscoveries,
      gardenItems: newGardenItems,
      characters: newCharacters,
      foodInventory: newFoodInv,
    });

    return { isFirstDiscovery, buddyJustUnlocked };
  },

  isPlantDiscovered: (parkId, plantId) => {
    return get().discoveries.some(
      (d) => d.parkId === parkId && d.plantId === plantId
    );
  },

  getDiscoveredPlantIds: (parkId) => {
    return get()
      .discoveries.filter((d) => d.parkId === parkId)
      .map((d) => d.plantId);
  },

  getDiscoveryCount: (parkId) => {
    return get().discoveries.filter((d) => d.parkId === parkId).length;
  },

  getBuddyState: (parkId) => {
    const state = get();
    const park = state.parks.find((p) => p.id === parkId);
    if (!park) return "unknown";
    const buddyUnlocked = state.gardenItems.some(
      (g) => g.sourceType === "buddy" && g.sourceId === parkId
    );
    if (buddyUnlocked) return "unlocked";
    const count = state.discoveries.filter((d) => d.parkId === parkId).length;
    if (count >= park.buddy.unlockCondition.discoverCount) return "unlocked";
    if (count > 0) return "familiar";
    return "unknown";
  },

  getGardenItemsForPark: (parkId) => {
    return get().gardenItems.filter((g) => g.parkId === parkId);
  },

  getUnlockedBuddyParks: () => {
    return get()
      .gardenItems.filter((g) => g.sourceType === "buddy")
      .map((g) => g.parkId);
  },

  getRecentGardenChange: () => {
    const items = get().gardenItems;
    if (items.length === 0) return null;
    return items.reduce((latest, item) =>
      item.unlockedAt > latest.unlockedAt ? item : latest
    );
  },

  // ===========================================================================
  // Decoration buddy game methods
  // ===========================================================================

  getCharacter: (parkId) => {
    const char = get().characters.find((c) => c.parkId === parkId);
    if (!char) return null;
    return decayHunger(char);
  },

  feedBuddy: (parkId, foodItemId) => {
    const state = get();
    const char = state.characters.find((c) => c.parkId === parkId);
    if (!char) {
      return { success: false, hungerDelta: 0, message: "Character not yet unlocked", remainingFood: 0 };
    }

    // Check food inventory
    const stock = state.foodInventory[foodItemId] ?? 0;
    if (stock <= 0) {
      return { success: false, hungerDelta: 0, message: "No more of this food", remainingFood: 0 };
    }

    // Get food properties
    const park = state.parks.find((p) => p.id === parkId);
    const plant = state.parks
      .flatMap((p) => p.plants)
      .find((p) => p.id === foodItemId);
    const props = getItemProperty(foodItemId);
    const satiety = props.satiety ?? 10;

    // Consume food
    const newFoodInv = { ...state.foodInventory };
    newFoodInv[foodItemId] = stock - 1;

    // Increase fullness
    const decayed = decayHunger(char);
    const newHunger = Math.min(100, decayed.hunger + satiety);
    const hungerDelta = newHunger - decayed.hunger;

    const updatedChar: BuddyCharacter = {
      ...decayed,
      hunger: newHunger,
      lastFedAt: Date.now(),
    };

    const newCharacters = state.characters.map((c) =>
      c.parkId === parkId ? updatedChar : c
    );

    set({ characters: newCharacters, foodInventory: newFoodInv });
    saveState({
      user: state.user,
      discoveries: state.discoveries,
      gardenItems: state.gardenItems,
      characters: newCharacters,
      foodInventory: newFoodInv,
    });

    const foodName = plant?.name ?? "Food";
    const msg = newHunger >= 100
      ? `${foodName} is full! Fullness is maxed out!`
      : `${foodName} is delicious! Fullness +${satiety}`;

    return {
      success: true,
      hungerDelta,
      message: msg,
      remainingFood: newFoodInv[foodItemId],
    };
  },

  toggleEquipClothing: (parkId, itemId) => {
    const state = get();
    const char = state.characters.find((c) => c.parkId === parkId);
    if (!char) return { equipped: false };

    const isEquipped = char.equippedClothingIds.includes(itemId);

    // Get the clothing slot
    const plant = state.parks
      .flatMap((p) => p.plants)
      .find((p) => p.id === itemId);
    const props = getItemProperty(itemId);
    const slot = props.clothingSlot;

    let newClothingIds: string[];
    if (isEquipped) {
      // Unequip
      newClothingIds = char.equippedClothingIds.filter((id) => id !== itemId);
    } else {
      // Equip: first remove equipped clothing in the same slot
      const sameSlotItems = state.parks
        .flatMap((p) => p.plants)
        .filter((p) => {
          const pr = getItemProperty(p.id);
          return pr.clothingSlot === slot && pr.rarity === "rare";
        })
        .map((p) => p.id);
      const filtered = char.equippedClothingIds.filter(
        (id) => !sameSlotItems.includes(id)
      );
      newClothingIds = [...filtered, itemId];
    }

    const newCharacters = state.characters.map((c) =>
      c.parkId === parkId ? { ...c, equippedClothingIds: newClothingIds } : c
    );
    set({ characters: newCharacters });
    saveState({
      user: state.user,
      discoveries: state.discoveries,
      gardenItems: state.gardenItems,
      characters: newCharacters,
      foodInventory: state.foodInventory,
    });

    return { equipped: !isEquipped };
  },

  toggleEquipDecoration: (parkId, itemId) => {
    const state = get();
    const char = state.characters.find((c) => c.parkId === parkId);
    if (!char) return { equipped: false };

    const isEquipped = char.equippedDecorationIds.includes(itemId);

    let newDecorationIds: string[];
    if (isEquipped) {
      newDecorationIds = char.equippedDecorationIds.filter((id) => id !== itemId);
    } else {
      newDecorationIds = [...char.equippedDecorationIds, itemId];
    }

    const newCharacters = state.characters.map((c) =>
      c.parkId === parkId ? { ...c, equippedDecorationIds: newDecorationIds } : c
    );
    set({ characters: newCharacters });
    saveState({
      user: state.user,
      discoveries: state.discoveries,
      gardenItems: state.gardenItems,
      characters: newCharacters,
      foodInventory: state.foodInventory,
    });

    return { equipped: !isEquipped };
  },

  getUnlockedItems: () => {
    const state = get();
    const plantGardenItems = state.gardenItems.filter(
      (g) => g.sourceType === "plant"
    );
    const seen = new Set<string>();
    const items: GameItem[] = [];
    for (const gardenItem of plantGardenItems) {
      if (seen.has(gardenItem.sourceId)) continue;
      seen.add(gardenItem.sourceId);
      const park = state.parks.find((p) => p.id === gardenItem.parkId);
      if (!park) continue;
      const plant = park.plants.find((p) => p.id === gardenItem.sourceId);
      if (!plant) continue;
      items.push(deriveGameItem(plant, park.themeColor));
    }
    return items;
  },

  getUnlockedItemsForPark: (parkId) => {
    const state = get();
    const park = state.parks.find((p) => p.id === parkId);
    if (!park) return [];
    const plantGardenItems = state.gardenItems.filter(
      (g) => g.sourceType === "plant" && g.parkId === parkId
    );
    const seen = new Set<string>();
    return plantGardenItems
      .map((g) => {
        if (seen.has(g.sourceId)) return null;
        seen.add(g.sourceId);
        const plant = park.plants.find((p) => p.id === g.sourceId);
        if (!plant) return null;
        return deriveGameItem(plant, park.themeColor);
      })
      .filter((i): i is GameItem => i !== null);
  },

  getFoodStock: () => {
    const state = get();
    const result: { item: GameItem; count: number }[] = [];
    for (const [plantId, count] of Object.entries(state.foodInventory)) {
      if (count <= 0) continue;
      const plant = state.parks
        .flatMap((p) => p.plants)
        .find((p) => p.id === plantId);
      if (!plant) continue;
      const park = state.parks.find((p) => p.id === plant.parkId);
      const item = deriveGameItem(plant, park?.themeColor || "#7C9885");
      result.push({ item, count });
    }
    return result;
  },

  getUnlockedClothing: () => {
    return get().getUnlockedItems().filter((i) => i.type === "clothing");
  },

  getUnlockedDecorations: () => {
    return get().getUnlockedItems().filter((i) => i.type === "decoration");
  },

  getStats: () => {
    const state = get();
    const visitedParks = new Set(state.discoveries.map((d) => d.parkId)).size;
    const discoveredPlants = new Set(state.discoveries.map((d) => d.plantId)).size;
    const unlockedBuddies = state.gardenItems.filter(
      (g) => g.sourceType === "buddy"
    ).length;
    const totalItems = new Set(
      state.gardenItems
        .filter((g) => g.sourceType === "plant")
        .map((g) => g.sourceId)
    ).size;
    return { visitedParks, discoveredPlants, unlockedBuddies, totalItems };
  },

  deleteAllData: async () => {
    await clearAllPhotos();
    const newUser: UserProfile = {
      id: generateUserId(),
      nickname: pickNickname(),
      createdAt: Date.now(),
    };
    set({
      user: newUser,
      discoveries: [],
      gardenItems: [],
      characters: [],
      foodInventory: {},
      userLocation: null,
      locationRequested: false,
    });
    saveState({
      user: newUser,
      discoveries: [],
      gardenItems: [],
      characters: [],
      foodInventory: {},
    });
  },
}));
