import React from "react";
import { Navigation } from "lucide-react";

interface VesselMarkerStubProps {
  vesselName: string;
  mmsi?: string;
  heading?: number;
  speed?: string;
  isSuspect?: boolean;
  score?: number;
  xPercentage?: number;
  yPercentage?: number;
}

/**
 * Stub component representing an AIS Vessel Marker icon on the tactical map interface.
 */
export const VesselMarkerStub: React.FC<VesselMarkerStubProps> = ({
  vesselName,
  mmsi = "211389000",
  heading = 45,
  speed = "14.2 knots",
  isSuspect = false,
  score,
  xPercentage = 50,
  yPercentage = 50,
}) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      style={{ left: `${xPercentage}%`, top: `${yPercentage}%` }}
      data-stub="VesselMarker"
    >
      {/* Pulse effect if suspect */}
      {isSuspect && (
        <span className="absolute -inset-2 rounded-full bg-amber-500/20 animate-ping opacity-75" />
      )}

      <div
        className={`relative flex items-center justify-center p-1.5 rounded-sm border ${
          isSuspect
            ? "bg-amber-950/90 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
            : "bg-[#0D1527]/90 border-cyan-500/50 text-cyan-400"
        }`}
      >
        <Navigation
          size={14}
          className="transition-transform duration-300"
          style={{ transform: `rotate(${heading}deg)` }}
        />

        {/* Hover Tooltip */}
        <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 hidden group-hover:flex flex-col bg-[#0B101D] border border-[#16263D] px-2.5 py-1.5 text-[10px] font-mono-tech whitespace-nowrap rounded shadow-xl z-30">
          <span className="font-bold text-slate-100">{vesselName}</span>
          <span className="text-slate-400">MMSI: {mmsi}</span>
          <span className="text-slate-400">SPD: {speed}</span>
          {score && (
            <span className="text-amber-400 font-semibold mt-0.5">
              MATCH SCORE: {score}/100
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
