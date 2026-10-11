// Demo location service
// Attempts to use browser real location, returns demo coordinates on failure (clearly marked)
// Demo coordinates are set within Gongqing Forest Park for easy experience of "enter park to auto-unlock buddy" feature

import type { LocationService } from "./interfaces";
import type { LocationResult, Park } from "../models/types";

// Demo coordinates within Gongqing Forest Park (Nenjiang Road, Yangpu District)
const DEMO_LNG = 121.527;
const DEMO_LAT = 31.2975;

export class DemoLocationService implements LocationService {
  readonly isDemo = true;

  async getLocation(): Promise<LocationResult> {
    // Attempt to use browser real location
    if ("geolocation" in navigator) {
      try {
        const realPos = await this.getBrowserLocation();
        return {
          lng: realPos.lng,
          lat: realPos.lat,
          accuracy: realPos.accuracy,
          isDemo: false,
        };
      } catch {
        // Real location failed or denied, return demo coordinates
      }
    }
    // Demo location
    return {
      lng: DEMO_LNG,
      lat: DEMO_LAT,
      accuracy: 50,
      isDemo: true,
    };
  }

  private getBrowserLocation(): Promise<{ lng: number; lat: number; accuracy: number }> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Location timeout")), 8000);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          clearTimeout(timeout);
          resolve({
            lng: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
          });
        },
        (err) => {
          clearTimeout(timeout);
          reject(err);
        },
        { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
      );
    });
  }

  /** Haversine formula to calculate distance between two points (meters) */
  getDistance(lng1: number, lat1: number, lng2: number, lat2: number): number {
    const R = 6371000;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }

  /** Determine whether user is within park range (uses boundary if available, otherwise uses distance threshold) */
  isInParkRange(userLng: number, userLat: number, park: Park): boolean {
    if (park.boundary && park.boundary.length > 0) {
      return this.isPointInPolygon(userLng, userLat, park.boundary[0]);
    }
    // When no boundary data, use 200m threshold for approximate judgment
    return this.getDistance(userLng, userLat, park.lng, park.lat) <= 200;
  }

  private isPointInPolygon(lng: number, lat: number, polygon: number[][]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      const intersect =
        yi > lat !== yj > lat &&
        lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
}
