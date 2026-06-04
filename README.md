# CAREFLOW [TELEMETRY_SYS_V1]
> **AUSTERE HEALTH MONITORING INTERFACE**

---

CareFlow is a mission-oriented health tracking application built on aerospace design principles. It abandons traditional UI fluff in favor of a pure black canvas, full-bleed imagery, and highly legible, condensed typography. Every pixel is engineered for clarity, focus, and rapid data comprehension.

## I. SYSTEM OVERVIEW
This application acts as a central telemetry hub for human health data. It strips away gradients, shadows, and unnecessary chrome to deliver an uncompromising view of your vital metrics.

**Core Modules:**
- **[CMD]** `Command Dashboard`: High-contrast, real-time health data aggregation.
- **[NTR]** `Nutrition & Hydration`: Precision tracking of caloric and fluid intake.
- **[MED]** `Medical Proximity & Regimen`: Geolocation of critical care facilities alongside unyielding medication schedules.
- **[AI]** `Gemini Engine`: Natural language system queries operating directly within the telemetry feed.

## II. DESIGN ARCHITECTURE
CareFlow strictly adheres to the aerospace design parameters defined in the core design document. The interface is an exercise in negation. 

- **Surface:** Pure Black (`#000000`). No tints, no gradients.
- **Typography:** `D-DIN-Bold` for display headers. Engineered with vertical compression (0.95 line-height) and optical horizontal expansion (1.6px letter spacing). All caps, always.
- **Chrome:** Minimal. Ghost-outlined pill buttons and 1px hairlines (`#3a3a3f`) are the only defining boundaries.
- **Depth:** Purely photographic. Full-bleed background imagery provides all necessary visual hierarchy and atmosphere.

## III. ENGINEERING MANIFEST
The technical foundation is chosen for speed and reliable execution.

- **Render Engine:** React 19 / Vite
- **Styling:** TailwindCSS v4 (configured for absolute adherence to the design system)
- **Kinematics:** Framer Motion & GSAP (for micro-animations and zero-latency transitions)
- **Geospatial:** Leaflet / React-Leaflet
- **Intelligence:** Node/Express + Gemini API

## IV. IGNITION SEQUENCE

**System Requirements:**
- Node.js runtime environment (v18+)

**1. Initialize Workspace**
```bash
npm install
```

**2. Configure Telemetry Keys**
The AI assistant requires an active Gemini uplink. Create a `.env.local` file at the project root:
```env
GEMINI_API_KEY=insert_key_here
```

**3. Launch**
```bash
npm run dev
```

---
*End of Manifest.*
