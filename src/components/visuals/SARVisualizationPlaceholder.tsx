import React from "react";
import { Radio, AlertTriangle } from "lucide-react";

interface SARVisualizationPlaceholderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const SARVisualizationPlaceholder: React.FC<SARVisualizationPlaceholderProps> = ({
  title = "SAR VISUALIZATION — PLACEHOLDER",
  subtitle = "SYNTHETIC APERTURE RADAR (SENTINEL-1) SCHEMATIC",
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-[#050810] border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-4 font-mono-tech ${className}`}
    >
      {/* Background Radar Grid Schematic */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      {/* Abstract Simulated Radar Reflection Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-cyan-500/20 border-dashed animate-radar-sweep pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-cyan-500/40 pointer-events-none" />

      {/* Abstract Spill Anomaly Visual Polygon */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
      >
        <polygon
          points="80,110 120,95 160,115 190,135 150,150 110,140"
          fill="rgba(6, 182, 212, 0.15)"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <circle cx="160" cy="115" r="4" fill="#f59e0b" />
      </svg>

      {/* Top Header Label */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#0D1527]/90 px-2.5 py-1 border border-cyan-500/40 rounded text-[10px] text-cyan-300">
          <Radio size={12} className="animate-pulse text-cyan-400" />
          <span className="font-bold">{title}</span>
        </div>
        <span className="text-[10px] text-slate-500 bg-[#070B14] px-2 py-0.5 border border-[#16263D]">
          STATIC SCHEMATIC
        </span>
      </div>

      {/* Center Notice */}
      <div className="relative z-10 my-auto text-center py-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/60 border border-amber-500/40 rounded text-[11px] text-amber-300 mb-1">
          <AlertTriangle size={13} className="text-amber-400" />
          <span>SAR DETECTION ENGINE NOT INTEGRATED</span>
        </div>
        <p className="text-[10px] text-slate-400 max-w-xs mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Bottom Metadata */}
      <div className="relative z-10 flex justify-between text-[10px] text-slate-400 border-t border-[#16263D] pt-2">
        <span>POLARIZATION: VV + VH</span>
        <span>RESOLUTION: 10M</span>
        <span>SWATH: 250KM</span>
      </div>
    </div>
  );
};
