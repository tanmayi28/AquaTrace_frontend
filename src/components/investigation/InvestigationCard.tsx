import React from "react";
import { AlertTriangle, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

interface InvestigationCardProps {
  vesselName?: string;
  mmsi?: string;
  flag?: string;
  confidenceScore?: number;
  proximityScore?: number;
  trajectoryScore?: number;
  timeCorrelationScore?: number;
  aisGapDetected?: boolean;
  className?: string;
}

export const InvestigationCard: React.FC<InvestigationCardProps> = ({
  vesselName = "MV OCEAN STAR",
  mmsi = "211389000",
  flag = "PA (PANAMA)",
  confidenceScore = 87,
  proximityScore = 94,
  trajectoryScore = 91,
  timeCorrelationScore = 88,
  aisGapDetected = true,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#0B101D]/95 backdrop-blur-md border border-amber-500/50 rounded-lg p-5 font-mono-tech shadow-[0_0_25px_rgba(245,158,11,0.15)] ${className}`}
    >
      {/* Priority Header Pill */}
      <div className="flex items-center justify-between border-b border-[#16263D] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <ShieldAlert size={16} className="text-amber-400 animate-pulse" />
          <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
            TOP INVESTIGATION PRIORITY
          </span>
        </div>
        <span className="text-[10px] bg-amber-950/80 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
          PRIMARY SUSPECT
        </span>
      </div>

      {/* Target Vessel & Overall Score */}
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h4 className="text-lg font-extrabold text-slate-100 uppercase tracking-tight">
            {vesselName}
          </h4>
          <p className="text-[11px] text-slate-400">
            MMSI: {mmsi} · FLAG: {flag}
          </p>
        </div>
        <div className="flex items-baseline gap-1 text-right">
          <span className="text-2xl font-black text-amber-400 cyan-glow-text">
            {confidenceScore}
          </span>
          <span className="text-xs text-slate-400">/100</span>
        </div>
      </div>

      {/* Breakdown Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 bg-[#070B14] p-3 border border-[#16263D] rounded mb-4 text-center">
        <div>
          <span className="text-[10px] text-slate-400 uppercase block">PROXIMITY</span>
          <span className="text-sm font-bold text-slate-200">{proximityScore}</span>
        </div>
        <div className="border-x border-[#16263D]">
          <span className="text-[10px] text-slate-400 uppercase block">TRAJECTORY</span>
          <span className="text-sm font-bold text-slate-200">{trajectoryScore}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase block">TIME CORR</span>
          <span className="text-sm font-bold text-slate-200">{timeCorrelationScore}</span>
        </div>
      </div>

      {/* Anomaly Indicator Pill */}
      {aisGapDetected && (
        <div className="flex items-center justify-between bg-amber-950/50 border border-amber-500/40 px-3 py-2 rounded text-xs text-amber-300 mb-5">
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-amber-400" />
            <span className="font-bold tracking-wider">AIS GAP: DETECTED</span>
          </div>
          <span className="text-[10px] text-amber-400/80">45 MIN DISRUPTION</span>
        </div>
      )}

      {/* Action Button */}
      <a
        href="#investigation-dossier"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs py-2.5 rounded shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all"
      >
        <span>VIEW INVESTIGATION</span>
        <ArrowRight size={14} />
      </a>
    </div>
  );
};
