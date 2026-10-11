// Profile — user info / stats / permissions / demo mode / data management
// Route: /profile
import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Sprout,
  Flower2,
  Navigation,
  Camera,
  Info,
  Trash2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import DemoBadge from "@/components/DemoBadge";
import { PENDING_REAL_SERVICES } from "@/services/serviceFactory";

export default function Profile() {
  const user = useAppStore((s) => s.user);
  const setNickname = useAppStore((s) => s.setNickname);
  const discoveries = useAppStore((s) => s.discoveries);
  const gardenItems = useAppStore((s) => s.gardenItems);
  const locationRequested = useAppStore((s) => s.locationRequested);
  const userLocation = useAppStore((s) => s.userLocation);
  const locationLoading = useAppStore((s) => s.locationLoading);
  const requestLocation = useAppStore((s) => s.requestLocation);
  const deleteAllData = useAppStore((s) => s.deleteAllData);

  // Compute stats from raw state to avoid selector returning a new object causing infinite re-render
  const visitedParks = new Set(discoveries.map((d) => d.parkId)).size;
  const discoveredPlants = discoveries.length;
  const unlockedBuddies = gardenItems.filter(
    (g) => g.sourceType === "buddy"
  ).length;

  const [editing, setEditing] = useState(false);
  const [nicknameValue, setNicknameValue] = useState(user.nickname);
  const [deleting, setDeleting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when entering edit mode
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  // Sync external nickname changes
  useEffect(() => {
    if (!editing) setNicknameValue(user.nickname);
  }, [user.nickname, editing]);

  function handleSaveNickname() {
    const trimmed = nicknameValue.trim();
    if (trimmed && trimmed !== user.nickname) {
      setNickname(trimmed);
    }
    setEditing(false);
  }

  async function handleDeleteData() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all personal records?\nThis action cannot be undone, including all discovery records and photos."
    );
    if (confirmed) {
      setDeleting(true);
      try {
        await deleteAllData();
      } catch {
        // Ignore errors
      }
      setDeleting(false);
    }
  }

  // Location status text
  let locationStatus = "Off";
  if (locationRequested && userLocation) {
    locationStatus = userLocation.isDemo ? "Demo" : "On";
  }

  const statCards = [
    {
      icon: MapPin,
      label: "Parks Explored",
      value: visitedParks,
      color: "#7C9885",
    },
    {
      icon: Sprout,
      label: "Plants Discovered",
      value: discoveredPlants,
      color: "#a0845c",
    },
    {
      icon: Flower2,
      label: "Buddies Unlocked",
      value: unlockedBuddies,
      color: "#F0D77B",
    },
  ];

  return (
    <div className="animate-fade-in px-4 pt-4 space-y-4">
      {/* Header */}
      <header>
        <h1 className="font-display text-3xl text-sage-800">Profile</h1>
      </header>

      {/* User card */}
      <section className="card">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
            <Flower2 className="w-8 h-8 text-sage-400" />
          </div>
          <div className="flex-1 min-w-0">
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={nicknameValue}
                  onChange={(e) => setNicknameValue(e.target.value)}
                  onBlur={handleSaveNickname}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveNickname();
                    if (e.key === "Escape") setEditing(false);
                  }}
                  maxLength={16}
                  className="flex-1 px-3 py-1.5 rounded-full bg-cream-100 text-sage-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-sage-200"
                />
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="font-display text-xl text-sage-800 hover:underline text-left"
              >
                {user.nickname}
              </button>
            )}
            <p className="text-xs text-sage-400 mt-1">Local Visitor</p>
            <p className="text-xs text-sage-300 mt-0.5 truncate">
              ID: {user.id}
            </p>
          </div>
        </div>
      </section>

      {/* Stats cards */}
      <section className="grid grid-cols-3 gap-2">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="card text-center !p-3">
              <Icon
                className="w-5 h-5 mx-auto mb-1"
                style={{ color: card.color }}
              />
              <p className="font-display text-2xl text-sage-800">
                {card.value}
              </p>
              <p className="text-xs text-sage-500 mt-0.5">{card.label}</p>
            </div>
          );
        })}
      </section>

      {/* Permission management */}
      <section className="card">
        <h2 className="font-serif text-base text-sage-700 mb-3">Permission Management</h2>
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Navigation className="w-4 h-4 text-sage-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-sage-700">Location</p>
                <p className="text-xs text-sage-400">
                  MVP uses foreground location, no background tracking
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className={`text-xs ${
                  locationStatus === "Off"
                    ? "text-sage-400"
                    : locationStatus === "Demo"
                    ? "text-honey-500"
                    : "text-sage-600"
                }`}
              >
                {locationLoading ? "Locating..." : locationStatus}
              </span>
            </div>
          </div>
          {!locationRequested && (
            <button
              onClick={() => requestLocation()}
              className="btn-secondary text-sm w-full !py-2"
              disabled={locationLoading}
            >
              <Navigation className="w-4 h-4" />
              Enable Location
            </button>
          )}
          {/* Camera */}
          <div className="flex items-center justify-between pt-3 border-t border-sage-100">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Camera className="w-4 h-4 text-sage-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-sage-700">Camera</p>
                <p className="text-xs text-sage-400">Authorization required when taking photos</p>
              </div>
            </div>
            <span className="text-xs text-sage-400 flex-shrink-0">
              On-demand
            </span>
          </div>
        </div>
      </section>

      {/* Demo mode */}
      <section className="card">
        <div className="flex items-center gap-2 mb-3">
          <DemoBadge label="Demo Mode" />
          <h2 className="font-serif text-base text-sage-700">Currently in Demo Mode</h2>
        </div>
        <div className="space-y-2">
          {PENDING_REAL_SERVICES.map((service) => (
            <div
              key={service.configKey}
              className="flex items-start gap-2 py-2 border-b border-sage-50 last:border-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-honey-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-sage-700 font-medium">
                  {service.name}
                </p>
                <p className="text-xs text-sage-400 mt-0.5">
                  {service.description}
                </p>
                <p className="text-xs text-sage-300 mt-0.5">
                  Config key: {service.configKey}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-sage-400 mt-3 italic">
          Once real services are connected, verification and reward determination will run on the server
        </p>
      </section>

      {/* Data management */}
      <section className="card">
        <h2 className="font-serif text-base text-sage-700 mb-3">Data Management</h2>
        <button
          onClick={handleDeleteData}
          disabled={deleting}
          className="btn-secondary w-full !bg-red-50 !text-red-600 hover:!bg-red-100"
        >
          <Trash2 className="w-4 h-4" />
          {deleting ? "Deleting..." : "Delete all personal records"}
        </button>
        <p className="text-xs text-sage-400 mt-2">
          This action cannot be undone, including all discovery records and photos
        </p>
      </section>

      {/* About */}
      <section className="card text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <Info className="w-4 h-4 text-sage-400" />
          <h2 className="font-display text-lg text-sage-800">Park Buddies</h2>
        </div>
        <p className="text-sm text-sage-600">Exploring Shanghai parks out of curiosity</p>
        <p className="text-xs text-sage-400 mt-2">v0.1.0 MVP · Demo Version</p>
      </section>
    </div>
  );
}
