// Plant clue page — mystery atmosphere / all clues / discovery entry / item reward hint
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, Camera, Sparkles, Leaf, Gift } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import SvgDisplay from "@/components/SvgDisplay";
import { getItemRewardDescription, rarityColor, rarityLabel } from "@/data/itemProperties";

function getCurrentMonth(): number {
  return new Date().getMonth() + 1;
}

const CLUE_TYPE_LABELS: Record<string, string> = {
  silhouette: "Silhouette",
  leaf: "Leaf",
  bark: "Bark",
  flower: "Flower",
  description: "Description",
};

export default function PlantClue() {
  const { parkId = "", plantId = "" } = useParams();
  const navigate = useNavigate();
  const park = useAppStore((s) => s.parks.find((p) => p.id === parkId));
  const plant = park?.plants.find((p) => p.id === plantId);

  if (!park || !plant) {
    return (
      <div className="animate-fade-in px-4 pt-4 flex flex-col items-center gap-4">
        <p className="text-center text-sage-500 py-12">Clue not found</p>
        <Link to="/explore" className="btn-secondary">
          Back to Explore
        </Link>
      </div>
    );
  }

  const currentMonth = getCurrentMonth();
  const outOfSeason =
    plant.isSeasonal &&
    plant.seasonMonths != null &&
    !plant.seasonMonths.includes(currentMonth);
  const seasonText = plant.seasonMonths?.join(", ") ?? "";

  // Get item reward info
  const reward = getItemRewardDescription(plant.id);
  const rewardColor = rarityColor(reward.rarity);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="px-4 pt-4 flex items-center gap-2">
        <button
          onClick={() => navigate(`/park/${park.id}`)}
          className="flex items-center gap-0.5 text-sage-600 text-sm hover:text-sage-700"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <span className="text-sm text-sage-300">·</span>
        <span className="text-sm text-sage-500 truncate">{park.name}</span>
      </header>

      <div className="px-4 pt-4">
        {/* Mystery hero */}
        <section
          className="rounded-card p-6 mb-4 text-center"
          style={{
            background: `linear-gradient(160deg, ${park.themeColorDark}, #2d3a30)`,
          }}
        >
          <div className="w-40 h-40 mx-auto flex items-center justify-center mb-4">
            <SvgDisplay
              svg={park.buddy.silhouetteSvg}
              className="w-full h-full opacity-50"
            />
          </div>
          <h1 className="font-display text-2xl text-cream-100">
            A Mysterious Plant
          </h1>
          <p className="text-sm text-cream-100/70 mt-2">
            Get closer, look at the leaf shape
          </p>
        </section>

        {/* Seasonal notice */}
        {outOfSeason && (
          <div
            className="card mb-4 flex items-start gap-2"
            style={{ backgroundColor: `${park.themeColor}14` }}
          >
            <Sparkles
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: park.themeColor }}
            />
            <p className="text-sm text-sage-600">
              This plant is easier to spot in months {seasonText}
            </p>
          </div>
        )}

        {/* Clue cards */}
        <section className="space-y-3 mb-6">
          <h2 className="font-serif text-lg text-sage-700">Observation Clues</h2>
          {plant.clues.map((clue, idx) => (
            <div key={clue.id} className="card">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
                  style={{ backgroundColor: park.themeColor }}
                >
                  {idx + 1}
                </span>
                <span className="text-xs text-sage-400 tracking-wide">
                  {CLUE_TYPE_LABELS[clue.type] ?? clue.type}
                </span>
              </div>

              {clue.partialSvg && (
                <div className="mb-3 flex justify-center">
                  <SvgDisplay
                    svg={clue.partialSvg}
                    className="w-32 h-32"
                  />
                </div>
              )}

              {clue.type === "silhouette" && !clue.partialSvg && (
                <div className="mb-3 h-32 rounded-2xl bg-sage-800 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-sage-600 opacity-60" />
                </div>
              )}

              <p className="text-sm text-sage-700 italic leading-relaxed">
                &ldquo;{clue.text}&rdquo;
              </p>
            </div>
          ))}
        </section>

        {/* Item reward hint */}
        <section
          className="card mb-4"
          style={{ backgroundColor: `${rewardColor}0D`, borderColor: `${rewardColor}33` }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${rewardColor}1A` }}
            >
              <Gift className="w-5 h-5" style={{ color: rewardColor }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-sage-800">
                  Reward for discovering
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ color: rewardColor, backgroundColor: `${rewardColor}1A` }}
                >
                  {rarityLabel(reward.rarity)} tier
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: rewardColor }}>
                {reward.rewardText}
              </p>
              <p className="text-xs text-sage-500 mt-0.5">
                {reward.rewardDetail}
              </p>
            </div>
          </div>
        </section>

        {/* CTA button */}
        <Link
          to={`/park/${park.id}/verify/${plant.id}`}
          className="btn-primary w-full"
          style={{ backgroundColor: park.themeColor }}
        >
          <Camera className="w-5 h-5" />
          I think I found it
        </Link>
        <p className="text-center text-xs text-sage-400 mt-2">
          Snap a photo of the plant, Park Buddies will help identify it
        </p>
      </div>
    </div>
  );
}
