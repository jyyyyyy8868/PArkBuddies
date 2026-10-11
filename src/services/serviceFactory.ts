// Service factory — returns demo or real service implementations based on configuration

import type {
  MapService,
  LocationService,
  PlantIdentificationService,
} from "./interfaces";
import { RealMapService } from "./realMapService";
import { DemoLocationService } from "./demoLocationService";
import { DemoPlantIdentificationService } from "./demoPlantIdentificationService";
import { dataStorage } from "./dataStorageService";

// Map service: uses OpenStreetMap real map
// When formally integrating Gaode Map, replace with Gaode adapter layer and configure API Key
export const mapService: MapService = new RealMapService();
export const locationService: LocationService = new DemoLocationService();
export const plantIdentificationService: PlantIdentificationService =
  new DemoPlantIdentificationService();

export { dataStorage };

// Current service mode identifier
export const SERVICE_MODE = {
  map: "openstreetmap" as const,
  location: "demo" as const,
  identification: "demo" as const,
};

// Pending real service configuration list (for future integration)
export const PENDING_REAL_SERVICES = [
  {
    name: "Gaode Map Service",
    description: "Currently using OpenStreetMap real map. Integrating Gaode Map provides better China map coverage, requires API Key configuration",
    configKey: "VITE_MAP_API_KEY",
    coordinateSystem: "GCJ-02 (Mars coordinate system), needs WGS84 \u2192 GCJ-02 conversion",
  },
  {
    name: "Plant Identification Service",
    description: "Recommended to call plant identification API via backend proxy (e.g., Baidu AI Open Platform), API Key kept on server side",
    configKey: "VITE_IDENTIFICATION_API_ENDPOINT",
    note: "Real calls require backend proxy, cannot expose key in frontend",
  },
  {
    name: "Backend Service",
    description: "Verification and reward logic should run on server side, MVP stage uses frontend local implementation",
    configKey: "VITE_API_BASE_URL",
  },
];
