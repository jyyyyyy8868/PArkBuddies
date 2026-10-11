// Park Buddies core data model definitions

/** Park */
export interface Park {
  /** Park unique ID */
  id: string;
  /** Park name */
  name: string;
  /** District */
  district: string;
  /** Brief intro */
  intro: string;
  /** Longitude */
  lng: number;
  /** Latitude */
  lat: number;
  /** Park boundary GeoJSON Polygon coordinates (optional, demo data marker) */
  boundary?: number[][][];
  /** Trail GeoJSON LineString array (optional, demo data marker) */
  trails?: number[][][];
  /** Map data source description */
  mapSource: string;
  /** Whether it has reliable internal map data */
  hasReliableInternalMap: boolean;
  /** Plant discovery content */
  plants: PlantDiscovery[];
  /** Buddy */
  buddy: Buddy;
  /** Theme color */
  themeColor: string;
  /** Theme color (dark) */
  themeColorDark: string;
  /** Data update time ISO string */
  dataUpdatedAt: string;
  /** Data source description */
  dataSource: string;
  /** Authorization/attribution notice */
  attribution?: string;
}

/** Plant discovery content */
export interface PlantDiscovery {
  /** Plant ID */
  id: string;
  /** Parent park ID */
  parkId: string;
  /** Plant name */
  name: string;
  /** Scientific name */
  scientificName: string;
  /** Clue list */
  clues: Clue[];
  /** Plant knowledge */
  knowledge: string;
  /** Knowledge source */
  knowledgeSource: string;
  /** Fun fact */
  funFact: string;
  /** Details worth observing next time */
  nextObserve: string;
  /** Whether it is seasonal content */
  isSeasonal: boolean;
  /** Suitable months (1-12), empty means year-round */
  seasonMonths?: number[];
  /** Unlock reward description */
  unlockReward?: string;
  /** Plant SVG illustration shown after unlock */
  fullSvg: string;
  /** Plant position on park map (lng/lat) */
  position: { lng: number; lat: number };
  /** Detailed introduction (shown after unlock) */
  detailedIntro: string;
  /** Growth habitat */
  habitat?: string;
  /** Ornamental value/uses */
  uses?: string;
  /** Cultural significance */
  culturalNote?: string;
  /** Cultivation item type (auto-determined by rarity, this field kept for compatibility) */
  itemType?: "food" | "clothing" | "decoration";
  /** Item rarity (determines item type: common=food, rare=clothing, epic=decoration) */
  rarity?: "common" | "rare" | "epic";
  /** Item icon SVG */
  itemIconSvg?: string;
}

/** Clue */
export interface Clue {
  /** Clue ID */
  id: string;
  /** Clue type */
  type: "silhouette" | "leaf" | "bark" | "flower" | "description";
  /** Clue text */
  text: string;
  /** Partial feature SVG (optional) */
  partialSvg?: string;
}

/** Park Buddy mascot */
export interface Buddy {
  /** Buddy ID */
  id: string;
  /** Parent park ID */
  parkId: string;
  /** Buddy name */
  name: string;
  /** Brief intro */
  intro: string;
  /** Unknown: silhouette SVG */
  silhouetteSvg: string;
  /** Becoming familiar: partial image SVG */
  partialSvg: string;
  /** Unlocked: full image SVG */
  fullSvg: string;
  /** Unlock condition */
  unlockCondition: {
    /** Number of plants to discover */
    discoverCount: number;
  };
}

/** User discovery record */
export interface UserDiscovery {
  /** Record ID */
  id: string;
  /** User ID */
  userId: string;
  /** Park ID */
  parkId: string;
  /** Plant ID */
  plantId: string;
  /** Verification result */
  verificationResult: VerificationResult;
  /** Photo ID in IndexedDB */
  photoBlobId: string;
  /** Discovery timestamp */
  discoveredAt: number;
  /** Whether it is a demo mode record */
  isDemo: boolean;
}

/** Identified candidate plant */
export interface PlantCandidate {
  /** Plant ID (filled when matched) */
  plantId?: string;
  /** Plant name */
  name: string;
  /** Scientific name */
  scientificName: string;
  /** Confidence 0-1 */
  confidence: number;
}

/** Verification result */
export interface VerificationResult {
  /** Verification status */
  status: "success" | "noMatch" | "inconclusive" | "networkError";
  /** Candidate plant list */
  candidates: PlantCandidate[];
  /** Match confidence */
  confidence: number;
  /** Whether it is a demo mode result */
  isDemo: boolean;
  /** Whether user is within park range */
  inParkRange: boolean;
}

/** Garden item */
export interface GardenItem {
  /** Item ID */
  id: string;
  /** User ID */
  userId: string;
  /** Source type */
  sourceType: "buddy" | "plant" | "decoration";
  /** Source ID (park ID or plant ID) */
  sourceId: string;
  /** Park ID */
  parkId: string;
  /** Unlock timestamp */
  unlockedAt: number;
  /** Whether it is demo mode */
  isDemo: boolean;
}

// ===========================================================================
// Decoration cultivation game system
// Plants are graded by rarity: common→food, rare→clothing, epic→home decoration
// Characters get hungry and need feeding; clothing can dress characters, decorations can furnish homes
// ===========================================================================

/** Item type (determined by plant rarity) */
export type ItemType = "food" | "clothing" | "decoration";

/** Clothing subtype (equipment slot) */
export type ClothingSlot = "headwear" | "outfit" | "accessory";

/** Home decoration subtype */
export type DecorationSlot = "furniture" | "plant" | "scenery";

/** Item rarity (determines item type) */
export type Rarity = "common" | "rare" | "epic";

/** Item definition (derived from plant data) */
export interface GameItem {
  /** Item ID (equals plant ID) */
  id: string;
  /** Parent park ID */
  parkId: string;
  /** Item name */
  name: string;
  /** Item description */
  description: string;
  /** Item type: food/clothing/decoration */
  type: ItemType;
  /** Rarity */
  rarity: Rarity;
  /** Item SVG icon */
  iconSvg: string;
  /** Theme color */
  themeColor: string;
  /** Food satiety value (only for food type) */
  satiety?: number;
  /** Clothing slot (only for clothing type) */
  clothingSlot?: ClothingSlot;
  /** Decoration slot (only for decoration type) */
  decorationSlot?: DecorationSlot;
  /** Decoration SVG (for dressing/placing, overlaid on character/home) */
  decorationSvg?: string;
}

/** Buddy character state (each unlocked mascot corresponds to a character) */
export interface BuddyCharacter {
  /** Character ID (equals park ID) */
  parkId: string;
  /** Satiety value 0-100 (100=full, decreases over time) */
  hunger: number;
  /** Last fed timestamp */
  lastFedAt: number;
  /** Equipped clothing item IDs (headwear/outfit/accessory) */
  equippedClothingIds: string[];
  /** Equipped home decoration item IDs */
  equippedDecorationIds: string[];
}

/** Feed result */
export interface FeedResult {
  success: boolean;
  hungerDelta: number;
  message: string;
  /** Remaining food count */
  remainingFood: number;
}

/** User profile */
export interface UserProfile {
  /** User ID */
  id: string;
  /** Nickname */
  nickname: string;
  /** Creation timestamp */
  createdAt: number;
}

/** Buddy state */
export type BuddyState = "unknown" | "familiar" | "unlocked";

/** Location result */
export interface LocationResult {
  lng: number;
  lat: number;
  accuracy: number;
  isDemo: boolean;
}

/** Map adapter config */
export interface MapConfig {
  service: "demo" | "gaode" | "tencent";
  apiKey?: string;
}
