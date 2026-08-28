import React from "react";

interface MapContainerStubProps {
  children?: React.ReactNode;
  className?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

/**
 * Stub component for Mapbox/Leaflet map container (Integration planned for Page 2/3).
 */
export const MapContainerStub: React.FC<MapContainerStubProps> = ({
  children,
  className = "",
  lat = 24.8607,
  lng = 67.0011,
  zoom = 12,
}) => {
  return (
    <div
      className={`relative w-full h-full bg-[#070D19] border border-[#16263D] overflow-hidden bg-tactical-grid ${className}`}
      data-stub="MapContainer"
    >
      {/* Tactical Map Grid Overlay Header */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-3 bg-[#0D1527]/90 px-3 py-1.5 border border-[#16263D] text-[11px] font-mono-tech text-slate-300 backdrop-blur-sm rounded-sm">
        <span className="text-cyan-400 font-semibold">GRID REF: NAV-M3</span>
        <span className="text-slate-500">|</span>
        <span>LAT: {lat.toFixed(4)}° N</span>
        <span className="text-slate-500">|</span>
        <span>LNG: {lng.toFixed(4)}° E</span>
        <span className="text-slate-500">|</span>
        <span>ZOOM: {zoom}X</span>
      </div>

      {children}
    </div>
  );
};
