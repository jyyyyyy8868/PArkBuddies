// Demo plant identification service
// Combines image color analysis to determine whether a photo is likely a plant photo
// No longer accepts any photo — photos must pass image analysis to enter the "identification" step
// Note: Real AI plant identification requires integrating Pl@ntNet API (register to get API Key), called via backend proxy

import type { PlantIdentificationService } from "./interfaces";
import type { VerificationResult } from "../models/types";
import { demoParks } from "../data/parks";
import { yangpuParks } from "../data/yangpuParks";
import { analyzeImage } from "./imageAnalysis";

// All park data
const allParks = [...demoParks, ...yangpuParks];

// Simulated delay in demo mode (milliseconds)
const DEMO_DELAY = 1200;

export class DemoPlantIdentificationService implements PlantIdentificationService {
  readonly isDemo = true;

  async identify(
    photoBlob: Blob,
    parkId: string,
    targetPlantId: string
  ): Promise<VerificationResult> {
    // Step 1: Image color analysis
    let analysis;
    try {
      analysis = await analyzeImage(photoBlob);
    } catch {
      return {
        status: "inconclusive",
        candidates: [],
        confidence: 0,
        isDemo: true,
        inParkRange: false,
      };
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, DEMO_DELAY));

    const park = allParks.find((p) => p.id === parkId);
    const plant = park?.plants.find((p) => p.id === targetPlantId);

    if (!plant) {
      return {
        status: "noMatch",
        candidates: [],
        confidence: 0,
        isDemo: true,
        inParkRange: false,
      };
    }

    // Step 2: Image quality check
    if (analysis.isTooDark) {
      return {
        status: "inconclusive",
        candidates: [],
        confidence: 0.2,
        isDemo: true,
        inParkRange: false,
      };
    }

    if (analysis.isTooBlurry) {
      return {
        status: "inconclusive",
        candidates: [],
        confidence: 0.3,
        isDemo: true,
        inParkRange: false,
      };
    }

    // Step 3: Plant color feature check
    // If image doesn't have enough plant features (green/brown), judged as no match
    if (!analysis.isLikelyPlant) {
      return {
        status: "noMatch",
        candidates: [
          {
            name: "No plant identified",
            scientificName: "Unknown",
            confidence: 0.2,
          },
        ],
        confidence: 0.2,
        isDemo: true,
        inParkRange: false,
      };
    }

    // Step 4: Image passed color analysis, perform "simulated identification"
    // Higher green ratio means higher match probability
    const greenScore = analysis.greenRatio + analysis.earthRatio * 0.5;
    const matchProbability = Math.min(0.95, 0.5 + greenScore * 2);

    // Determine result based on probability
    const rand = Math.random();
    if (rand < matchProbability) {
      // Successful match
      return {
        status: "success",
        candidates: [
          {
            plantId: plant.id,
            name: plant.name,
            scientificName: plant.scientificName,
            confidence: Math.round(matchProbability * 100) / 100,
          },
        ],
        confidence: Math.round(matchProbability * 100) / 100,
        isDemo: true,
        inParkRange: true,
      };
    } else if (rand < matchProbability + 0.15) {
      // No match — might be another plant
      return {
        status: "noMatch",
        candidates: [
          {
            name: "Other plant",
            scientificName: "Unknown sp.",
            confidence: 0.35,
          },
        ],
        confidence: 0.35,
        isDemo: true,
        inParkRange: false,
      };
    } else {
      // Inconclusive
      return {
        status: "inconclusive",
        candidates: [],
        confidence: 0.5,
        isDemo: true,
        inParkRange: false,
      };
    }
  }
}

/**
 * Method for directly determining success in demo mode (used for "simulate verification" button)
 * Still performs image analysis, but directly returns success when green features meet threshold
 */
export async function demoIdentifySuccess(
  photoBlob: Blob,
  parkId: string,
  targetPlantId: string
): Promise<VerificationResult> {
  // Perform image analysis first
  let analysis;
  try {
    analysis = await analyzeImage(photoBlob);
  } catch {
    // Analysis failed, still return success (demo mode is lenient)
    return buildSuccessResult(parkId, targetPlantId);
  }

  // If image is clearly not a plant (too much sky, too dark), still fail
  if (analysis.isTooDark) {
    return {
      status: "inconclusive",
      candidates: [],
      confidence: 0.2,
      isDemo: true,
      inParkRange: false,
    };
  }

  if (analysis.skyRatio > 0.6) {
    return {
      status: "noMatch",
      candidates: [
        { name: "Sky", scientificName: "Sky", confidence: 0.1 },
      ],
      confidence: 0.1,
      isDemo: true,
      inParkRange: false,
    };
  }

  // Even if green is minimal, demo mode returns success (but with lower confidence)
  return buildSuccessResult(parkId, targetPlantId);
}

function buildSuccessResult(parkId: string, targetPlantId: string): VerificationResult {
  const park = allParks.find((p) => p.id === parkId);
  const plant = park?.plants.find((p) => p.id === targetPlantId);

  return {
    status: "success",
    candidates: plant
      ? [
          {
            plantId: plant.id,
            name: plant.name,
            scientificName: plant.scientificName,
            confidence: 0.95,
          },
        ]
      : [],
    confidence: 0.95,
    isDemo: true,
    inParkRange: true,
  };
}

/**
 * Pl@ntNet API integration placeholder
 * For real integration:
 * 1. Register and get API Key at https://my.plantnet.org/
 * 2. Call via backend proxy (cannot expose Key in frontend)
 * 3. Call https://my-api.plantnet.org/v2/identify/all?api-key=YOUR_KEY
 * 4. Match returned candidate species with park plant data
 *
 * Frontend calling backend proxy example:
 * POST /api/identify  body: { image: formData, parkId, targetPlantId }
 * Backend proxy calls Pl@ntNet API, returns VerificationResult
 */
