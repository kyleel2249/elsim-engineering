# Install ELSIM Logo & Photography Assets

Copy the provided company images into the Next.js `public` folder so they are served at `/assets/elsim/...`.

## Logo & favicon (required)

| Source file | Destination in repo |
|-------------|---------------------|
| `elsim-logo.png` | `public/assets/elsim/logo.png` |

Used as: header logo, footer logo, favicon, apple-touch-icon, Open Graph image, 3D logo fallback.

## Photography

| Source file | Destination in repo |
|-------------|---------------------|
| `elsim-tech1.png` | `public/assets/elsim/infrastructure/power-transmission.png` |
| `elsim-tech2.png` | `public/assets/elsim/photography/engineer-panel-inspection.png` |
| `elsim-tech3.png` | `public/assets/elsim/photography/solar-team-review.png` |
| `elsim-tech4.png` | `public/assets/elsim/leadership/our-team.png` |
| `elsim-tech5.png` | `public/assets/elsim/infrastructure/electrical-pole.png` |
| `elsim-tech6.png` | `public/assets/elsim/photography/site-engineer-laptop.png` |
| `elsim-vision-mision.png` | `public/assets/elsim/photography/technician-panel-work.png` |

## Windows (Command Prompt)

```cmd
cd elsim-engineering
mkdir public\assets\elsim\photography public\assets\elsim\leadership public\assets\elsim\infrastructure

copy path\to\elsim-logo.png public\assets\elsim\logo.png

copy path\to\elsim-tech1.png public\assets\elsim\infrastructure\power-transmission.png
copy path\to\elsim-tech2.png public\assets\elsim\photography\engineer-panel-inspection.png
copy path\to\elsim-tech3.png public\assets\elsim\photography\solar-team-review.png
copy path\to\elsim-tech4.png public\assets\elsim\leadership\our-team.png
copy path\to\elsim-tech5.png public\assets\elsim\infrastructure\electrical-pole.png
copy path\to\elsim-tech6.png public\assets\elsim\photography\site-engineer-laptop.png
copy path\to\elsim-vision-mision.png public\assets\elsim\photography\technician-panel-work.png

npm install
npm run dev
```

## 3D logo animation

- Component: `components/3d/Logo3D.tsx`
- Gear ring + circuit nodes + burgundy arc rotate slowly
- Pauses when `prefers-reduced-motion` is set
- Falls back to the official PNG mark when WebGL is unavailable
