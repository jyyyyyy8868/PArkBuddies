// Park card component — used in explore homepage list
import { useNavigate } from "react-router-dom";
import { MapPin, Check } from "lucide-react";
import type { Park } from "@/models/types";
import { useAppStore } from "@/store/useAppStore";
import { locationService } from "@/services/serviceFactory";
import BuddyIllustration from "./BuddyIllustration";
import DemoBadge from "./DemoBadge";

interface ParkCardProps {
  park: Park;
}

function formatDistance(meters: number): string {
  if (meters < 1000) return `${meters}m`;
  return `${(meters / 1000).toFixed(1)}km`;
}

export default function ParkCard({ park }: ParkCardProps) {
  const navigate = useNavigate();
  const discoveredCount = useAppStore((s) => s.getDiscoveryCount(park.id));
  const userLocation = useAppStore((s) => s.userLocation);

  const totalPlants = park.plants.length;
  const distance = userLocation
    ? locationService.getDistance(userLocation.lng, userLocation.lat, park.lng, park.lat)
    : null;

  return (
    <button
      onClick={() => navigate(`/park/${park.id}`)}
      className="card w-full text-left flex items-center gap-4 transition-all duration-200 hover:shadow-soft active:scale-[0.98] group relative"
    >
      {/* Buddy silhouette area */}
      <div
        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `${park.themeColor}1a` }}
      >
        <BuddyIllustration parkId={park.id} size="sm" />
      </div>

      {/* Info area */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-base text-sage-800 truncate">
            {park.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-sage-500 mb-2">
          <span className="flex items-center gap-0.5">
            <MapPin className="w-3 h-3" />
            {park.district}
          </span>
          {distance !== null && (
            <span className="text-earth-400">· {formatDistance(distance)} away</span>
          )}
        </div>
        {/* Discovery progress */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(discoveredCount / totalPlants) * 100}%`,
                backgroundColor: park.themeColor,
              }}
            />
          </div>
          <span className="text-xs text-sage-600 flex items-center gap-0.5">
            <Check className="w-3 h-3" />
            {discoveredCount}/{totalPlants}
          </span>
        </div>
        {discoveredCount === 0 ? (
          <p className="text-xs text-sage-400 mt-1.5">
            This park hides {totalPlants} little discoveries
          </p>
        ) : discoveredCount < totalPlants ? (
          <p className="text-xs text-sage-400 mt-1.5">
            You've found {discoveredCount} of them, with more surprises waiting to be discovered.
          </p>
        ) : (
          <p className="text-xs text-sage-500 mt-1.5 font-medium">
            You've met all the buddies in this park!
          </p>
        )}
      </div>

      {park.dataSource.includes("演示") && (
        <DemoBadge className="absolute top-2 right-2" />
      )}
    </button>
  );
}
