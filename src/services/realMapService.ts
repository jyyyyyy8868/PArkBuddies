// Real map service — based on Leaflet + OpenStreetMap
// Provides real map tiles, supports park boundaries, trails, plant location markers
// Note: OpenStreetMap uses WGS-84 coordinate system, mainland China map services use GCJ-02
// Coordinate conversion is needed when formally integrating Gaode Map

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapService } from "./interfaces";
import type { Park } from "../models/types";

// Fix Leaflet default icon path issue
delete (L.Icon.Default.prototype as { _getIconPath?: unknown })._getIconPath;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export class RealMapService implements MapService {
  readonly isDemo = false;
  private map: L.Map | null = null;
  private layerGroup: L.LayerGroup | null = null;

  getServiceName(): string {
    return "OpenStreetMap Real Map";
  }

  initMap(
    container: HTMLElement,
    center: { lng: number; lat: number },
    zoom = 15
  ): void {
    // If container already has a map, clean up first
    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    container.innerHTML = "";

    this.map = L.map(container, {
      center: [center.lat, center.lng],
      zoom,
      zoomControl: false,
      attributionControl: true,
    });

    // OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(this.map);

    // Zoom control placed at bottom right
    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    this.layerGroup = L.layerGroup().addTo(this.map);

    // Force map to recalculate size (fixes issue when container has zero size during initialization)
    setTimeout(() => {
      this.map?.invalidateSize();
    }, 100);
  }

  setCenter(lng: number, lat: number): void {
    this.map?.setView([lat, lng], this.map.getZoom());
  }

  addParkBoundary(boundary: number[][][]): void {
    if (!this.layerGroup || !boundary.length) return;
    // GeoJSON Polygon: [lng, lat] -> Leaflet: [lat, lng]
    const latlngs = boundary[0].map(([lng, lat]) => [lat, lng] as [number, number]);
    L.polygon(latlngs, {
      fillColor: "#7C9885",
      fillOpacity: 0.08,
      color: "#7C9885",
      weight: 2,
      dashArray: "6 4",
    }).addTo(this.layerGroup);
  }

  addTrails(trails: number[][][]): void {
    if (!this.layerGroup) return;
    for (const trail of trails) {
      const latlngs = trail.map(([lng, lat]) => [lat, lng] as [number, number]);
      L.polyline(latlngs, {
        color: "#D4C5A9",
        weight: 3,
        dashArray: "4 6",
        lineCap: "round",
      }).addTo(this.layerGroup);
    }
  }

  addUserMarker(lng: number, lat: number): void {
    if (!this.layerGroup) return;
    const icon = L.divIcon({
      className: "",
      html: `
        <div style="position:relative; display:flex; align-items:center; justify-content:center;">
          <div style="width:22px;height:22px;border-radius:50%;background:rgba(124,152,133,0.3);animation:pb-pulse 2s ease-in-out infinite;"></div>
          <div style="position:absolute;width:12px;height:12px;border-radius:50%;background:#7C9885;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>
        </div>
      `,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
    L.marker([lat, lng], { icon }).addTo(this.layerGroup);
  }

  addParkMarker(park: Park, onClick: () => void): void {
    if (!this.layerGroup) return;
    const icon = L.divIcon({
      className: "",
      html: `
        <div style="display:flex; flex-direction:column; align-items:center; gap:2px; cursor:pointer;">
          <div style="background:${park.themeColor};color:white;padding:3px 8px;border-radius:10px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.15);">${park.name}</div>
          <div style="width:4px;height:8px;background:${park.themeColor};"></div>
          <div style="width:12px;height:12px;border-radius:50%;background:${park.themeColor};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>
        </div>
      `,
      iconSize: [80, 40],
      iconAnchor: [40, 20],
    });
    const marker = L.marker([park.lat, park.lng], { icon }).addTo(this.layerGroup);
    marker.on("click", onClick);
  }

  addPlantMarker(
    position: { lng: number; lat: number },
    unlocked: boolean,
    svg: string,
    themeColor: string,
    onClick: () => void
  ): void {
    if (!this.layerGroup) return;

    let html: string;
    if (unlocked) {
      // Unlocked: show plant SVG cartoon image
      html = `
        <div style="cursor:pointer; transition:transform 0.2s;"
             onmouseenter="this.style.transform='scale(1.15)'" onmouseleave="this.style.transform='scale(1)'">
          <div style="width:44px;height:44px;border-radius:50%;background:white;border:3px solid ${themeColor};box-shadow:0 2px 10px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;overflow:hidden;">
            ${svg}
          </div>
        </div>
      `;
    } else {
      // Not unlocked: show question mark
      html = `
        <div style="cursor:pointer; transition:transform 0.2s;"
             onmouseenter="this.style.transform='scale(1.15)'" onmouseleave="this.style.transform='scale(1)'">
          <div style="width:36px;height:36px;border-radius:50%;background:${themeColor};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.25);">
            <span style="color:white;font-size:18px;font-weight:bold;line-height:1;">?</span>
          </div>
        </div>
      `;
    }

    const icon = L.divIcon({
      className: "",
      html,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });
    const marker = L.marker([position.lat, position.lng], { icon }).addTo(this.layerGroup);
    marker.on("click", onClick);
  }

  destroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    this.layerGroup = null;
  }
}
