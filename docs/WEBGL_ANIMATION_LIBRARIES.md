# WebGL & Animation Libraries — ELSIM Engineering

Research summary (2026) for the 3D / motion stack on this site.

## Currently in use

| Library | Role on this project |
|---------|----------------------|
| **Three.js** | Core WebGL renderer |
| **React Three Fiber (R3F)** | Declarative Three.js in React |
| **@react-three/drei** | Helpers (loaders, controls, etc.) |
| **Framer Motion** | UI transitions (header menu, etc.) |
| **CSS / Tailwind** | Hero slideshow crossfade + progress bar |

## Recommended WebGL / 3D animation libraries

### 1. React Three Fiber + Three.js (already adopted)
- Industry standard for React + WebGL.
- Best control for custom engineering scenes, quality tiers, and reduced-motion fallbacks.
- Pair with **drei** for `useGLTF`, `Environment`, `ContactShadows` when real GLB humans are supplied.

### 2. GSAP (GreenSock)
- Best for **timeline-driven** and **scroll-linked** motion.
- Works with Three.js objects and DOM; free for standard use (including major plugins since GSAP 3.13+).
- Use for: hero entrance sequences, scroll storytelling, SVG/logo motion.
- Integrate via `gsap` + optional `@gsap/react` (`useGSAP`).

### 3. Theatre.js
- Visual **keyframe editor** for Three.js / R3F.
- Strong when designers need to tune camera paths and material animation without code-only iteration.

### 4. Spline
- Visual 3D design tool with React export.
- Fast for marketing scenes; less ideal for fine-grained engineering/performance control than hand-built R3F.

### 5. Babylon.js
- Full engine (Microsoft-backed): materials, animation state machines, stronger out-of-box tooling.
- Heavier than Three.js for a corporate marketing site; better for complex interactive apps/games.

### 6. Motion (formerly Framer Motion)
- Best for **React UI** animation, not WebGL itself.
- Already used lightly; keep for layout transitions, not 3D mesh animation.

### 7. Lenis
- Smooth scroll layer often paired with GSAP ScrollTrigger for award-style sites.

## Practical recommendation for ELSIM

| Need | Library |
|------|---------|
| Photo slideshow (current hero) | CSS opacity + interval (done) |
| 3D logo / light scenes | R3F + Three.js (done) |
| Future photoreal human GLBs | R3F + drei `useGLTF` + AnimationMixer |
| Scroll-driven page story | **GSAP + ScrollTrigger** |
| Designer-driven 3D timelines | Theatre.js |
| Rapid 3D marketing embeds | Spline (optional) |

## Performance notes (WebGL)

- Cap `dpr` (already in quality tiers).
- Prefer **lazy canvas mount** (`dynamic(..., { ssr: false })`).
- Always ship **non-WebGL fallback** (photos / static UI).
- Honour `prefers-reduced-motion`.
- Avoid running heavy R3F and a large DOM slideshow simultaneously on low-end mobile — current split hero uses the CSS slideshow on the left, which is the right default for performance.

## Optional next install (not required now)

```bash
npm install gsap @gsap/react
```

Use only when adding scroll-driven section storytelling beyond the current auto-slideshow.
