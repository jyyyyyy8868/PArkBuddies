// Camera Hook — manages camera stream, capture, resource release
import { useCallback, useEffect, useRef, useState } from "react";

export type CameraStatus = "idle" | "starting" | "active" | "denied" | "error" | "unavailable";

interface UseCameraResult {
  status: CameraStatus;
  videoRef: React.RefObject<HTMLVideoElement>;
  error: string | null;
  startCamera: () => Promise<void>;
  capture: () => Promise<Blob | null>;
  stopCamera: () => void;
}

export function useCamera(): UseCameraResult {
  const [status, setStatus] = useState<CameraStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStatus("idle");
  }, []);

  const startCamera = useCallback(async () => {
    setStatus("starting");
    setError(null);

    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unavailable");
      setError("Device does not support camera or browser lacks this capability");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 1280 },
        },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setStatus("active");
    } catch (e) {
      const err = e as DOMError;
      if (err.name === "NotAllowedError" || err.name === "SecurityError") {
        setStatus("denied");
        setError("Camera permission denied, you can upload a photo instead");
      } else if (err.name === "NotFoundError" || err.name === "OverconstrainedError") {
        setStatus("unavailable");
        setError("No available camera found");
      } else {
        setStatus("error");
        setError(err.message || "Camera failed to start");
      }
    }
  }, []);

  const capture = useCallback(async (): Promise<Blob | null> => {
    const video = videoRef.current;
    if (!video || !streamRef.current) return null;

    const canvas = document.createElement("canvas");
    const w = video.videoWidth;
    const h = video.videoHeight;
    // Take square area (center crop), suitable for plant close-up
    const size = Math.min(w, h);
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const sx = (w - size) / 2;
    const sy = (h - size) / 2;
    ctx.drawImage(video, sx, sy, size, size, 0, 0, 800, 800);

    // Compress to JPEG, quality 0.8
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob),
        "image/jpeg",
        0.8
      );
    });
  }, []);

  // Release camera on component unmount
  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  return { status, videoRef, error, startCamera, capture, stopCamera };
}

interface DOMError {
  name: string;
  message: string;
}

/** Process uploaded image: compress and fix orientation */
export async function processUploadedImage(file: File): Promise<Blob> {
  // Read image and fix EXIF orientation
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const size = Math.min(bitmap.width, bitmap.height);
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const sx = (bitmap.width - size) / 2;
    const sy = (bitmap.height - size) / 2;
    ctx.drawImage(bitmap, sx, sy, size, size, 0, 0, 800, 800);
  }
  bitmap.close();

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => resolve(blob || file),
      "image/jpeg",
      0.8
    );
  });
}
