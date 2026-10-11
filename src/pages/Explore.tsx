// Explore home page — park list / map view
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Map, List, Search, MapPin, X, Navigation, Crosshair, ChevronDown } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import ParkCard from "@/components/ParkCard";
import ParkMap from "@/components/ParkMap";
import DemoBadge from "@/components/DemoBadge";
import { cn } from "@/lib/utils";
import { locationService } from "@/services/serviceFactory";

export default function Explore() {
  const navigate = useNavigate();
  const parks = useAppStore((s) => s.parks);
  const userLocation = useAppStore((s) => s.userLocation);
  const locationRequested = useAppStore((s) => s.locationRequested);
  const locationLoading = useAppStore((s) => s.locationLoading);
  const requestLocation = useAppStore((s) => s.requestLocation);
  const setSimulatedLocation = useAppStore((s) => s.setSimulatedLocation);

  const [view, setView] = useState<"map" | "list">("list");
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [showNearby, setShowNearby] = useState(true);
  const [showSimPanel, setShowSimPanel] = useState(false);

  // Get nearby parks (sorted by distance, max 3)
  // Compute directly with useMemo to avoid calling store methods in a selector causing infinite re-render
  const nearbyParks = useMemo(() => {
    if (!userLocation || parks.length === 0) return [];
    return parks
      .map((park) => ({
        park,
        distance: locationService.getDistance(
          userLocation.lng,
          userLocation.lat,
          park.lng,
          park.lat
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  }, [parks, userLocation]);

  const districts = useMemo(() => {
    const set = new Set(parks.map((p) => p.district));
    return ["All", ...Array.from(set)];
  }, [parks]);

  const filteredParks = useMemo(() => {
    return parks.filter((p) => {
      const matchSearch = !search || p.name.includes(search);
      const matchDistrict = district === "All" || p.district === district;
      return matchSearch && matchDistrict;
    });
  }, [parks, search, district]);

  return (
    <div className="animate-fade-in px-4 pt-4">
      {/* Header */}
      <header className="mb-4">
        <h1 className="font-display text-3xl text-sage-800">Park Buddies</h1>
        <p className="text-sm text-sage-500 mt-1">Step into Shanghai parks, discover plants around you</p>
      </header>

      {/* Search */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search parks"
          className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white shadow-card text-sm text-sage-700 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-200"
        />
      </div>

      {/* District filter chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3">
        {districts.map((d) => (
          <button
            key={d}
            onClick={() => setDistrict(d)}
            className={cn(
              "chip whitespace-nowrap",
              district === d ? "chip-active" : "chip-default"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Location bar */}
      <div className="flex items-center gap-2 mb-3 text-sm min-h-[28px] flex-wrap">
        {!locationRequested && (
          <button
            onClick={() => requestLocation()}
            className="btn-ghost text-sage-600"
          >
            <Navigation className="w-4 h-4" />
            Enable Location
          </button>
        )}
        {locationLoading && (
          <span className="text-sage-500 flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 border-2 border-sage-300 border-t-sage-500 rounded-full animate-spin" />
            Locating...
          </span>
        )}
        {locationRequested && !locationLoading && userLocation?.isDemo && (
          <DemoBadge label="Demo Location" />
        )}
        {locationRequested && !locationLoading && !userLocation && (
          <span className="text-xs text-sage-400">Location unavailable, you can still browse parks</span>
        )}
        {/* Simulate location button */}
        <button
          onClick={() => setShowSimPanel(!showSimPanel)}
          className={cn(
            "btn-ghost text-xs ml-auto",
            showSimPanel ? "text-sage-700" : "text-sage-400"
          )}
        >
          <Crosshair className="w-3.5 h-3.5" />
          Simulate Location
          <ChevronDown className={cn("w-3 h-3 transition-transform", showSimPanel && "rotate-180")} />
        </button>
      </div>

      {/* Simulated location panel */}
      {showSimPanel && (
        <div className="card mb-3 animate-pop-in">
          <p className="text-xs text-sage-500 mb-2">
            Choose a park as your simulated location to experience entering a park and auto-unlocking the buddy
          </p>
          <div className="grid grid-cols-2 gap-2">
            {parks.map((park) => (
              <button
                key={park.id}
                onClick={() => {
                  setSimulatedLocation(park.lng, park.lat, park.name);
                  setShowSimPanel(false);
                  setShowNearby(true);
                }}
                className="flex items-center gap-2 p-2 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors text-left"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${park.themeColor}1a` }}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: park.themeColor }} />
                </div>
                <span className="text-xs text-sage-700 truncate">{park.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Nearby parks banner */}
      {userLocation && nearbyParks.length > 0 && showNearby && (
        <div className="card mb-3 p-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <div className="flex items-center gap-1.5 text-sm text-sage-700">
              <Navigation className="w-4 h-4 text-sage-500" />
              <span className="font-medium">Nearby Parks</span>
              {userLocation.isDemo && (
                <DemoBadge label="Demo Location" />
              )}
            </div>
            <button
              onClick={() => setShowNearby(false)}
              className="text-sage-400 hover:text-sage-600"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="px-4 pb-3 space-y-2">
            {nearbyParks.map(({ park, distance }) => (
              <button
                key={park.id}
                onClick={() => navigate(`/park/${park.id}`)}
                className="w-full flex items-center gap-3 p-2 rounded-2xl hover:bg-sage-50 transition-colors text-left"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${park.themeColor}1a` }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: park.themeColor }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sage-800 truncate">
                    {park.name}
                  </p>
                  <p className="text-xs text-sage-400">
                    {distance < 1000
                      ? `${distance}m`
                      : `${(distance / 1000).toFixed(1)}km`}{" "}
                    · {park.plants.length} discoveries
                  </p>
                </div>
                <span className="text-xs text-sage-400 flex-shrink-0">Visit</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* View toggle */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-serif text-lg text-sage-700">
          {district === "All" ? "All Parks" : district}
          <span className="text-sm text-sage-400 ml-1">
            ({filteredParks.length})
          </span>
        </h2>
        <div className="flex gap-1 bg-cream-200 rounded-full p-0.5">
          <button
            onClick={() => setView("list")}
            className={cn(
              "p-1.5 rounded-full transition-all",
              view === "list"
                ? "bg-white shadow-card text-sage-600"
                : "text-sage-400"
            )}
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("map")}
            className={cn(
              "p-1.5 rounded-full transition-all",
              view === "map"
                ? "bg-white shadow-card text-sage-600"
                : "text-sage-400"
            )}
            aria-label="Map view"
          >
            <Map className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "list" ? (
        filteredParks.length > 0 ? (
          <div className="space-y-3">
            {filteredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sage-400 py-12 text-sm">
            No parks found matching your criteria
          </p>
        )
      ) : (
        <ParkMap
          parks={filteredParks}
          showUserLocation
          onParkClick={(id) => navigate(`/park/${id}`)}
          height="calc(100vh - 200px)"
        />
      )}
    </div>
  );
}
