import React from "react";
import { ArrowRight, ChevronDown, Radar, Compass, Database, Eye } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#070B14] border-b border-[#16263D] pt-12 pb-20">
      
      {/* Background Animated Tactical Grid & Radar Sweep */}
      <div className="absolute inset-0 bg-tactical-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-tactical-dots opacity-25 pointer-events-none" />

      {/* Subtle Scanning Line Animation */}
      <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-cyan-500/10 to-transparent animate-scanline pointer-events-none" />

      {/* Radar Visual Ambient Center Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/10 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/15" />
        <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/20" />
        <div className="absolute inset-0 w-full h-full rounded-full border-t border-cyan-500/30 animate-radar-sweep opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Tactical Classification Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1527] border border-cyan-500/40 text-cyan-400 font-mono-tech text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Radar size={14} className="animate-spin text-cyan-400" style={{ animationDuration: "10s" }} />
          <span className="uppercase tracking-widest">MARITIME INCIDENT INVESTIGATION ENGINE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 uppercase max-w-4xl leading-tight">
          DETECT THE SPILL. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 cyan-glow-text">
            TRACE ITS ORIGIN.
          </span>{" "}
          <br className="hidden sm:inline" />
          IDENTIFY THE VESSEL.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl font-sans leading-relaxed">
          AquaTrace combines SAR satellite imagery, ocean drift modelling and vessel movement intelligence to reconstruct maritime oil-spill incidents.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#visual-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono-tech font-bold text-sm px-6 py-3.5 rounded shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            <span>ENTER OPERATIONS</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#pipeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D1527] hover:bg-[#16263D] text-slate-200 font-mono-tech font-semibold text-sm px-6 py-3.5 rounded border border-[#16263D] hover:border-cyan-500/40 transition-all"
          >
            <Eye size={16} className="text-cyan-400" />
            <span>VIEW HOW IT WORKS</span>
          </a>
        </div>

        {/* Tactical Key Telemetry Readouts Bar */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 font-mono-tech text-left">
          <div className="bg-[#0D1527]/80 border border-[#16263D] p-3 rounded">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase">
              <Compass size={12} className="text-cyan-400" />
              <span>SPATIAL COVERAGE</span>
            </div>
            <p className="text-xs font-bold text-slate-200 mt-1">GLOBAL MARITIME EEZ</p>
          </div>

          <div className="bg-[#0D1527]/80 border border-[#16263D] p-3 rounded">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase">
              <Radar size={12} className="text-cyan-400" />
              <span>SATELLITE REVISIT</span>
            </div>
            <p className="text-xs font-bold text-slate-200 mt-1">SENTINEL-1 SAR</p>
          </div>

          <div className="bg-[#0D1527]/80 border border-[#16263D] p-3 rounded">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase">
              <Database size={12} className="text-cyan-400" />
              <span>DRIFT DYNAMICS</span>
            </div>
            <p className="text-xs font-bold text-slate-200 mt-1">HYCOM / ERA5 REANALYSIS</p>
          </div>

          <div className="bg-[#0D1527]/80 border border-[#16263D] p-3 rounded">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ATTRIBUTION ENGINE</span>
            </div>
            <p className="text-xs font-bold text-cyan-400 mt-1">PROBABILISTIC SCORING</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#status-strip"
          className="mt-10 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};
