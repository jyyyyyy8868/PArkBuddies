// My Buddies — Decoration & Nurture game interface
// Route: /garden
// Buddies live in their homes, get hungry and need feeding
// Plants are graded by rarity: Common → Food, Rare → Clothing, Epic → Home Decor
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  MapPin,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Leaf,
  Utensils,
  Shirt,
  Home,
  Lock,
  Check,
  Soup,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import BuddyIllustration from "@/components/BuddyIllustration";
import SvgDisplay from "@/components/SvgDisplay";
import type { GameItem } from "@/models/types";
import { rarityLabel, rarityColor } from "@/data/itemProperties";
import { cn } from "@/lib/utils";

function getHungerEmoji(hunger: number): string {
  if (hunger >= 80) return "😋";
  if (hunger >= 50) return "🙂";
  if (hunger >= 30) return "😐";
  if (hunger >= 10) return "😟";
  return "😩";
}

function getHungerLabel(hunger: number): string {
  if (hunger >= 80) return "Full";
  if (hunger >= 50) return "Okay";
  if (hunger >= 30) return "A bit hungry";
  if (hunger >= 10) return "Very hungry";
  return "Starving!";
}

const clothingSlotLabel: Record<string, string> = {
  headwear: "Headwear",
  outfit: "Clothing",
  accessory: "Accessory",
};

const decorationSlotLabel: Record<string, string> = {
  furniture: "Furniture",
  plant: "Plant",
  scenery: "Scenery",
};

/** Character home scene: layered overlay (background + decor + character + clothing) */
function CharacterScene({
  buddySvg,
  clothingSvgs,
  decorationSvgs,
  themeColor,
}: {
  buddySvg: string;
  clothingSvgs: string[];
  decorationSvgs: string[];
  themeColor: string;
}) {
  // Remove opaque background rect from character SVG (otherwise it would cover the decor layer)
  const cleanBuddySvg = buddySvg.replace(
    /<rect\s+width="100"\s+height="100"\s+fill="[^"]*"\s*\/?>/g,
    ""
  );

  // Background room SVG
  const roomBgSvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0"><rect width="100" height="100" rx="8" fill="${themeColor}08"/><rect y="75" width="100" height="25" rx="8" fill="${themeColor}12"/><rect x="0" y="0" width="100" height="8" rx="8" fill="${themeColor}15"/></svg>`;

  // Decoration SVG (below character, above background)
  const decorationLayer = decorationSvgs.length > 0
    ? `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0">${decorationSvgs.join("\n")}</svg>`
    : "";

  // Clothing SVG (above character)
  const clothingLayer = clothingSvgs.length > 0
    ? `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0">${clothingSvgs.join("\n")}</svg>`
    : "";

  return (
    <div
      className="relative w-full aspect-square max-w-[280px] mx-auto animate-breathe rounded-2xl overflow-hidden"
      style={{ backgroundColor: `${themeColor}05`, position: "relative" }}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
        dangerouslySetInnerHTML={{ __html: roomBgSvg }}
      />
      {decorationLayer && (
        <div
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
          dangerouslySetInnerHTML={{ __html: decorationLayer }}
        />
      )}
      <div
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 3 }}
        dangerouslySetInnerHTML={{ __html: cleanBuddySvg }}
      />
      {clothingLayer && (
        <div
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 4 }}
          dangerouslySetInnerHTML={{ __html: clothingLayer }}
        />
      )}
    </div>
  );
}

