// Discovery success page — plant profile & celebration
// Route: /park/:parkId/discovered/:plantId
// Shows full plant profile, user photo, achievement text, buddy unlock state
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PartyPopper, MapPin, Clock, Sparkles, BookOpen, Leaf, Flower2, Scroll, Gift } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { getPhotoURL } from "@/services/photoStorage";
import DemoBadge from "@/components/DemoBadge";
import SvgDisplay from "@/components/SvgDisplay";
import BuddyIllustration from "@/components/BuddyIllustration";
import { getItemRewardDescription, rarityColor, rarityLabel } from "@/data/itemProperties";

function formatDate(ts: number): string {
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

export default function DiscoverySuccess() {
  const { parkId = "", plantId = "" } = useParams();
  const navigate = useNavigate();
  const park = useAppStore((s) => s.parks.find((p) => p.id === parkId));
  const plant = park?.plants.find((p) => p.id === plantId);
  const discovery = useAppStore((s) =>
    s.discoveries.find(
      (d) => d.parkId === parkId && d.plantId === plantId
    )
  );
  const discoveryCount = useAppStore((s) => s.getDiscoveryCount(parkId));
  const buddyState = useAppStore((s) => s.getBuddyState(parkId));

  const [photoURL, setPhotoURL] = useState<string | null>(null);

  // Load user photo
  useEffect(() => {
    let active = true;
    if (discovery) {
      getPhotoURL(discovery.photoBlobId).then((u) => {
        if (active && u) setPhotoURL(u);
      });
    }
    return () => {
      active = false;
    };
  }, [discovery]);

  // Release object URL on unmount or when URL changes
  useEffect(() => {
    if (!photoURL) return;
    return () => URL.revokeObjectURL(photoURL);
  }, [photoURL]);

  if (!park || !plant || !discovery) {
    return (
      <div className="animate-fade-in px-4 pt-4 flex flex-col items-center gap-4">
        <p className="text-center text-sage-500 py-12">
          Haven't discovered this plant friend yet
        </p>
        <Link to="/explore" className="btn-secondary">
          Back to Explore
        </Link>
      </div>
    );
  }

  const buddy = park.buddy;
  // Obtained item info
  const reward = getItemRewardDescription(plant.id);
  const rColor = rarityColor(reward.rarity);
  // Per spec:buddy state is unlocked and current discovery count equals unlock condition → just unlocked
  const buddyJustUnlocked =
    buddyState === "unlocked" &&
    discoveryCount === buddy.unlockCondition.discoverCount;
  const remainingForBuddy = Math.max(
    0,
    buddy.unlockCondition.discoverCount - discoveryCount
  );

  return (
    <div className="animate-fade-in px-4 pt-4">
      <header className="flex items-center justify-between mb-4">
        <span className="text-sm text-sage-500">Discovery Profile</span>
        <DemoBadge />
      </header>

      {/* Celebration header */}
      <section
        className="rounded-card p-6 mb-4 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${park.themeColor}22, ${park.themeColorDark}33)`,
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-3 text-sage-700">
          <PartyPopper className="w-5 h-5 animate-pop-in" />
          <span className="text-sm font-medium">It was here all along</span>
        </div>
        <div className="w-40 h-40 mx-auto flex items-center justify-center animate-pop-in">
          <SvgDisplay svg={plant.fullSvg} className="w-full h-full" />
        </div>
        <h1 className="font-display text-3xl text-sage-800 mt-3">You found it!</h1>
        <p className="text-sm text-sage-500 mt-1">{park.name}</p>
      </section>

      {/* Obtained item card */}
      <section
        className="card mb-4"
        style={{ backgroundColor: `${rColor}0D`, borderColor: `${rColor}33` }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pop-in"
            style={{ backgroundColor: `${rColor}1A` }}
          >
            <Gift className="w-6 h-6" style={{ color: rColor }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-sage-500">New item discovered!</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ color: rColor, backgroundColor: `${rColor}1A` }}
              >
                {rarityLabel(reward.rarity)} tier
              </span>
            </div>
            <p className="text-sm font-medium" style={{ color: rColor }}>
              {reward.rewardText}
            </p>
            <p className="text-xs text-sage-500 mt-0.5">
              {reward.rewardDetail}
            </p>
          </div>
        </div>
      </section>

      {/* Plant profile card */}
      <section className="card space-y-4 mb-4">
        <div>
          <h2 className="font-display text-2xl text-sage-800">{plant.name}</h2>
          <p className="text-sm italic text-sage-400">
            {plant.scientificName}
          </p>
        </div>

        {/* User photo */}
        {photoURL ? (
          <div className="w-full aspect-square rounded-card overflow-hidden bg-sage-100">
            <img
              src={photoURL}
              alt="Your discovery photo"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full aspect-square rounded-card bg-cream-200 flex items-center justify-center">
            <span className="text-sm text-sage-400">Photo loading...</span>
          </div>
        )}

        {/* Meta info */}
        <div className="space-y-2 text-sm text-sage-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sage-400 flex-shrink-0" />
            <span>Discovered at {park.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sage-400 flex-shrink-0" />
            <span>Discovered on {formatDate(discovery.discoveredAt)}</span>
          </div>
        </div>

        {/* Detailed intro */}
        <div
          className="rounded-card p-4"
          style={{ backgroundColor: `${park.themeColor}0A` }}
        >
          <p className="text-xs text-sage-500 mb-2 flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            Details
          </p>
          <p className="text-sm text-sage-700 leading-relaxed">
            {plant.detailedIntro}
          </p>
        </div>

        {/* Growing habits / Ornamental value / Cultural significance */}
        <div className="grid gap-3">
          {plant.habitat && (
            <div className="flex items-start gap-3 p-3 rounded-card bg-cream-200">
              <Leaf className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-sage-500 mb-0.5">Growing Habits</p>
                <p className="text-sm text-sage-700">{plant.habitat}</p>
              </div>
            </div>
          )}
          {plant.uses && (
            <div className="flex items-start gap-3 p-3 rounded-card bg-cream-200">
              <Flower2 className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-sage-500 mb-0.5">Uses</p>
                <p className="text-sm text-sage-700">{plant.uses}</p>
              </div>
            </div>
          )}
          {plant.culturalNote && (
            <div className="flex items-start gap-3 p-3 rounded-card bg-cream-200">
              <Scroll className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-sage-500 mb-0.5">Cultural Significance</p>
                <p className="text-sm text-sage-700">{plant.culturalNote}</p>
              </div>
            </div>
          )}
        </div>

        {/* Fun fact */}
        <div
          className="rounded-card p-3"
          style={{ backgroundColor: `${park.themeColor}14` }}
        >
          <p className="text-xs text-sage-500 mb-1">Fun Fact</p>
          <p className="text-sm text-sage-700">{plant.funFact}</p>
        </div>

        {/* Plant knowledge */}
        <div>
          <p className="text-xs text-sage-500 mb-1">Plant Knowledge</p>
          <p className="text-sm text-sage-700 leading-relaxed">
            {plant.knowledge}
          </p>
          <p className="text-xs text-sage-400 mt-2">
            Source: {plant.knowledgeSource}
            {discovery.isDemo && " · Demo data"}
          </p>
        </div>

        {/* Next observation */}
        <div>
          <p className="text-xs text-sage-500 mb-1">Next observation</p>
          <p className="text-sm text-sage-700">{plant.nextObserve}</p>
        </div>
      </section>

      {/* Achievement text */}
      <section className="card mb-4 text-center">
        <p className="text-sm text-sage-700">
          This is your{" "}
          <span className="font-display text-lg text-sage-800">
            {discoveryCount}
          </span>{" "}
          plant friend in this park
        </p>
      </section>

      {/* Buddy state */}
      {buddyJustUnlocked ? (
        <section
          className="card mb-4 text-center"
          style={{ backgroundColor: `${park.themeColor}14` }}
        >
          <p className="text-xs text-sage-500 mb-3 flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3" />
            New buddy unlocked
          </p>
          <BuddyIllustration
            parkId={park.id}
            state="unlocked"
            size="lg"
            animate
          />
          <h3 className="font-display text-xl text-sage-800 mt-3">
            You unlocked {buddy.name}!
          </h3>
          <p className="text-sm text-sage-600 mt-1">{buddy.intro}</p>
        </section>
      ) : buddyState !== "unlocked" && remainingForBuddy > 0 ? (
        <section className="card mb-4 text-center">
          <BuddyIllustration parkId={park.id} state="familiar" size="md" />
          <p className="text-sm text-sage-600 mt-2">
            Discover {remainingForBuddy} more to meet {buddy.name}
          </p>
        </section>
      ) : null}

      {/* Action buttons */}
      <div className="space-y-3">
        <button
          onClick={() => navigate("/garden")}
          className="btn-primary w-full"
          style={{ backgroundColor: park.themeColor }}
        >
          <Gift className="w-4 h-4" />
          View My Buddies
        </button>
        <button
          onClick={() => navigate(`/park/${parkId}`)}
          className="btn-secondary w-full"
        >
          Keep exploring this park
        </button>
      </div>
    </div>
  );
}
