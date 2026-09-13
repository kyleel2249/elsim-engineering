# Install ELSIM Photography Assets

Copy the provided company images into the Next.js `public` folder so they are served at `/assets/elsim/...`.

## From the attachments you supplied

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

copy path\to\elsim-tech1.png public\assets\elsim\infrastructure\power-transmission.png
copy path\to\elsim-tech2.png public\assets\elsim\photography\engineer-panel-inspection.png
copy path\to\elsim-tech3.png public\assets\elsim\photography\solar-team-review.png
copy path\to\elsim-tech4.png public\assets\elsim\leadership\our-team.png
copy path\to\elsim-tech5.png public\assets\elsim\infrastructure\electrical-pole.png
copy path\to\elsim-tech6.png public\assets\elsim\photography\site-engineer-laptop.png
copy path\to\elsim-vision-mision.png public\assets\elsim\photography\technician-panel-work.png
```

## After copying

```cmd
npm run dev
```

Images will appear on Home, About (team photo), Services context, and fallbacks when WebGL is unavailable.
