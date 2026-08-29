# AquaTrace 🌊🛰️
### Maritime Oil-Spill Intelligence & Investigation System

[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![System Status](https://img.shields.io/badge/System_Status-OPERATIONAL-06B6D4?style=for-the-badge)](http://localhost:3000)

**AquaTrace** is a mission-critical operational intelligence and investigation platform designed for Coast Guard officers, environmental regulators, and maritime pollution-control analysts. It fuses Synthetic Aperture Radar (SAR) satellite data, hydrodynamic drift dynamics, and AIS vessel trajectory tracking to reconstruct oil-spill incidents and identify target suspect vessels.

---

## 🎯 Key Operational Capabilities

* **🛰️ Multi-Source Evidence Fusion**: Fuses Sentinel-1 C-band SAR radar imagery with high-frequency Automatic Identification System (AIS) vessel movement logs.
* **🌊 Physics-Informed Drift Reconstruction**: Integrates HYCOM ocean surface current vectors and ERA5 surface wind dynamics to calculate backward trajectories to the probable origin point.
* **⚓ Explainable Vessel Attribution**: Generates transparent, probabilistic confidence scoring breakdowns based on spatial proximity, course alterations, and AIS transmission gap anomalies.
* **📋 Audit-Ready Forensic Dossiers**: Formats forensic attribution summaries ready for Coast Guard command and maritime legal proceedings.

---

## 🔬 Three-Step Core Pipeline

```
  [01 DETECT] ───► [02 TRACE] ───► [03 ATTRIBUTE]
SAR Anomaly        Hydrodynamic       AIS Movement
 Extraction         Drift Model       Correlation
```

1. **`01 DETECT` (Satellite Intelligence)**: Detects dark slick boundaries, estimates surface roughness damping, and calculates initial spill area coverage.
2. **`02 TRACE` (Drift Reconstruction)**: Models backward Lagrangian particle trajectories using ocean current and wind dynamics to determine the spatial cone of uncertainty.
3. **`03 ATTRIBUTE` (Vessel Intelligence)**: Cross-references passing vessel tracks within the origin time window, highlighting speed drops, course shifts, and AIS gaps.

---

## 💻 Tech Stack & Design System

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4 + Custom Mission-Critical CSS Keyframes
* **Icons**: Lucide React
* **Design System**: Dark tactical navy background (`#070B14`), electric cyan accent (`#06B6D4`), warning amber (`#F59E0B`), and monospace technical typography (`Geist Mono`).

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/AquaTrace_frontend.git
   cd AquaTrace_frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Repository Structure

```
AquaTrace_frontend/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tactical design tokens, scanlines & radar animations
│   │   ├── layout.tsx           # Dark theme root layout & maritime metadata
│   │   └── page.tsx             # Main Page 1 assembly
│   ├── components/
│   │   ├── common/              # Reusable StatusIndicator components
│   │   ├── layout/              # Navbar with responsive mobile menu
│   │   ├── sections/            # Hero, StatusStrip, Pipeline, ProductVisual, WhyAquaTrace, FinalCTA
│   │   ├── investigation/       # InvestigationCard priority scoring breakdown
│   │   ├── visuals/             # Explicit SARVisualizationPlaceholder schematic visual
│   │   └── stubs/               # MapContainer, VesselMarker, Timeline, DataPanel stubs
├── public/                      # Static assets
├── package.json
└── README.md
```

---

## ⚠️ Disclaimer
*This repository currently implements Page 1 (Landing / About). Satellite SAR detection visualizations and live map feeds use explicitly labeled static schematic placeholders (`SAR VISUALIZATION — PLACEHOLDER` & `ILLUSTRATIVE MOCKUP — NOT LIVE OUTPUT`) for analyst clarity prior to backend radar pipeline integration.*

---

© 2026 AquaTrace Maritime Intelligence Systems. Built for Coast Guard & Marine Environmental Operations.
