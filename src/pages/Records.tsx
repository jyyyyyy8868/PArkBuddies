// Discovery records — all user plant discovery history
// Route: /records
// Shows discovery records in reverse chronological order, supports filtering by park
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, ChevronRight, Camera, BookOpen } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { getPhotoURL } from "@/services/photoStorage";
import DemoBadge from "@/components/DemoBadge";
import type { Park, PlantDiscovery, UserDiscovery } from "@/models/types";
import { cn } from "@/lib/utils";

/** Format date */
function formatDate(ts: number): string {
  const d = new Date(ts);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
}

/** Single discovery record card, manages its own photo ObjectURL lifecycle */
function DiscoveryCard({
  discovery,
  park,
  plant,
}: {
  discovery: UserDiscovery;
  park: Park | undefined;
  plant: PlantDiscovery | undefined;
}) {
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  // Load photo
  useEffect(() => {
    let active = true;
    getPhotoURL(discovery.photoBlobId).then((url) => {
      if (active && url) setPhotoURL(url);
    });
    return () => {
      active = false;
    };
  }, [discovery.photoBlobId]);

  // Release ObjectURL
  useEffect(() => {
    if (!photoURL) return;
    return () => URL.revokeObjectURL(photoURL);
  }, [photoURL]);

  if (!park || !plant) return null;

  const confidence = discovery.verificationResult.confidence;
  const confidencePct = Math.round(confidence * 100);

  return (
    <div
      className="card flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform"
      onClick={() =>
        navigate(`/park/${park.id}/discovered/${plant.id}`)
      }
    >
      {/* Photo thumbnail */}
      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-cream-200 flex items-center justify-center">
        {photoURL ? (
          <img
            src={photoURL}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Camera className="w-5 h-5 text-sage-300" />
        )}
      </div>

      {/* Info area */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sage-800 truncate">{plant.name}</h3>
          {discovery.isDemo && <DemoBadge />}
        </div>
        <p className="text-xs text-sage-500 flex items-center gap-1 mt-0.5">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{park.name}</span>
        </p>
        <p className="text-xs text-sage-400 flex items-center gap-1 mt-0.5">
          <Clock className="w-3 h-3 flex-shrink-0" />
          {formatDate(discovery.discoveredAt)}
        </p>
      </div>

      {/* Right side: confidence + arrow */}
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        {confidence > 0 && (
          <span className="text-xs text-sage-500">
            Confidence {confidencePct}%
          </span>
        )}
        <ChevronRight className="w-4 h-4 text-sage-300" />
      </div>
    </div>
  );
}

export default function Records() {
  const navigate = useNavigate();
  const discoveries = useAppStore((s) => s.discoveries);
  const parks = useAppStore((s) => s.parks);

  const [filterParkId, setFilterParkId] = useState<string>("all");

  // Parks with discovery records (for filtering)
  const parksWithDiscoveries = useMemo(() => {
    const parkIds = new Set(discoveries.map((d) => d.parkId));
    return parks.filter((p) => parkIds.has(p.id));
  }, [discoveries, parks]);

  // Reverse chronological order + filter
  const sortedDiscoveries = useMemo(() => {
    const filtered =
      filterParkId === "all"
        ? discoveries
        : discoveries.filter((d) => d.parkId === filterParkId);
    return [...filtered].sort((a, b) => b.discoveredAt - a.discoveredAt);
  }, [discoveries, filterParkId]);

  // Empty state
  if (discoveries.length === 0) {
    return (
      <div className="animate-fade-in px-4 pt-4">
        <header className="mb-6">
          <h1 className="font-display text-3xl text-sage-800">Discovery Records</h1>
        </header>
        <div className="card flex flex-col items-center text-center py-12">
          <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mb-4">
            <BookOpen className="w-10 h-10 text-sage-400" />
          </div>
          <p className="text-sage-600 mb-1">No discoveries yet</p>
          <p className="text-sm text-sage-400 mb-6">
            Take photos in parks to discover plants!
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="btn-primary"
          >
            Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in px-4 pt-4">
      {/* Header */}
      <header className="mb-4">
        <h1 className="font-display text-3xl text-sage-800">Discovery Records</h1>
        <p className="text-sm text-sage-500 mt-1">
          {discoveries.length} discoveries
        </p>
      </header>

      {/* Filter chips */}
      {parksWithDiscoveries.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
          <button
            onClick={() => setFilterParkId("all")}
            className={cn(
              "chip whitespace-nowrap",
              filterParkId === "all" ? "chip-active" : "chip-default"
            )}
          >
            All
          </button>
          {parksWithDiscoveries.map((park) => (
            <button
              key={park.id}
              onClick={() => setFilterParkId(park.id)}
              className={cn(
                "chip whitespace-nowrap",
                filterParkId === park.id ? "chip-active" : "chip-default"
              )}
            >
              {park.name}
            </button>
          ))}
        </div>
      )}

      {/* Record list */}
      <div className="space-y-3">
        {sortedDiscoveries.map((discovery) => {
          const park = parks.find((p) => p.id === discovery.parkId);
          const plant = park?.plants.find((p) => p.id === discovery.plantId);
          return (
            <DiscoveryCard
              key={discovery.id}
              discovery={discovery}
              park={park}
              plant={plant}
            />
          );
        })}
      </div>

      {sortedDiscoveries.length === 0 && (
        <p className="text-center text-sage-400 py-12 text-sm">
          No discovery records for this park yet
        </p>
      )}
    </div>
  );
}
