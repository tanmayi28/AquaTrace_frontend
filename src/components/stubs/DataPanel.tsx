import React from "react";

interface DataRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface DataPanelProps {
  title: string;
  subtitle?: string;
  rows: DataRow[];
  className?: string;
}

/**
 * Reusable dark telemetry data panel component.
 */
export const DataPanel: React.FC<DataPanelProps> = ({
  title,
  subtitle,
  rows,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#0D1527] border border-[#16263D] p-4 font-mono-tech ${className}`}
      data-stub="DataPanel"
    >
      <div className="border-b border-[#16263D] pb-2 mb-3">
        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">{title}</h4>
        {subtitle && <p className="text-[10px] text-slate-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="space-y-2 text-xs">
        {rows.map((row, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-slate-400 uppercase text-[11px]">{row.label}</span>
            <span
              className={`font-semibold ${
                row.highlight ? "text-cyan-400 cyan-glow-text" : "text-slate-200"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
