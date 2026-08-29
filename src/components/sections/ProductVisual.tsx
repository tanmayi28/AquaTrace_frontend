import React from "react";
import { InvestigationCard } from "../investigation/InvestigationCard";
import { Navigation, Info, Maximize2, Layers, Compass, Crosshair } from "lucide-react";

export const ProductVisual: React.FC = () => {
  return (
    <section id="visual-demo" className="py-20 bg-[#050810] border-b border-[#16263D] relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D1527] border border-cyan-500/30 rounded text-cyan-400 font-mono-tech text-xs font-semibold mb-2">
              <Crosshair size={13} />
              <span className="uppercase tracking-widest">PRODUCT INTERFACE DEMO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
              RECONSTRUCTION & ATTRIBUTION MOCKUP
            </h2>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm">
              Interactive static schematic illustrating spatial trajectory correlation and vessel attribution output.
            </p>
          </div>

          {/* Explicit Mockup Disclaimer Badge */}
          <div className="flex items-center gap-2 bg-amber-950/80 border border-amber-500/50 px-3 py-1.5 rounded text-amber-300 font-mono-tech text-xs">
            <Info size={14} className="text-amber-400 flex-shrink-0" />
            <span className="font-bold">ILLUSTRATIVE MOCKUP — NOT LIVE OUTPUT</span>
          </div>
        </div>

        {/* Large Tactical Canvas & Floating Investigation Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Tactical Ocean Canvas (Columns 1-8) */}
          <div className="lg:col-span-8 bg-[#070D19] border border-[#16263D] rounded-lg overflow-hidden relative min-h-[500px] flex flex-col justify-between p-4 font-mono-tech bg-tactical-grid shadow-2xl">
            
            {/* Top Canvas Bar Controls */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 bg-[#0D1527]/90 p-2.5 border border-[#16263D] rounded text-[11px] text-slate-300 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">INCIDENT: INC-2026-084</span>
                <span className="text-slate-600">|</span>
                <span>AOI: ARABIAN SEA EEZ</span>
                <span className="text-slate-600">|</span>
                <span>DRIFT ENGINE: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 bg-[#070B14] border border-[#16263D] rounded hover:text-cyan-400">
                  <Layers size={14} />
                </button>
                <button className="p-1 bg-[#070B14] border border-[#16263D] rounded hover:text-cyan-400">
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            {/* SVG Tactical Ocean Visual Elements */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              
              {/* Radar Sweep Arc */}
              <div className="w-[450px] h-[450px] rounded-full border border-cyan-500/10 border-dashed animate-radar-sweep opacity-40" />

              <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="none">
                
                {/* Bathymetry Contours */}
                <path d="M 50,100 C 200,150 400,80 750,120" fill="none" stroke="rgba(22,38,61,0.6)" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M 50,220 C 250,280 450,190 750,250" fill="none" stroke="rgba(22,38,61,0.6)" strokeWidth="1" strokeDasharray="5 5" />
                
                {/* Backward Drift Vector Path */}
                <path
                  d="M 520,320 Q 380,240 240,160"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  className="cyan-glow-border"
                />

                {/* Vector Flow Arrows */}
                <line x1="520" y1="320" x2="380" y2="240" stroke="#06b6d4" strokeWidth="2" />
                <line x1="380" y1="240" x2="240" y2="160" stroke="#06b6d4" strokeWidth="2" />

                {/* Detected Oil Slick Shape (SAR Anomaly Polygon) */}
                <polygon
                  points="500,310 550,295 570,330 530,350 490,335"
                  fill="rgba(245, 158, 11, 0.25)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />

                {/* Suspect Vessel Track 1: MV OCEAN STAR (Red/Amber Alert Track) */}
                <path d="M 180,110 L 240,160 L 320,210 L 450,290" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                
                {/* Secondary Vessel Track 2: TANKER B */}
                <path d="M 100,300 L 280,310 L 450,330" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Probable Origin Marker */}
              <div className="absolute top-[32%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-[#070B14]" />
                </span>
                <div className="mt-1 bg-amber-950/90 border border-amber-500/50 px-2 py-0.5 rounded text-[10px] text-amber-300 font-bold shadow-lg">
                  PROBABLE ORIGIN (T-04:15h)
                </div>
              </div>

              {/* Oil Slick Detection Center Tag */}
              <div className="absolute top-[64%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-[#0D1527]/90 border border-cyan-500/50 px-2 py-1 rounded text-[10px] text-cyan-300 font-bold shadow-lg">
                  DETECTED SLICK (12.4 KM²)
                </div>
              </div>

              {/* Highlighted Suspect Vessel Marker (MV OCEAN STAR) */}
              <div className="absolute top-[32%] left-[30%] translate-x-12 translate-y-6 flex items-center gap-2 bg-red-950/90 border border-red-500/60 p-2 rounded text-[11px] text-red-200 shadow-xl pointer-events-auto cursor-pointer hover:scale-105 transition-transform">
                <Navigation size={14} className="text-red-400 transform rotate-45" />
                <div>
                  <div className="font-extrabold flex items-center gap-1">
                    MV OCEAN STAR
                    <span className="bg-red-500 text-slate-950 px-1 py-0.2 text-[9px] rounded font-black">
                      87% MATCH
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-300">AIS GAP DETECTED AT ORIGIN</div>
                </div>
              </div>

              {/* Secondary Vessel Marker (TANKER B) */}
              <div className="absolute top-[60%] left-[35%] flex items-center gap-1 bg-[#0D1527]/80 border border-[#16263D] px-2 py-1 rounded text-[10px] text-slate-400 pointer-events-auto">
                <Navigation size={12} className="text-slate-400 transform rotate-12" />
                <span>TANKER B (42%)</span>
              </div>

            </div>

            {/* Bottom Canvas Telemetry Legend Bar */}
            <div className="relative z-20 mt-auto flex flex-wrap items-center justify-between gap-3 bg-[#0D1527]/90 p-2.5 border border-[#16263D] rounded text-[10px] text-slate-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>ORIGIN ZONE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-6 bg-cyan-400/40 border border-cyan-400 rounded-xs" />
                  <span>DRIFT TRAJECTORY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span>SUSPECT TRACK</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Compass size={13} className="text-cyan-400" />
                <span>COORDINATES: 24°50&apos;N, 67°05&apos;E</span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Investigation Card (Columns 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <InvestigationCard
              vesselName="MV OCEAN STAR"
              mmsi="211389000"
              flag="PA (PANAMA)"
              confidenceScore={87}
              proximityScore={94}
              trajectoryScore={91}
              timeCorrelationScore={88}
              aisGapDetected={true}
            />

            {/* Supporting Analyst Summary Card */}
            <div className="bg-[#0D1527] border border-[#16263D] p-4 rounded-lg font-mono-tech text-xs">
              <div className="text-slate-400 font-bold uppercase text-[11px] mb-2 border-b border-[#16263D] pb-1">
                ANALYST SUMMARY
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Vessel <strong className="text-slate-100">MV OCEAN STAR</strong> exhibited a 45-minute AIS gap while transiting through the reconstructed spill origin cone. Vessel speed decreased from 17.8 knots to 5.2 knots during the anomaly window.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
