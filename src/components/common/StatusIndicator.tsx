import React from "react";

export type StatusType = "operational" | "available" | "connected" | "warning" | "offline";

interface StatusIndicatorProps {
  status?: StatusType;
  label: string;
  sublabel?: string;
  size?: "sm" | "md";
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = "operational",
  label,
  sublabel,
  size = "md",
  className = "",
}) => {
  const getDotStyle = () => {
    switch (status) {
      case "operational":
      case "available":
      case "connected":
        return "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]";
      case "warning":
        return "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]";
      case "offline":
        return "bg-slate-500";
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 font-mono-tech ${className}`}>
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        {status !== "offline" && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${getDotStyle()}`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${getDotStyle()}`} />
      </span>
      <div className="flex flex-col text-left">
        <span className={`tracking-wider font-semibold text-slate-200 ${size === "sm" ? "text-xs" : "text-sm"}`}>
          {label}
        </span>
        {sublabel && (
          <span className="text-[10px] text-slate-400 tracking-normal uppercase">{sublabel}</span>
        )}
      </div>
    </div>
  );
};
