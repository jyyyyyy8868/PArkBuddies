// Park map component — uses real map service (OpenStreetMap)
// Supports displaying park boundaries, trails, user location, plant location markers
import { useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Park } from "@/models/types";
import { mapService } from "@/services/serviceFactory";
import { useAppStore } from "@/store/useAppStore";

interface ParkMapProps {
  park?: Park;
  parks?: Park[];
  height?: string;
  showUserLocation?: boolean;
  /** Whether to show plant location markers (single park view) */
  showPlantMarkers?: boolean;
  /** Plant marker click callback (defaults to navigating to clue page) */
  onPlantClick?: (plantId: string) => void;
  onParkClick?: (parkId: string) => void;
}

export default function ParkMap({
  park,
  parks,
  height = "200px",
  showUserLocation = false,
  showPlantMarkers = false,
  onPlantClick,
  onParkClick,
}: ParkMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const userLocation = useAppStore((s) => s.userLocation);
  const navigate = useNavigate();
  // Use raw discoveries array to avoid selector returning new reference causing infinite render
  const discoveries = useAppStore((s) => s.discoveries);

  // Compute discovered plant IDs from raw data (use useMemo to stabilize reference)
  const discoveredPlantIds = useMemo(() => {
    if (!park) return [];
    return discoveries
      .filter((d) => d.parkId === park.id)
      .map((d) => d.plantId);
  }, [discoveries, park?.id]);

  // Use count as dependency to avoid array reference changes triggering re-render
  const discoveredCount = discoveredPlantIds.length;

  useEffect(() => {
    if (!containerRef.current) return;

    const center = park
      ? { lng: park.lng, lat: park.lat }
      : parks && parks[0]
      ? { lng: parks[0].lng, lat: parks[0].lat }
      : { lng: 121.527, lat: 31.297 };

    // Single park uses larger zoom, multiple parks use smaller zoom
    const zoom = park ? 16 : 12;
    mapService.initMap(containerRef.current, center, zoom);

    if (park) {
      // Single park view: show boundaries, trails, plant markers, user location
      if (park.boundary) mapService.addParkBoundary(park.boundary);
      if (park.trails) mapService.addTrails(park.trails);

      // Plant location markers
      if (showPlantMarkers) {
        for (const plant of park.plants) {
          const isUnlocked = discoveredPlantIds.includes(plant.id);
          const handleClick = () => {
            if (onPlantClick) {
              onPlantClick(plant.id);
            } else {
              navigate(`/park/${park.id}/clue/${plant.id}`);
            }
          };
          mapService.addPlantMarker(
            plant.position,
            isUnlocked,
            plant.fullSvg,
            park.themeColor,
            handleClick
          );
        }
      }

      if (showUserLocation && userLocation) {
        mapService.addUserMarker(userLocation.lng, userLocation.lat);
      }
    } else if (parks) {
      // Multiple park view: show all park markers
      for (const p of parks) {
        mapService.addParkMarker(p, () => onParkClick?.(p.id));
      }
      if (showUserLocation && userLocation) {
        mapService.addUserMarker(userLocation.lng, userLocation.lat);
      }
    }

    return () => {
      mapService.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    park?.id,
    parks,
    userLocation?.lng,
    userLocation?.lat,
    showUserLocation,
    showPlantMarkers,
    discoveredCount,
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-card overflow-hidden bg-sage-50"
      style={{ height }}
    />
  );
}
