// Image color analysis service
// Determines whether a photo is likely a plant photo by analyzing image color distribution
// This is not real AI plant identification, but a preliminary judgment based on color features

export interface ImageAnalysisResult {
  /** Green pixel ratio 0-1 */
  greenRatio: number;
  /** Brown/earth pixel ratio 0-1 */
  earthRatio: number;
  /** Blue pixel ratio 0-1 (sky) */
  skyRatio: number;
  /** Average image brightness 0-1 */
  brightness: number;
  /** Blur score (Laplacian variance, lower means more blurry) */
  blurScore: number;
  /** Whether too dark */
  isTooDark: boolean;
  /** Whether too blurry */
  isTooBlurry: boolean;
  /** Whether likely a plant photo */
  isLikelyPlant: boolean;
  /** Reason for judgment */
  reason: string;
}

/** Analyze image Blob, returns color and quality analysis result */
export async function analyzeImage(blob: Blob): Promise<ImageAnalysisResult> {
  const bitmap = await createImageBitmap(blob);
  const canvas = document.createElement("canvas");
  // Scale down to 100x100 to speed up analysis
  const size = 100;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return {
      greenRatio: 0,
      earthRatio: 0,
      skyRatio: 0,
      brightness: 0.5,
      blurScore: 0,
      isTooDark: false,
      isTooBlurry: false,
      isLikelyPlant: false,
      reason: "Unable to analyze image",
    };
  }

  ctx.drawImage(bitmap, 0, 0, size, size);
  bitmap.close();

  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;

  let greenCount = 0;
  let earthCount = 0;
  let skyCount = 0;
  let totalBrightness = 0;
  const totalPixels = size * size;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / (3 * 255);
    totalBrightness += brightness;

    // Green detection: G significantly greater than R and B, and G > 60
    if (g > 60 && g > r * 1.2 && g > b * 1.2) {
      greenCount++;
    }
    // Brown/earth: R and G are high and close, B is low
    else if (r > 80 && g > 60 && b < r * 0.7 && r > b * 1.5) {
      earthCount++;
    }
    // Sky blue: B significantly greater than R and G, and brightness is high
    else if (b > 120 && b > r * 1.3 && b > g * 1.1 && brightness > 0.5) {
      skyCount++;
    }
  }

  const greenRatio = greenCount / totalPixels;
  const earthRatio = earthCount / totalPixels;
  const skyRatio = skyCount / totalPixels;
  const avgBrightness = totalBrightness / totalPixels;

  // Simple blur detection: calculate Laplacian variance
  const blurScore = calculateBlurScore(ctx, size);

  const isTooDark = avgBrightness < 0.15;
  const isTooBlurry = blurScore < 50;

  // Plant photo judgment logic:
  // 1. Green + brown (tree trunk) ratio > 15%, very likely a plant
  // 2. Green ratio > 10%, might be a plant
  // 3. All sky or all dark, unlikely to be a plant close-up
  const naturalRatio = greenRatio + earthRatio;
  let isLikelyPlant = false;
  let reason = "";

  if (isTooDark) {
    isLikelyPlant = false;
    reason = "Photo is too dark, cannot see plant details";
  } else if (isTooBlurry) {
    isLikelyPlant = false;
    reason = "Photo may be too blurry, try taking a clearer shot";
  } else if (naturalRatio > 0.25) {
    isLikelyPlant = true;
    reason = "Detected large amount of green and natural colors, very likely a plant photo";
  } else if (greenRatio > 0.12) {
    isLikelyPlant = true;
    reason = "Detected sufficient green, might be a plant photo";
  } else if (skyRatio > 0.5) {
    isLikelyPlant = false;
    reason = "Sky takes up too much, please get closer to the plant";
  } else {
    isLikelyPlant = false;
    reason = "Not enough plant feature colors detected, please aim at the plant";
  }

  return {
    greenRatio,
    earthRatio,
    skyRatio,
    brightness: avgBrightness,
    blurScore,
    isTooDark,
    isTooBlurry,
    isLikelyPlant,
    reason,
  };
}

/** Calculate Laplacian variance for blur detection */
function calculateBlurScore(ctx: CanvasRenderingContext2D, size: number): number {
  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;
  const gray: number[] = [];

  // Convert to grayscale
  for (let i = 0; i < data.length; i += 4) {
    gray.push(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
  }

  // Laplacian convolution [0,1,0; 1,-4,1; 0,1,0]
  const laplacian: number[] = new Array(size * size).fill(0);
  for (let y = 1; y < size - 1; y++) {
    for (let x = 1; x < size - 1; x++) {
      const idx = y * size + x;
      laplacian[idx] =
        gray[idx - size] +
        gray[idx + size] +
        gray[idx - 1] +
        gray[idx + 1] -
        4 * gray[idx];
    }
  }

  // Calculate variance
  const mean = laplacian.reduce((a, b) => a + b, 0) / laplacian.length;
  const variance =
    laplacian.reduce((a, b) => a + (b - mean) ** 2, 0) / laplacian.length;
  return variance;
}
