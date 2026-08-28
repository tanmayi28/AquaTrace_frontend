import React from "react";
import { Satellite, Wind, Radio, AlertCircle, Database } from "lucide-react";

export const StatusStrip: React.FC = () => {
  return (
    <section id="status-strip" className="w-full bg-[#090E1A] border-y border-[#16263D] py-3.5 px-4 font-mono-tech">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: Section Header & Static Indicator */}
        <div className="flex items-center gap-2.5 text-slate-300">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0D1527] border border-cyan-500/40 rounded text-[10px] text-cyan-400 font-bold">
            <Database size={11} />
            <span>LIVE TELEMETRY FEEDS</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-[10px] text-slate-400 bg-slate-900/60 px-2 py-0.5 border border-[#16263D] rounded">
            STATIC SEEDED DEMO
          </span>
        </div>

        {/* Center/Right: Telemetry Feeds Strip */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-[11px]">
          
          {/* Item 1: Satellite */}
          <div className="flex items-center gap-2 text-slate-200">
            <Satellite size={13} className="text-cyan-400" />
            <span className="text-slate-400 font-bold">SATELLITE</span>
            <span className="text-slate-500">/</span>
            <span>SENTINEL-1</span>
            <span className="text-slate-500">/</span>
            <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AVAILABLE
            </span>
          </div>

          <span className="text-[#16263D] hidden md:inline">•</span>

          {/* Item 2: Ocean Data */}
          <div className="flex items-center gap-2 text-slate-200">
            <Wind size={13} className="text-cyan-400" />
            <span className="text-slate-400 font-bold">OCEAN DATA</span>
            <span className="text-slate-500">/</span>
            <span>CURRENT + WIND</span>
            <span className="text-slate-500">/</span>
            <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AVAILABLE
            </span>
          </div>

          <span className="text-[#16263D] hidden md:inline">•</span>

          {/* Item 3: AIS */}
          <div className="flex items-center gap-2 text-slate-200">
            <Radio size={13} className="text-cyan-400" />
            <span className="text-slate-400 font-bold">AIS</span>
            <span className="text-slate-500">/</span>
            <span>VESSEL TRACKING</span>
            <span className="text-slate-500">/</span>
            <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              CONNECTED
            </span>
          </div>

          <span className="text-[#16263D] hidden md:inline">•</span>

          {/* Item 4: Incidents Active */}
          <div className="flex items-center gap-2 text-slate-200">
            <AlertCircle size={13} className="text-amber-400" />
            <span className="text-slate-400 font-bold">INCIDENTS</span>
            <span className="text-slate-500">/</span>
            <span>ACTIVE</span>
            <span className="text-slate-500">/</span>
            <span className="inline-flex items-center gap-1 text-amber-400 font-bold bg-amber-950/60 px-1.5 py-0.5 border border-amber-500/30 rounded">
              03
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
