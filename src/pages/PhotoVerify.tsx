// Photo capture & verification page — full verification state machine
// Route: /park/:parkId/verify/:plantId
// Flow: take photo → submit → identify → success redirect / failure retake
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  RotateCcw,
  Check,
  X,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useCamera } from "@/hooks/useCamera";
import { plantIdentificationService } from "@/services/serviceFactory";
import { demoIdentifySuccess } from "@/services/demoPlantIdentificationService";
import { savePhoto } from "@/services/photoStorage";
import type { VerificationResult } from "@/models/types";
import DemoBadge from "@/components/DemoBadge";
import CameraCapture from "@/components/CameraCapture";

type VerifyStatus =
  | "idle"
  | "submitting"
  | "success"
  | "noMatch"
  | "inconclusive"
  | "networkError";

export default function PhotoVerify() {
  const { parkId = "", plantId = "" } = useParams();
  const navigate = useNavigate();
  const park = useAppStore((s) => s.parks.find((p) => p.id === parkId));
  const plant = park?.plants.find((p) => p.id === plantId);
  const userLocation = useAppStore((s) => s.userLocation);
  const isPlantDiscovered = useAppStore((s) => s.isPlantDiscovered);
  const recordDiscovery = useAppStore((s) => s.recordDiscovery);

  const camera = useCamera();

  const [photoBlob, setPhotoBlob] = useState<Blob | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus>("idle");
  const [verificationResult, setVerificationResult] =
    useState<VerificationResult | null>(null);
  const [photoBlobId, setPhotoBlobId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [alreadyDiscovered, setAlreadyDiscovered] = useState(false);

  // Release object URL on unmount
  useEffect(() => {
    if (!photoURL) return;
    return () => URL.revokeObjectURL(photoURL);
  }, [photoURL]);

  // Delayed redirect to discovery page on success
  useEffect(() => {
    if (verifyStatus !== "success") return;
    const t = setTimeout(() => {
      navigate(`/park/${parkId}/discovered/${plantId}`);
    }, 1800);
    return () => clearTimeout(t);
  }, [verifyStatus, navigate, parkId, plantId]);

  if (!park || !plant) {
    return (
      <div className="animate-fade-in px-4 pt-4 flex flex-col items-center gap-4">
        <p className="text-center text-sage-500 py-12">Plant not found</p>
        <Link to="/explore" className="btn-secondary">
          Back to Explore
        </Link>
      </div>
    );
  }

  const handlePhoto = (blob: Blob, url: string) => {
    if (photoURL) URL.revokeObjectURL(photoURL);
    setPhotoBlob(blob);
    setPhotoURL(url);
  };

  const handleRetake = () => {
    if (photoURL) URL.revokeObjectURL(photoURL);
    setPhotoBlob(null);
    setPhotoURL(null);
    setVerifyStatus("idle");
    setVerificationResult(null);
    setPhotoBlobId(null);
    setError(null);
    setAlreadyDiscovered(false);
    // CameraCapture will auto startCamera when re-mounted
  };

  const finishSubmit = (result: VerificationResult, blobId: string) => {
    setVerificationResult(result);
    setPhotoBlobId(blobId);
    if (result.status === "success") {
      const already = isPlantDiscovered(parkId, plantId);
      setAlreadyDiscovered(already);
      if (!already) {
        recordDiscovery(parkId, plantId, result, blobId);
      }
    }
    setVerifyStatus(result.status);
  };

  const handleSubmit = async () => {
    if (!photoBlob) return;
    setVerifyStatus("submitting");
    setError(null);
    try {
      const blobId = await savePhoto(photoBlob);
      const result = await plantIdentificationService.identify(
        photoBlob,
        parkId,
        plantId
      );
      finishSubmit(result, blobId);
    } catch (e) {
      setError((e as Error).message || "Network error, please retry");
      setVerifyStatus("networkError");
    }
  };

  const handleDemoVerify = async () => {
    if (!photoBlob) return;
    setVerifyStatus("submitting");
    setError(null);
    try {
      const blobId = await savePhoto(photoBlob);
      const result = await demoIdentifySuccess(photoBlob, parkId, plantId);
      finishSubmit(result, blobId);
    } catch (e) {
      setError((e as Error).message || "Save failed");
      setVerifyStatus("networkError");
    }
  };

  // Location note (shown when not in demo mode and not within park range)
  const locationNote = (() => {
    if (verifyStatus !== "success" || !verificationResult) return null;
    if (verificationResult.isDemo) return null;
    if (verificationResult.inParkRange && userLocation) return null;
    return "Location unavailable, identification saved but not counted as an official discovery in this park";
  })();

  return (
    <div className="animate-fade-in px-4 pt-4">
      {/* Header */}
      <header className="flex items-center gap-2 mb-4">
        <button
          onClick={() => navigate(`/park/${parkId}/clue/${plantId}`)}
          className="flex items-center gap-0.5 text-sage-600 text-sm hover:text-sage-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Clues
        </button>
        <span className="text-sm text-sage-300">·</span>
        <span className="text-sm text-sage-500 truncate flex-1">Photo Verification</span>
        <DemoBadge label="Demo identification" />
      </header>

      {/* State 1: no photo yet */}
      {!photoBlob && verifyStatus === "idle" && (
        <CameraCapture
          camera={camera}
          onPhoto={handlePhoto}
          themeColor={park.themeColor}
        />
      )}

      {/* State 2: photo taken, pending submit */}
      {photoBlob && verifyStatus === "idle" && (
        <div className="space-y-3">
          <div className="relative aspect-square w-full rounded-card overflow-hidden bg-sage-100">
            {photoURL && (
              <img
                src={photoURL}
                alt="Photo of plant"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <p className="text-xs text-sage-400 text-center">Photo will be used for plant identification</p>
          <div className="flex gap-3">
            <button onClick={handleRetake} className="btn-secondary flex-1">
              <RotateCcw className="w-4 h-4" />
              Retake
            </button>
            <button
              onClick={handleSubmit}
              className="btn-primary flex-1"
              style={{ backgroundColor: park.themeColor }}
            >
              <Check className="w-4 h-4" />
              Submit
            </button>
          </div>
          <button onClick={handleDemoVerify} className="btn-ghost w-full text-sm">
            <Sparkles className="w-4 h-4" />
            Simulate (Demo)
          </button>
        </div>
      )}

      {/* State 3: identifying */}
      {verifyStatus === "submitting" && (
        <div className="card flex flex-col items-center py-12 gap-3">
          {photoURL && (
            <div className="w-32 h-32 rounded-card overflow-hidden bg-sage-100 mb-2">
              <img
                src={photoURL}
                alt="To be identified"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <Loader2 className="w-6 h-6 text-sage-500 animate-spin" />
          <p className="text-sm text-sage-600">Identifying...</p>
        </div>
      )}

      {/* State 4: identification success */}
      {verifyStatus === "success" && verificationResult && (
        <div className="card flex flex-col items-center py-10 gap-3 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center animate-pop-in"
            style={{ backgroundColor: `${park.themeColor}22` }}
          >
            <Check className="w-8 h-8" style={{ color: park.themeColor }} />
          </div>
          {alreadyDiscovered ? (
            <p className="text-sage-700 font-medium">
              You've already discovered this plant friend
            </p>
          ) : (
            <p className="text-sage-700 font-medium">
              Identified! It's this plant friend
            </p>
          )}
          {locationNote && (
            <p className="text-xs text-sage-400 max-w-xs text-balance">
              {locationNote}
            </p>
          )}
          <p className="text-xs text-sage-400">Opening plant profile...</p>
        </div>
      )}

      {/* State 5: no match */}
      {verifyStatus === "noMatch" && (
        <div className="card flex flex-col items-center py-10 gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center">
            <X className="w-7 h-7 text-sage-500" />
          </div>
          <p className="text-sage-700 font-medium">
            This might be a different plant
          </p>
          <p className="text-sm text-sage-500">Check the clues again, it might be nearby</p>
          <button onClick={handleRetake} className="btn-secondary mt-2">
            <RotateCcw className="w-4 h-4" />
            Retake
          </button>
        </div>
      )}

      {/* State 6: inconclusive */}
      {verifyStatus === "inconclusive" && (
        <div className="card flex flex-col items-center py-10 gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-sage-500" />
          </div>
          <p className="text-sage-700 font-medium">Can't tell from this photo</p>
          <p className="text-sm text-sage-500">Try getting closer, focus on leaves or flowers</p>
          <button onClick={handleRetake} className="btn-secondary mt-2">
            <RotateCcw className="w-4 h-4" />
            Retake
          </button>
        </div>
      )}

      {/* State 7: network error */}
      {verifyStatus === "networkError" && (
        <div className="card flex flex-col items-center py-10 gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center">
            <X className="w-7 h-7 text-sage-500" />
          </div>
          <p className="text-sage-700 font-medium">Couldn't confirm yet</p>
          <p className="text-sm text-sage-500">Keep the photo and try again</p>
          {error && <p className="text-xs text-sage-400">{error}</p>}
          <div className="flex gap-3 mt-2">
            <button onClick={handleRetake} className="btn-secondary">
              <RotateCcw className="w-4 h-4" />
              Retake
            </button>
            <button
              onClick={handleSubmit}
              className="btn-primary"
              style={{ backgroundColor: park.themeColor }}
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