export default function Garden() {
  const navigate = useNavigate();
  const parks = useAppStore((s) => s.parks);
  const gardenItems = useAppStore((s) => s.gardenItems);
  const characters = useAppStore((s) => s.characters);
  const foodInventory = useAppStore((s) => s.foodInventory);
  const getCharacter = useAppStore((s) => s.getCharacter);
  const feedBuddy = useAppStore((s) => s.feedBuddy);
  const toggleEquipClothing = useAppStore((s) => s.toggleEquipClothing);
  const toggleEquipDecoration = useAppStore((s) => s.toggleEquipDecoration);
  const getUnlockedItems = useAppStore((s) => s.getUnlockedItems);

  const [selectedParkId, setSelectedParkId] = useState<string | null>(null);
  const [feedMsg, setFeedMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"food" | "clothing" | "decoration">("food");

  // Calculate unlocked buddy parks from raw state (avoid selector returning a new array)
  const unlockedBuddyParks = useMemo(
    () => gardenItems.filter((g) => g.sourceType === "buddy").map((g) => g.parkId),
    [gardenItems]
  );

  const selectedPark = selectedParkId
    ? parks.find((p) => p.id === selectedParkId)
    : null;

  // Get character from raw characters array (avoid getCharacter returning a new object each time)
  const selectedCharacter = selectedParkId
    ? characters.find((c) => c.parkId === selectedParkId) ?? null
    : null;
  // Decayed character state for display (only use hunger for display)
  const displayHunger = selectedParkId ? getCharacter(selectedParkId)?.hunger ?? 0 : 0;

  // All unlocked items - stabilize reference with useMemo
  const allItems = useMemo(() => getUnlockedItems(), [gardenItems, parks]);
  const foodItems = useMemo(() => allItems.filter((i) => i.type === "food"), [allItems]);
  const clothingItems = useMemo(() => allItems.filter((i) => i.type === "clothing"), [allItems]);
  const decorationItems = useMemo(() => allItems.filter((i) => i.type === "decoration"), [allItems]);

  // Equipped clothing SVGs for the current character
  const equippedClothingSvgs = useMemo(() => {
    if (!selectedCharacter) return [];
    return selectedCharacter.equippedClothingIds
      .map((id) => allItems.find((i) => i.id === id))
      .filter((i): i is GameItem => i !== null)
      .map((i) => i.decorationSvg || "")
      .filter((s) => s !== "");
  }, [selectedCharacter, allItems]);

  // Equipped decoration SVGs for the current character
  const equippedDecorationSvgs = useMemo(() => {
    if (!selectedCharacter) return [];
    return selectedCharacter.equippedDecorationIds
      .map((id) => allItems.find((i) => i.id === id))
      .filter((i): i is GameItem => i !== null)
      .map((i) => i.decorationSvg || "")
      .filter((s) => s !== "");
  }, [selectedCharacter, allItems]);

  // Feed message auto-dismiss
  useEffect(() => {
    if (feedMsg) {
      const timer = setTimeout(() => setFeedMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedMsg]);

  const handleFeed = (foodItemId: string) => {
    if (!selectedParkId) return;
    const result = feedBuddy(selectedParkId, foodItemId);
    setFeedMsg(result.message);
  };

  const handleToggleClothing = (itemId: string) => {
    if (!selectedParkId) return;
    toggleEquipClothing(selectedParkId, itemId);
  };

  const handleToggleDecoration = (itemId: string) => {
    if (!selectedParkId) return;
    toggleEquipDecoration(selectedParkId, itemId);
  };

  // Empty state
  if (gardenItems.length === 0) {
    return (
      <div className="animate-fade-in px-4 pt-4">
        <header className="mb-6">
          <h1 className="font-display text-3xl text-sage-800">My Buddies</h1>
          <p className="text-sm text-sage-500 mt-1">Decorate & Nurture your park buddies</p>
        </header>
        <div className="card flex flex-col items-center text-center py-12">
          <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mb-4 animate-sway">
            <Sprout className="w-10 h-10 text-sage-400" />
          </div>
          <p className="text-sage-600 mb-1">No buddies yet</p>
          <p className="text-sm text-sage-400 mb-6">
            Explore parks, discover plants or enter a park to unlock buddies!
          </p>
          <button onClick={() => navigate("/explore")} className="btn-primary">
            Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in px-4 pt-4">
      <header className="mb-4">
        <h1 className="font-display text-3xl text-sage-800">My Buddies</h1>
        <p className="text-sm text-sage-500 mt-1">
          Feed, dress, and decorate your buddy's home to nurture your buddy
        </p>
      </header>

      {/* Character selection list */}
      {!selectedParkId && (
        <>
          {/* Stats card */}
          <div
            className="card mb-4"
            style={{
              background:
                "linear-gradient(135deg, #f0f5f1 0%, #faf7f0 100%)",
            }}
          >
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-2xl font-display text-sage-700">
                  {unlockedBuddyParks.length}
                </p>
                <p className="text-xs text-sage-400">Buddies</p>
              </div>
              <div>
                <p className="text-2xl font-display text-sage-700">
                  {allItems.length}
                </p>
                <p className="text-xs text-sage-400">Items</p>
              </div>
              <div>
                <p className="text-2xl font-display text-sage-700">
                  {Object.values(foodInventory).reduce((a, b) => a + b, 0)}
                </p>
                <p className="text-xs text-sage-400">Food</p>
              </div>
            </div>
          </div>

          {/* Buddy list */}
          <h2 className="font-serif text-lg text-sage-700 mb-3">Choose a Buddy</h2>
          <div className="space-y-3">
            {unlockedBuddyParks.map((parkId) => {
              const park = parks.find((p) => p.id === parkId);
              if (!park) return null;
              const char = getCharacter(parkId);
              const hunger = char?.hunger ?? 80;
              const hungerEmoji = getHungerEmoji(hunger);
              const hungerLabel = getHungerLabel(hunger);
              return (
                <button
                  key={parkId}
                  onClick={() => setSelectedParkId(parkId)}
                  className="card w-full flex items-center gap-4 text-left hover:shadow-float transition-all"
                  style={{ backgroundColor: `${park.themeColor}0D` }}
                >
                  <div className="animate-breathe flex-shrink-0">
                    <BuddyIllustration
                      parkId={parkId}
                      state="unlocked"
                      size="md"
                      animate
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-sage-800">
                      {park.buddy.name}
                    </h3>
                    <p className="text-xs text-sage-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {park.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs text-sage-600">
                        {hungerEmoji} {hungerLabel}
                      </span>
                      {char && char.equippedClothingIds.length > 0 && (
                        <span className="text-xs text-sage-500 flex items-center gap-0.5">
                          <Shirt className="w-3 h-3" />
                          {char.equippedClothingIds.length}
                        </span>
                      )}
                      {char && char.equippedDecorationIds.length > 0 && (
                        <span className="text-xs text-sage-500 flex items-center gap-0.5">
                          <Home className="w-3 h-3" />
                          {char.equippedDecorationIds.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-sage-400 flex-shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Locked buddies */}
          {(() => {
            const lockedParks = parks.filter(
              (p) => !unlockedBuddyParks.includes(p.id)
            );
            if (lockedParks.length === 0) return null;
            return (
              <div className="mt-6">
                <h2 className="font-serif text-lg text-sage-700 mb-3">
                  Locked Buddies
                </h2>
                <div className="space-y-2">
                  {lockedParks.map((park) => (
                    <div
                      key={park.id}
                      className="card flex items-center gap-3 opacity-60"
                    >
                      <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-sage-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-sage-600">
                          {park.buddy.name}
                        </p>
                        <p className="text-xs text-sage-400">
                          {park.name} · Explore the park to unlock
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </>
      )}

      {/* Character detail / nurture interface */}
      {selectedPark && selectedCharacter && (
        <div className="animate-fade-in">
          <button
            onClick={() => setSelectedParkId(null)}
            className="btn-ghost text-sm text-sage-500 mb-3"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to buddies
          </button>

          {/* Character home scene */}
          <div
            className="card mb-4 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${selectedPark.themeColor}22 0%, ${selectedPark.themeColor}08 100%)`,
            }}
          >
            <div className="flex flex-col items-center pt-4 pb-2">
              <p className="text-xs text-sage-400 mb-2 flex items-center gap-1">
                <Home className="w-3 h-3" />
                {selectedPark.buddy.name}'s Home
              </p>
              <CharacterScene
                buddySvg={selectedPark.buddy.fullSvg}
                clothingSvgs={equippedClothingSvgs}
                decorationSvgs={equippedDecorationSvgs}
                themeColor={selectedPark.themeColor}
              />
              <h2 className="font-display text-xl text-sage-800 mt-2">
                {selectedPark.buddy.name}
              </h2>
              <p className="text-xs text-sage-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {selectedPark.name}
              </p>
            </div>

            {/* Hunger value */}
            <div className="px-4 pb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-sage-600 flex items-center gap-1">
                  <Soup className="w-3.5 h-3.5" style={{ color: selectedPark.themeColor }} />
                  Fullness
                </span>
                <span className="text-xs text-sage-500">
                  {getHungerEmoji(displayHunger)}{" "}
                  {displayHunger}/100 · {getHungerLabel(displayHunger)}
                </span>
              </div>
              <div className="h-2.5 bg-cream-200 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    displayHunger < 20 && "animate-pulse"
                  )}
                  style={{
                    width: `${displayHunger}%`,
                    background:
                      displayHunger < 30
                        ? "linear-gradient(90deg, #E5546B, #C04560)"
                        : `linear-gradient(90deg, ${selectedPark.themeColor}, ${selectedPark.themeColor}CC)`,
                  }}
                />
              </div>
              {displayHunger < 20 && (
                <p className="text-xs text-red-400 mt-1 text-center animate-pulse">
                  {selectedPark.buddy.name} is starving! Feed it some food!
                </p>
              )}
            </div>

            {/* Feed message */}
            {feedMsg && (
              <div className="mx-4 mb-3 p-3 rounded-2xl bg-sage-50 animate-pop-in">
                <p className="text-sm text-sage-700 text-center">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  {feedMsg}
                </p>
              </div>
            )}
          </div>

          {/* Item panel tabs */}
          <div className="card mb-4">
            <div className="flex gap-1 p-1 bg-sage-50 rounded-2xl mb-3">
              <button
                onClick={() => setActiveTab("food")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-sm transition-all",
                  activeTab === "food"
                    ? "bg-white shadow-card text-sage-700"
                    : "text-sage-400"
                )}
              >
                <Utensils className="w-4 h-4" />
                Food ({Object.values(foodInventory).reduce((a, b) => a + b, 0)})
              </button>
              <button
                onClick={() => setActiveTab("clothing")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-sm transition-all",
                  activeTab === "clothing"
                    ? "bg-white shadow-card text-sage-700"
                    : "text-sage-400"
                )}
              >
                <Shirt className="w-4 h-4" />
                Clothing ({clothingItems.length})
              </button>
              <button
                onClick={() => setActiveTab("decoration")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-sm transition-all",
                  activeTab === "decoration"
                    ? "bg-white shadow-card text-sage-700"
                    : "text-sage-400"
                )}
              >
                <Home className="w-4 h-4" />
                Decor ({decorationItems.length})
              </button>
            </div>

            {/* Food panel */}
            {activeTab === "food" && (
              <div>
                {foodItems.length === 0 ? (
                  <p className="text-xs text-sage-400 text-center py-6">
                    No food items yet! Discover common plants in parks to get food items
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {foodItems.map((item) => {
                      const count = foodInventory[item.id] ?? 0;
                      const disabled = count <= 0;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleFeed(item.id)}
                          disabled={disabled}
                          className={cn(
                            "flex flex-col gap-1.5 p-2.5 rounded-2xl transition-all text-left",
                            disabled
                              ? "bg-sage-50 opacity-50"
                              : "bg-white hover:bg-sage-50 shadow-card hover:shadow-float"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                              style={{ backgroundColor: `${rarityColor(item.rarity)}1a` }}
                            >
                              <SvgDisplay
                                svg={item.iconSvg}
                                className="w-full h-full p-1"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-sage-800 truncate">
                                {item.name} Food
                              </p>
                              <p className="text-xs" style={{ color: rarityColor(item.rarity) }}>
                                Food item
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-sage-400">
                              Fullness +{item.satiety}
                            </span>
                            <span className={cn("font-medium", count > 0 ? "text-sage-700" : "text-sage-300")}>
                              x{count}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-sage-300 mt-2 text-center">
                  Discover common plants to get food items. Feed your buddy when it's hungry
                </p>
              </div>
            )}

            {/* Clothing panel */}
            {activeTab === "clothing" && (
              <div>
                {clothingItems.length === 0 ? (
                  <p className="text-xs text-sage-400 text-center py-6">
                    No clothing items yet! Discover rare plants in parks to get clothing items
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {clothingItems.map((item) => {
                      const isEquipped =
                        selectedCharacter.equippedClothingIds.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleToggleClothing(item.id)}
                          className={cn(
                            "flex flex-col gap-1.5 p-2.5 rounded-2xl transition-all text-left",
                            isEquipped
                              ? "ring-2"
                              : "bg-white hover:bg-sage-50 shadow-card hover:shadow-float"
                          )}
                          style={
                            isEquipped
                              ? {
                                  backgroundColor: `${item.themeColor}0D`,
                                  borderColor: item.themeColor,
                                }
                              : undefined
                          }
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                              style={{ backgroundColor: `${rarityColor(item.rarity)}1a` }}
                            >
                              <SvgDisplay
                                svg={item.iconSvg}
                                className="w-full h-full p-1"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-sage-800 truncate">
                                {item.name} {clothingSlotLabel[item.clothingSlot || ""]}
                              </p>
                              <p className="text-xs" style={{ color: rarityColor(item.rarity) }}>
                                Clothing item
                              </p>
                            </div>
                          </div>
                          {isEquipped && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full text-white text-center"
                              style={{ backgroundColor: item.themeColor }}
                            >
                              Wearing
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-sage-300 mt-2 text-center">
                  Tap clothing to dress/undress your buddy
                </p>
              </div>
            )}

            {/* Decoration panel */}
            {activeTab === "decoration" && (
              <div>
                {decorationItems.length === 0 ? (
                  <p className="text-xs text-sage-400 text-center py-6">
                    No decor items yet! Discover epic plants in parks to get home decor items
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {decorationItems.map((item) => {
                      const isEquipped =
                        selectedCharacter.equippedDecorationIds.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleToggleDecoration(item.id)}
                          className={cn(
                            "flex flex-col gap-1.5 p-2.5 rounded-2xl transition-all text-left",
                            isEquipped
                              ? "ring-2"
                              : "bg-white hover:bg-sage-50 shadow-card hover:shadow-float"
                          )}
                          style={
                            isEquipped
                              ? {
                                  backgroundColor: `${item.themeColor}0D`,
                                  borderColor: item.themeColor,
                                }
                              : undefined
                          }
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                              style={{ backgroundColor: `${rarityColor(item.rarity)}1a` }}
                            >
                              <SvgDisplay
                                svg={item.iconSvg}
                                className="w-full h-full p-1"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-sage-800 truncate">
                                {item.name} {decorationSlotLabel[item.decorationSlot || ""]}
                              </p>
                              <p className="text-xs" style={{ color: rarityColor(item.rarity) }}>
                                Home decor
                              </p>
                            </div>
                          </div>
                          {isEquipped && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full text-white text-center"
                              style={{ backgroundColor: item.themeColor }}
                            >
                              Placed
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-sage-300 mt-2 text-center">
                  Tap decor to place/remove in your buddy's home
                </p>
              </div>
            )}
          </div>

          {/* Item collection progress */}
          <div className="card mb-4">
            <h3 className="font-serif text-base text-sage-700 mb-2">
              Item Collection Progress
            </h3>
            <p className="text-xs text-sage-400 mb-3">
              Different parks have different plants. Common plants yield food, rare plants yield clothing, epic plants yield decor
            </p>
            <div className="space-y-1.5">
              {parks.map((park) => {
                const items = allItems.filter((i) => i.parkId === park.id);
                const foodCount = items.filter((i) => i.type === "food").length;
                const clothCount = items.filter((i) => i.type === "clothing").length;
                const decoCount = items.filter((i) => i.type === "decoration").length;
                const total = park.plants.length;
                const isUnlocked = unlockedBuddyParks.includes(park.id);
                return (
                  <button
                    key={park.id}
                    onClick={() => navigate(`/park/${park.id}`)}
                    className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-sage-50 transition-colors text-left"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: park.themeColor }}
                    />
                    <span className="text-xs text-sage-700 flex-1 truncate">
                      {park.name}
                    </span>
                    <span className="text-xs flex items-center gap-1.5">
                      {foodCount > 0 && (
                        <span className="text-sage-500 flex items-center gap-0.5">
                          <Utensils className="w-3 h-3" />
                          {foodCount}
                        </span>
                      )}
                      {clothCount > 0 && (
                        <span className="text-blue-500 flex items-center gap-0.5">
                          <Shirt className="w-3 h-3" />
                          {clothCount}
                        </span>
                      )}
                      {decoCount > 0 && (
                        <span className="text-purple-500 flex items-center gap-0.5">
                          <Home className="w-3 h-3" />
                          {decoCount}
                        </span>
                      )}
                      <span className="text-sage-400">/{total}</span>
                    </span>
                    {!isUnlocked && <Lock className="w-3 h-3 text-sage-300" />}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => navigate("/explore")}
            className="btn-secondary w-full"
          >
            Explore more parks
          </button>
        </div>
      )}
    </div>
  );
}
