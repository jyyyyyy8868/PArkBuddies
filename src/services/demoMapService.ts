// Demo map service — CSS/SVG-based schematic map
// Clearly marked as demo content, replace with map SDK adapter layer for real integration

import type { MapService } from "./interfaces";
import type { Park } from "../models/types";

export class DemoMapService implements MapService {
  readonly isDemo = true;
  private container: HTMLElement | null = null;
  private markers: HTMLElement[] = [];
  private svgOverlay: SVGSVGElement | null = null;

  getServiceName(): string {
    return "Demo Schematic Map";
  }

  initMap(
    container: HTMLElement,
    center: { lng: number; lat: number },
    _zoom?: number
  ): void {
    this.container = container;
    container.innerHTML = "";
    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.background = `
      radial-gradient(circle at 30% 20%, #e8f0e5 0%, transparent 40%),
      radial-gradient(circle at 70% 60%, #f0ebe0 0%, transparent 40%),
      linear-gradient(135deg, #f5f0e3 0%, #e8f0e5 100%)
    `;

    // Demo map texture: grid + decoration
    const texture = document.createElement("div");
    texture.style.cssText = `
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(124,152,133,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124,152,133,0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    `;
    container.appendChild(texture);

    // SVG overlay for drawing boundaries and trails
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.style.cssText = "position:absolute; inset:0; width:100%; height:100%; pointer-events:none;";
    container.appendChild(svg);
    this.svgOverlay = svg;

    // Demo badge watermark
    const badge = document.createElement("div");
    badge.style.cssText = `
      position: absolute; top: 8px; right: 8px;
      padding: 2px 8px; border-radius: 999px;
      background: rgba(240,215,123,0.9); color: #8a6d1b;
      font-size: 10px; font-weight: 600; z-index: 10;
      pointer-events: none;
    `;
    badge.textContent = "Schematic Map · Demo";
    container.appendChild(badge);
  }

  private lngToX(lng: number): string {
    // Shanghai park longitude range approximately 121.3-121.6
    const pct = ((lng - 121.3) / (121.7 - 121.3)) * 100;
    return `${Math.max(5, Math.min(95, pct))}%`;
  }

  private latToY(lat: number): string {
    // Shanghai park latitude range approximately 31.1-31.4, higher latitude means more north (up)
    const pct = ((31.4 - lat) / (31.4 - 31.05)) * 100;
    return `${Math.max(5, Math.min(95, pct))}%`;
  }

  setCenter(_lng: number, _lat: number): void {
    // Schematic map has no zoom/pan capability
  }

  addParkBoundary(boundary: number[][][]): void {
    if (!this.svgOverlay || !boundary.length) return;
    const svgNS = "http://www.w3.org/2000/svg";
    const polygon = document.createElementNS(svgNS, "polygon");
    const points = boundary[0]
      .map(([lng, lat]) => `${this.lngToX(lng)},${this.latToY(lat)}`)
      .join(" ");
    polygon.setAttribute("points", points);
    polygon.setAttribute("fill", "rgba(124,152,133,0.15)");
    polygon.setAttribute("stroke", "#7C9885");
    polygon.setAttribute("stroke-width", "2");
    polygon.setAttribute("stroke-dasharray", "6 4");
    this.svgOverlay.appendChild(polygon);
  }

  addTrails(trails: number[][][]): void {
    if (!this.svgOverlay) return;
    const svgNS = "http://www.w3.org/2000/svg";
    for (const trail of trails) {
      const polyline = document.createElementNS(svgNS, "polyline");
      const points = trail
        .map(([lng, lat]) => `${this.lngToX(lng)},${this.latToY(lat)}`)
        .join(" ");
      polyline.setAttribute("points", points);
      polyline.setAttribute("fill", "none");
      polyline.setAttribute("stroke", "rgba(212,197,169,0.7)");
      polyline.setAttribute("stroke-width", "3");
      polyline.setAttribute("stroke-linecap", "round");
      polyline.setAttribute("stroke-dasharray", "4 6");
      this.svgOverlay.appendChild(polyline);
    }
  }

  addUserMarker(lng: number, lat: number): void {
    if (!this.container) return;
    const marker = document.createElement("div");
    marker.style.cssText = `
      position: absolute; left: ${this.lngToX(lng)}; top: ${this.latToY(lat)};
      transform: translate(-50%, -50%); z-index: 5;
      pointer-events: none;
    `;
    marker.innerHTML = `
      <div style="position:relative; display:flex; align-items:center; justify-content:center;">
        <div style="width:24px;height:24px;border-radius:50%;background:rgba(124,152,133,0.3);animation:pb-pulse 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:12px;height:12px;border-radius:50%;background:#7C9885;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>
      </div>
    `;
    // Inject pulse animation (only once)
    if (!document.getElementById("pb-map-style")) {
      const style = document.createElement("style");
      style.id = "pb-map-style";
      style.textContent = `@keyframes pb-pulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(2);opacity:0} }`;
      document.head.appendChild(style);
    }
    this.container.appendChild(marker);
    this.markers.push(marker);
  }

  addParkMarker(park: Park, onClick: () => void): void {
    if (!this.container) return;
    const marker = document.createElement("div");
    marker.style.cssText = `
      position: absolute; left: ${this.lngToX(park.lng)}; top: ${this.latToY(park.lat)};
      transform: translate(-50%, -100%); z-index: 6; cursor: pointer;
      transition: transform 0.2s;
    `;
    marker.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; gap:2px;">
        <div style="background:${park.themeColor};color:white;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.15);">${park.name}</div>
        <div style="width:4px;height:12px;background:${park.themeColor};"></div>
        <div style="width:14px;height:14px;border-radius:50%;background:${park.themeColor};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>
      </div>
    `;
    marker.addEventListener("click", onClick);
    marker.addEventListener("mouseenter", () => {
      marker.style.transform = "translate(-50%, -100%) scale(1.1)";
    });
    marker.addEventListener("mouseleave", () => {
      marker.style.transform = "translate(-50%, -100%) scale(1)";
    });
    this.container.appendChild(marker);
    this.markers.push(marker);
  }

  addPlantMarker(
    position: { lng: number; lat: number },
    unlocked: boolean,
    svg: string,
    themeColor: string,
    onClick: () => void
  ): void {
    if (!this.container) return;
    const marker = document.createElement("div");
    marker.style.cssText = `
      position: absolute; left: ${this.lngToX(position.lng)}; top: ${this.latToY(position.lat)};
      transform: translate(-50%, -50%); z-index: 7; cursor: pointer;
      transition: transform 0.2s;
    `;
    if (unlocked) {
      marker.innerHTML = `
        <div style="width:40px;height:40px;border-radius:50%;background:white;border:3px solid ${themeColor};box-shadow:0 2px 10px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;overflow:hidden;">
          ${svg}
        </div>
      `;
    } else {
      marker.innerHTML = `
        <div style="width:32px;height:32px;border-radius:50%;background:${themeColor};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.25);">
          <span style="color:white;font-size:16px;font-weight:bold;line-height:1;">?</span>
        </div>
      `;
    }
    marker.addEventListener("click", onClick);
    marker.addEventListener("mouseenter", () => {
      marker.style.transform = "translate(-50%, -50%) scale(1.15)";
    });
    marker.addEventListener("mouseleave", () => {
      marker.style.transform = "translate(-50%, -50%) scale(1)";
    });
    this.container.appendChild(marker);
    this.markers.push(marker);
  }

  destroy(): void {
    if (this.container) {
      this.container.innerHTML = "";
    }
    this.container = null;
    this.markers = [];
    this.svgOverlay = null;
  }
}
