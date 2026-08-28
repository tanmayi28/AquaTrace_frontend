import React from "react";
import { Clock, Play, SkipBack, SkipForward } from "lucide-react";

interface TimelineEvent {
  timestamp: string;
  label: string;
  type: "detection" | "drift" | "gap" | "vessel";
}

interface TimelineStubProps {
  events?: TimelineEvent[];
  className?: string;
}

/**
 * Stub component for forensic playback timeline controls.
 */
export const TimelineStub: React.FC<TimelineStubProps> = ({
  events = [
    { timestamp: "T-00:00 (14:20 UTC)", label: "SAR Slick Detection", type: "detection" },
    { timestamp: "T-04:15 (10:05 UTC)", label: "Backward Drift Reconstructed", type: "drift" },
    { timestamp: "T-06:30 (07:50 UTC)", label: "AIS Gap Detected — MV OCEAN STAR", type: "gap" },
  ],
  className = "",
}) => {
  return (
    <div
      className={`bg-[#0D1527] border border-[#16263D] p-3 font-mono-tech ${className}`}
      data-stub="Timeline"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Clock size={14} className="text-cyan-400" />
          <span className="font-semibold uppercase tracking-wider">DRIFT TIMELINE PLAYBACK</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#070B14] p-1 border border-[#16263D] rounded">
          <button className="p-1 text-slate-400 hover:text-cyan-400" aria-label="Skip back">
            <SkipBack size={12} />
          </button>
          <button className="p-1 text-cyan-400 hover:text-cyan-300" aria-label="Play">
            <Play size={12} />
          </button>
          <button className="p-1 text-slate-400 hover:text-cyan-400" aria-label="Skip forward">
            <SkipForward size={12} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-[#070B14]/80 p-2 border border-[#16263D] rounded text-[11px]"
          >
            <span className="text-cyan-400 font-medium">{event.timestamp}</span>
            <span className="text-slate-300 truncate">{event.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
