// Photo capture component — camera preview, capture, album upload
// Used by PhotoVerify, handles camera framing and photo capture
import { useEffect, useRef } from "react";
import { Camera, Upload, Loader2 } from "lucide-react";
import { useCamera, processUploadedImage } from "@/hooks/useCamera";

type Camera = ReturnType<typeof useCamera>;

interface CameraCaptureProps {
  camera: Camera;
  onPhoto: (blob: Blob, url: string) => void;
  themeColor: string;
}

export default function CameraCapture({
  camera,
  onPhoto,
  themeColor,
}: CameraCaptureProps) {
  const { status, videoRef, error, startCamera, capture, stopCamera } = camera;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-start camera
  useEffect(() => {
    if (status === "idle") startCamera();
    // Only execute once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCapture = async () => {
    const blob = await capture();
    if (blob) {
      const url = URL.createObjectURL(blob);
      onPhoto(blob, url);
      stopCamera();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const blob = await processUploadedImage(file);
      const url = URL.createObjectURL(blob);
      onPhoto(blob, url);
      stopCamera();
    } catch {
      // Silently ignore when upload processing fails
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const showVideo = status === "active" || status === "starting";
  const showError =
    status === "denied" || status === "unavailable" || status === "error";

  return (
    <div className="space-y-3">
      {/* Capture hint */}
      <p className="text-sm text-sage-500 text-center text-balance">
        Capture leaves or flowers clearly, try to center the plant in the frame
      </p>

      {/* Camera preview / error prompt */}
      <div className="relative aspect-square w-full rounded-card overflow-hidden bg-sage-900 flex items-center justify-center">
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        )}

        {/* Square viewfinder overlay */}
        {status === "active" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-4 border-2 border-white/60 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white/70 rounded-full" />
            </div>
          </div>
        )}

        {/* Starting */}
        {status === "starting" && (
          <div className="text-white/80 text-sm flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Starting camera...
          </div>
        )}

        {/* Error state */}
        {showError && (
          <div className="p-6 text-center">
            <p className="text-white/90 text-sm mb-3">{error}</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary text-sm"
            >
              <Upload className="w-4 h-4" />
              Upload from Album
            </button>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Action buttons — capture button only shows when camera is ready, upload button always visible */}
      <div className="flex flex-col items-center gap-3">
        {status === "active" && (
          <button
            onClick={handleCapture}
            className="w-16 h-16 rounded-full bg-white border-4 shadow-soft active:scale-95 transition-transform flex items-center justify-center"
            style={{ borderColor: themeColor }}
            aria-label="Capture"
          >
            <Camera className="w-6 h-6 text-sage-700" />
          </button>
        )}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="btn-secondary text-sm"
        >
          <Upload className="w-4 h-4" />
          Upload from Album
        </button>
      </div>
    </div>
  );
}
