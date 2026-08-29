import React from "react";
import { Layers, Activity, FileCheck, ShieldCheck, Compass } from "lucide-react";

export const WhyAquaTrace: React.FC = () => {
  const points = [
    {
      icon: Layers,
      code: "01 / EVIDENCE FUSION",
      title: "MULTI-SOURCE EVIDENCE",
      description:
        "Fuses Sentinel-1 SAR radar imagery, optical satellite observations, and high-frequency AIS trajectory logs into a unified, audit-grade evidence timeline.",
    },
    {
      icon: Activity,
      code: "02 / DRIFT DYNAMICS",
      title: "PHYSICS-INFORMED",
      description:
        "Incorporates real-time HYCOM ocean currents, sea-surface temperature vectors, and ERA5 wind field dynamics into Lagrangian particle drift models.",
    },
    {
      icon: Compass,
      code: "03 / PROBABILISTIC",
      title: "EXPLAINABLE ATTRIBUTION",
      description:
        "Generates transparent confidence score breakdowns based on spatial proximity vectors, speed drop anomalies, and AIS transmission gap occurrences.",
    },
    {
      icon: FileCheck,
      code: "04 / FORENSIC GRADE",
      title: "INVESTIGATION READY",
      description:
        "Produces standardized forensic dossiers formatted directly for Coast Guard command, environmental regulators, and maritime legal authorities.",
    },
  ];

  return (
    <section className="py-20 bg-[#070B14] border-b border-[#16263D] relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D1527] border border-cyan-500/30 rounded text-cyan-400 font-mono-tech text-xs font-semibold mb-3">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-widest">SYSTEM ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
            WHY AQUATRACE
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Engineered specifically for operational maritime pollution control and forensic incident investigation.
          </p>
        </div>

        {/* 4 Technical Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1527] border border-[#16263D] hover:border-cyan-500/50 p-6 rounded-lg flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#070B14] border border-[#16263D] text-cyan-400 rounded group-hover:border-cyan-500/40 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono-tech text-[10px] font-bold text-slate-400 tracking-wider">
                      {point.code}
                    </span>
                  </div>

                  <h3 className="font-mono-tech text-sm font-extrabold text-slate-100 uppercase mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#16263D] pt-3 font-mono-tech text-[10px] text-slate-400 flex items-center justify-between">
                  <span>SPECIFICATION</span>
                  <span className="text-cyan-400 font-bold">OPERATIONAL</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
