// Park Buddies service interface layer definitions
// All external services are isolated through interfaces, demo implementations can be replaced with real services

import type { LocationResult, MapConfig, Park, VerificationResult } from "../models/types";

/** Map service */
export interface MapService {
  readonly isDemo: boolean;
  /** Get map service name */
  getServiceName(): string;
  /** Initialize map in specified container */
  initMap(container: HTMLElement, center: { lng: number; lat: number }, zoom?: number): void;
  /** Set map center */
  setCenter(lng: number, lat: number): void;
  /** Add park boundary marker */
  addParkBoundary(boundary: number[][][]): void;
  /** Add trails */
  addTrails(trails: number[][][]): void;
  /** Add user location marker */
  addUserMarker(lng: number, lat: number): void;
  /** Add park marker */
  addParkMarker(park: Park, onClick: () => void): void;
  /** Add plant location marker (unlocked=false shows question mark, unlocked=true shows SVG) */
  addPlantMarker(
    position: { lng: number; lat: number },
    unlocked: boolean,
    svg: string,
    themeColor: string,
    onClick: () => void
  ): void;
  /** Destroy map instance */
  destroy(): void;
}

/** Location service */
export interface LocationService {
  readonly isDemo: boolean;
  /** Get user foreground location */
  getLocation(): Promise<LocationResult>;
  /** Calculate distance between two points (meters) */
  getDistance(lng1: number, lat1: number, lng2: number, lat2: number): number;
  /** Determine whether user is within park range */
  isInParkRange(userLng: number, userLat: number, park: Park): boolean;
}

/** Plant identification service */
export interface PlantIdentificationService {
  readonly isDemo: boolean;
  /**
   * Submit photo for identification
   * @param photoBlob Photo Blob data
   * @param parkId Park ID
   * @param targetPlantId Target plant ID
   */
  identify(photoBlob: Blob, parkId: string, targetPlantId: string): Promise<VerificationResult>;
}

/** Data storage service (user data persistence + park data import) */
export interface DataStorageService {
  /** Get all park data */
  getParks(): Park[];
  /** Get park by ID */
  getPark(parkId: string): Park | undefined;
  /** Import park data (JSON), validate then merge, returns import result */
  importParksFromJSON(json: string, mergeMode?: "replace" | "append"): ImportResult;
  /** Validate a single park data record */
  validatePark(data: unknown): { valid: boolean; errors: string[] };
  /** Validate coordinate validity */
  validateCoordinates(lng: number, lat: number): boolean;
}

/** Import result */
export interface ImportResult {
  success: boolean;
  imported: number;
  skipped: number;
  errors: string[];
}

/** Service configuration */
export interface ServiceConfig {
  mapConfig: MapConfig;
  useDemoLocation: boolean;
  useDemoIdentification: boolean;
}
