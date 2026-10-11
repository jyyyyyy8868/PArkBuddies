// Data storage service — park data management + import validation
// Supports future import of JSON/CSV/GeoJSON, validates duplicate records, missing fields and invalid coordinates

import type { DataStorageService, ImportResult } from "./interfaces";
import type { Park } from "../models/types";
import { demoParks } from "../data/parks";
import { yangpuParks } from "../data/yangpuParks";

export class DataStorageServiceImpl implements DataStorageService {
  private parks: Park[] = [...demoParks, ...yangpuParks];

  getParks(): Park[] {
    return this.parks;
  }

  getPark(parkId: string): Park | undefined {
    return this.parks.find((p) => p.id === parkId);
  }

  validateCoordinates(lng: number, lat: number): boolean {
    // Shanghai park coordinate range: longitude 121.0-121.8, latitude 30.8-31.5
    return (
      typeof lng === "number" &&
      typeof lat === "number" &&
      !isNaN(lng) &&
      !isNaN(lat) &&
      lng >= 121.0 &&
      lng <= 121.8 &&
      lat >= 30.8 &&
      lat <= 31.5
    );
  }

  validatePark(data: unknown): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const p = data as Record<string, unknown>;

    if (!p || typeof p !== "object") {
      return { valid: false, errors: ["Invalid data format"] };
    }

    // Required field validation
    const requiredFields: [string, string][] = [
      ["id", "string"],
      ["name", "string"],
      ["district", "string"],
      ["intro", "string"],
      ["lng", "number"],
      ["lat", "number"],
    ];

    for (const [field, type] of requiredFields) {
      if (p[field] === undefined || p[field] === null || p[field] === "") {
        errors.push(`Missing required field: ${field}`);
      } else if (typeof p[field] !== type) {
        errors.push(`Field ${field} type should be ${type}`);
      }
    }

    // Coordinate validation
    if (typeof p.lng === "number" && typeof p.lat === "number") {
      if (!this.validateCoordinates(p.lng as number, p.lat as number)) {
        errors.push("Coordinates not within valid Shanghai range");
      }
    }

    return { valid: errors.length === 0, errors };
  }

  importParksFromJSON(json: string, mergeMode: "replace" | "append" = "append"): ImportResult {
    const errors: string[] = [];
    let imported = 0;
    let skipped = 0;

    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      return {
        success: false,
        imported: 0,
        skipped: 0,
        errors: ["JSON format error, cannot parse"],
      };
    }

    const items = Array.isArray(parsed) ? parsed : [parsed];
    const newParks: Park[] = [];

    if (mergeMode === "replace") {
      this.parks = [];
    }

    for (const item of items) {
      const { valid, errors: itemErrors } = this.validatePark(item);
      if (!valid) {
        skipped++;
        errors.push(`Record ${(item as { id?: string }).id ?? "unknown"}: ${itemErrors.join(", ")}`);
        continue;
      }

      const park = item as Park;
      // Duplicate validation
      if (this.parks.some((p) => p.id === park.id) || newParks.some((p) => p.id === park.id)) {
        skipped++;
        errors.push(`Park ID "${park.id}" already exists, skipped`);
        continue;
      }

      newParks.push(park);
      imported++;
    }

    this.parks = [...this.parks, ...newParks];

    return {
      success: true,
      imported,
      skipped,
      errors,
    };
  }
}

// Singleton
export const dataStorage = new DataStorageServiceImpl();
