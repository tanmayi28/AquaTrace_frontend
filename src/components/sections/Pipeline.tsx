import React from "react";
import { SARVisualizationPlaceholder } from "../visuals/SARVisualizationPlaceholder";
import { Radar, Waves, Ship, ArrowRight, ShieldCheck } from "lucide-react";

export const Pipeline: React.FC = () => {
  return (
    <section id="pipeline" className="py-20 bg-[#070B14] border-b border-[#16263D] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D1527] border border-cyan-500/30 rounded text-cyan-400 font-mono-tech text-xs font-semibold mb-3">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-widest">INCIDENT INVESTIGATION WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
            THREE-STEP CORE PIPELINE
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From initial satellite anomaly detection to probabilistic vessel attribution — built for Coast Guard pollution-control analysts.
          </p>
        </div>

        {/* Core Pipeline Cards Grid with Connected Vector Flow Line */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Connector Line overlay for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/40 via-teal-400/40 to-cyan-500/40 -translate-y-12 z-0 pointer-events-none" />

          {/* STEP 1: DETECT */}
          <div className="relative z-10 flex flex-col bg-[#0D1527] border border-[#16263D] hover:border-cyan-500/50 rounded-lg p-6 transition-all group shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-tech font-extrabold text-2xl text-cyan-400 cyan-glow-text">
                01 DETECT
              </span>
              <div className="flex items-center gap-2 bg-[#070B14] px-2.5 py-1 border border-[#16263D] rounded text-[10px] font-mono-tech text-cyan-300">
                <Radar size={13} className="text-cyan-400" />
                <span>SATELLITE INTELLIGENCE</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">
              SAR ANOMALY EXTRACTION
            </h3>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed flex-1">
              Automated Synthetic Aperture Radar (SAR) processing extracts dark slick boundaries, surface roughness damping signatures, area coverage metrics, and initial spill volume estimates.
            </p>

            {/* Explicit SAR Visualization Placeholder Box */}
            <div className="mt-auto">
              <SARVisualizationPlaceholder
                title="SAR VISUALIZATION — PLACEHOLDER"
                subtitle="SENTINEL-1 C-BAND SAR SCHEMATIC MOCKUP"
                className="rounded-md"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-slate-400 border-t border-[#16263D] pt-3">
              <span>OUTPUT: SPILL MASK & GEOJSON</span>
              <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 2: TRACE */}
          <div className="relative z-10 flex flex-col bg-[#0D1527] border border-[#16263D] hover:border-cyan-500/50 rounded-lg p-6 transition-all group shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-tech font-extrabold text-2xl text-cyan-400 cyan-glow-text">
                02 TRACE
              </span>
              <div className="flex items-center gap-2 bg-[#070B14] px-2.5 py-1 border border-[#16263D] rounded text-[10px] font-mono-tech text-cyan-300">
                <Waves size={13} className="text-cyan-400" />
                <span>DRIFT RECONSTRUCTION</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">
              HYDRODYNAMIC BACKWARD DRIFT
            </h3>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed flex-1">
              Physics-informed particle tracking integrates HYCOM ocean currents, ERA5 surface winds, and Stokes drift vectors to model the backward trajectory to the probable origin timestamp.
            </p>

            {/* Drift Vector Visual Schematic Card */}
            <div className="mt-auto relative w-full h-[220px] bg-[#050810] border border-[#16263D] rounded-md p-4 flex flex-col justify-between font-mono-tech overflow-hidden">
              <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-center text-[10px]">
                <span className="text-cyan-400 font-bold">HYCOM + ERA5 VECTOR MODEL</span>
                <span className="text-slate-400">T-06h RECONSTRUCTION</span>
              </div>

              {/* SVG Vector Trajectory Flow */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                {/* Wind Vectors */}
                <path d="M 30,120 Q 100,80 180,60 T 270,30" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6 3" />
                <path d="M 50,135 Q 120,95 200,75 T 280,45" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Probable Origin Point */}
                <circle cx="30" cy="120" r="6" fill="#f59e0b" className="animate-ping opacity-75" />
                <circle cx="30" cy="120" r="4" fill="#f59e0b" />
                
                {/* Current Location */}
                <circle cx="270" cy="30" r="4" fill="#06b6d4" />
              </svg>

              <div className="relative z-10 mt-auto flex justify-between text-[10px] text-slate-400 bg-[#070B14]/80 p-2 border border-[#16263D] rounded">
                <span>CURR: 1.4 KTS (195°)</span>
                <span>WIND: 18 KTS (040°)</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-slate-400 border-t border-[#16263D] pt-3">
              <span>OUTPUT: ORIGIN CONE OF UNCERTAINTY</span>
              <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 3: ATTRIBUTE */}
          <div className="relative z-10 flex flex-col bg-[#0D1527] border border-[#16263D] hover:border-cyan-500/50 rounded-lg p-6 transition-all group shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-tech font-extrabold text-2xl text-cyan-400 cyan-glow-text">
                03 ATTRIBUTE
              </span>
              <div className="flex items-center gap-2 bg-[#070B14] px-2.5 py-1 border border-[#16263D] rounded text-[10px] font-mono-tech text-cyan-300">
                <Ship size={13} className="text-cyan-400" />
                <span>VESSEL INTELLIGENCE</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-100 uppercase mb-2">
              AIS CORRELATION & ATTRIBUTION
            </h3>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed flex-1">
              Cross-references high-frequency AIS tracks against the origin spatial cone. Evaluates speed drops, course alterations, and AIS transmission gaps to rank suspect vessels.
            </p>

            {/* AIS Attribution Schematic Card */}
            <div className="mt-auto relative w-full h-[220px] bg-[#050810] border border-[#16263D] rounded-md p-4 flex flex-col justify-between font-mono-tech overflow-hidden">
              <div className="absolute inset-0 bg-tactical-dots opacity-30 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center text-[10px]">
                <span className="text-amber-400 font-bold">SUSPECT VESSEL IDENTIFIED</span>
                <span className="text-slate-400">CONFIDENCE: 87/100</span>
              </div>

              {/* Ranking List Mockup */}
              <div className="relative z-10 space-y-1.5 my-auto text-[11px]">
                <div className="flex justify-between items-center bg-amber-950/40 border border-amber-500/40 p-1.5 rounded text-amber-200">
                  <span className="font-bold">1. MV OCEAN STAR</span>
                  <span className="bg-amber-500 text-slate-950 font-bold px-1.5 py-0.2 rounded text-[10px]">87/100</span>
                </div>

                <div className="flex justify-between items-center bg-[#070B14] border border-[#16263D] p-1.5 rounded text-slate-400 opacity-70">
                  <span>2. TANKER BEACON</span>
                  <span>42/100</span>
                </div>

                <div className="flex justify-between items-center bg-[#070B14] border border-[#16263D] p-1.5 rounded text-slate-400 opacity-70">
                  <span>3. CARGO TITAN</span>
                  <span>18/100</span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between text-[10px] text-slate-400 border-t border-[#16263D] pt-2">
                <span>AIS GAP: DETECTED (45 MINS)</span>
                <span>SPEED DROP: 18 → 6 KTS</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-slate-400 border-t border-[#16263D] pt-3">
              <span>OUTPUT: FORENSIC DOSSIER</span>
              <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
