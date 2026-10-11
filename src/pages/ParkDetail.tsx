// Park exploration page — theme header / buddy / discovery progress / plant clue cards
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, MapPin, Check, Sparkles, Leaf, PartyPopper, Navigation, Gift } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import BuddyIllustration from "@/components/BuddyIllustration";
import ParkMap from "@/components/ParkMap";
import DemoBadge from "@/components/DemoBadge";
import SvgDisplay from "@/components/SvgDisplay";
import { getItemRewardDescription, rarityColor } from "@/data/itemProperties";

function getCurrentMonth(): number {
  return new Date().getMonth() + 1;
}

export default function ParkDetail() {
  const { parkId = "" } = useParams();
  const navigate = useNavigate();
  const park = useAppStore((s) => s.parks.find((p) => p.id === parkId));
  const buddyState = useAppStore((s) => s.getBuddyState(parkId));
  const discoveredCount = useAppStore((s) => s.getDiscoveryCount(parkId));
  const isPlantDiscovered = useAppStore((s) => s.isPlantDiscovered);
  const checkInPark = useAppStore((s) => s.checkInPark);
  const userLocation = useAppStore((s) => s.userLocation);

  // On entering a park, check if within range and auto-unlock the buddy
  const [checkInResult, setCheckInResult] = useState<{
    inRange: boolean;
    buddyJustUnlocked: boolean;
  } | null>(null);

  useEffect(() => {
    if (parkId && userLocation) {
      const result = checkInPark(parkId);
      setCheckInResult(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parkId, userLocation?.lng, userLocation?.lat]);

  // If no location yet, try to auto-request it
  const requestLocation = useAppStore((s) => s.requestLocation);
  const locationRequested = useAppStore((s) => s.locationRequested);

  useEffect(() => {
    if (parkId && !locationRequested) {
      requestLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parkId]);

  if (!park) {
    return (
      <div className="animate-fade-in px-4 pt-4 flex flex-col items-center gap-4">
        <p className="text-center text-sage-500 py-12">Park not found</p>
        <Link to="/explore" className="btn-secondary">
          Back to Explore
        </Link>
      </div>
    );
  }

  const totalPlants = park.plants.length;
  const progress = totalPlants > 0 ? (discoveredCount / totalPlants) * 100 : 0;
  const currentMonth = getCurrentMonth();

  const buddyText =
    buddyState === "unknown"
      ? "This buddy is still hiding"
      : buddyState === "familiar"
      ? "You're getting to know it"
      : `${park.buddy.name} · ${park.buddy.intro}`;

  // Check-in unlock banner text
  const checkInBanner: {
    Icon: typeof PartyPopper;
    text: string;
  } | null =
    checkInResult?.buddyJustUnlocked
      ? { Icon: PartyPopper, text: `You arrived at ${park.name}! ${park.buddy.name} is here to welcome you!` }
      : checkInResult?.inRange && buddyState === "unlocked"
      ? { Icon: MapPin, text: `You are at ${park.name}, ${park.buddy.name} is with you` }
      : userLocation && !checkInResult?.inRange
      ? { Icon: Navigation, text: `You're not at ${park.name}, get closer to meet ${park.buddy.name}` }
      : null;

  return (
    <div className="animate-fade-in">
      {/* Theme header */}
      <header
        className="relative px-4 pt-12 pb-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${park.themeColor}, ${park.themeColorDark})`,
        }}
      >
        <button
          onClick={() => navigate("/explore")}
          className="absolute top-4 left-4 flex items-center gap-0.5 text-white/90 text-sm hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center">
          <h1 className="font-display text-3xl text-white">{park.name}</h1>
          <p className="text-sm text-white/80 mt-1 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            {park.district}
          </p>
          <p className="text-sm text-white/75 mt-3 max-w-xs mx-auto text-balance">
            {park.intro}
          </p>
        </div>
      </header>

      <div className="px-4 pt-4 space-y-4">
        {/* Check-in banner */}
        {checkInBanner && (
          <div
            className="card flex items-center gap-3 animate-pop-in"
            style={{ backgroundColor: `${park.themeColor}14` }}
          >
            <checkInBanner.Icon
              className="w-5 h-5 flex-shrink-0"
              style={{ color: park.themeColor }}
            />
            <p className="text-sm text-sage-700 flex-1">{checkInBanner.text}</p>
            {userLocation?.isDemo && <DemoBadge label="Demo Location" />}
          </div>
        )}

        {/* Buddy illustration */}
        <section className="card flex flex-col items-center text-center">
          <BuddyIllustration parkId={park.id} size="lg" animate />
          <p className="mt-3 text-sm text-sage-600">{buddyText}</p>
          {buddyState === "unknown" && (
            <p className="text-xs text-sage-400 mt-1">
              Discover {park.buddy.unlockCondition.discoverCount} plants to unlock the buddy
            </p>
          )}
        </section>

        {/* Discovery progress */}
        <section className="card">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif text-base text-sage-700">Discovery Progress</h2>
            <span className="text-sm text-sage-600 font-medium">
              {discoveredCount}/{totalPlants}
            </span>
          </div>
          <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: park.themeColor }}
            />
          </div>
        </section>

        {/* Park map */}
        <section className="card">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif text-base text-sage-700">Park Map</h2>
            {!park.hasReliableInternalMap && <DemoBadge />}
          </div>
          <ParkMap park={park} showUserLocation showPlantMarkers height="240px" />
          <p className="text-xs text-sage-400 mt-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            "?" marks undiscovered plants, tap to see clues
          </p>
        </section>

        {/* Plant clue cards */}
        <section>
          <h2 className="font-serif text-lg text-sage-700 mb-3">Plant Clues</h2>
          <div className="space-y-3">
            {park.plants.map((plant) => {
              const discovered = isPlantDiscovered(park.id, plant.id);
              const firstClue = plant.clues[0];
              const outOfSeason =
                plant.isSeasonal &&
                plant.seasonMonths != null &&
                !plant.seasonMonths.includes(currentMonth);
              const reward = getItemRewardDescription(plant.id);
              const rColor = rarityColor(reward.rarity);

              if (discovered) {
                return (
                  <div key={plant.id} className="card">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-sage-800">
                        {plant.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-sage-100 text-sage-600">
                        <Check className="w-3 h-3" /> Discovered
                      </span>
                    </div>
                    <p className="text-xs text-sage-500 mb-2 italic">
                      {plant.scientificName}
                    </p>
                    {/* Obtained item */}
                    <div
                      className="flex items-center gap-1.5 mb-3 text-xs"
                      style={{ color: rColor }}
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>Obtained: {reward.rewardText}</span>
                    </div>
                    <Link
                      to={`/park/${park.id}/discovered/${plant.id}`}
                      className="btn-ghost text-sm"
                    >
                      View Profile
                    </Link>
                  </div>
                );
              }

              return (
                <div key={plant.id} className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {firstClue?.partialSvg ? (
                        <SvgDisplay
                          svg={firstClue.partialSvg}
                          className="w-full h-full"
                        />
                      ) : (
                        <Leaf className="w-6 h-6 text-sage-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sage-700">Mystery Plant</h3>
                      <p className="text-xs text-sage-400">Waiting to be discovered</p>
                    </div>
                  </div>
                  {firstClue && (
                    <p className="text-sm text-sage-600 mb-2 italic">
                      &ldquo;{firstClue.text}&rdquo;
                    </p>
                  )}
                  {outOfSeason && (
                    <p className="text-xs text-honey-500 mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Current season may not be ideal for observation
                    </p>
                  )}
                  {/* Item reward hint */}
                  <div
                    className="flex items-center gap-1.5 mb-3 text-xs p-1.5 rounded-lg"
                    style={{ color: rColor, backgroundColor: `${rColor}0D` }}
                  >
                    <Gift className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Reward: {reward.rewardText}</span>
                  </div>
                  <Link
                    to={`/park/${park.id}/clue/${plant.id}`}
                    className="btn-primary text-sm w-full"
                    style={{ backgroundColor: park.themeColor }}
                  >
                    I found it!
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
