import React from "react";
import { ArrowRight, Radar, Shield, CheckCircle2 } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#070B14] to-[#04060C] relative overflow-hidden">
      
      {/* Tactical Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Mission Icon Badge */}
        <div className="inline-flex items-center justify-center h-12 w-12 bg-[#0D1527] border border-cyan-500/50 rounded-lg text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <Shield size={24} />
        </div>

        {/* Tagline Pill */}
        <div className="flex items-center justify-center gap-3 font-mono-tech text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4">
          <span>DETECT</span>
          <span className="text-slate-600">•</span>
          <span>RECONSTRUCT</span>
          <span className="text-slate-600">•</span>
          <span>CORRELATE</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-100 uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          TURN MARITIME DATA INTO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 cyan-glow-text">
            INVESTIGATIVE EVIDENCE.
          </span>
        </h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-sans">
          AquaTrace delivers Coast Guard analysts the spatial precision and forensic correlation required to attribute oil spills to suspect vessels.
        </p>

        {/* Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#visual-demo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-mono-tech font-extrabold text-sm px-8 py-4 rounded shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all transform hover:scale-[1.02]"
          >
            <span>ENTER OPERATIONS</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Operational Footer Details */}
        <div className="mt-16 pt-8 border-t border-[#16263D] flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-cyan-400" />
            <span>AQUATRACE MARITIME INTELLIGENCE PLATFORM v1.0</span>
          </div>
          <div className="flex items-center gap-4">
            <span>SECURITY LEVEL: RESTRICTED</span>
            <span>EEZ MONITORING: ACTIVE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
