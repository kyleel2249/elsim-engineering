# ELSIM Engineering — 3D Human Asset Pipeline

## Why this document exists

The master creative direction requires **photorealistic 3D people** performing electrical and engineering work.

True photorealistic human characters (realistic skin, clothing, PPE, skeletal animation) cannot be generated as binary GLB/GLTF files inside this codebase without external assets.

This document defines the production pipeline so ELSIM can supply or commission the correct assets and the website can load them immediately.

---

## Required character set

| Component ID | Role | Suggested PPE |
|--------------|------|---------------|
| `EngineerMale` | Site / project engineer | Hard hat, safety glasses, work shirt |
| `EngineerFemale` | Site / project engineer | Hard hat, safety glasses, work shirt |
| `Technician` | Electrical technician | Gloves, boots, panel tools |
| `SolarTechnician` | Solar installer | High-vis vest, gloves, boots |
| `SafetyOfficer` | Safety personnel | High-vis, hard hat, clipboard |
| `ProjectEngineer` | Supervisor | Hard hat, tablet / drawings |

### Diversity requirements
- Multiple ages and body types
- Natural representation of African engineering professionals (Ghana / West Africa context)
- Varied hairstyles and skin tones
- No identical clones across the site

---

## Technical specifications

### Format
- **GLB** preferred (single-file, compressed)
- Or GLTF + external textures (then pack to GLB for production)

### Geometry budget (per character)
| Quality tier | Max triangles | Texture size |
|--------------|---------------|--------------|
| HIGH (desktop) | 40,000 – 80,000 | 2K |
| MEDIUM (laptop/tablet) | 15,000 – 30,000 | 1K |
| LOW (mobile) | 5,000 – 12,000 | 512–1K |

### Animation requirements (clips)
Export named animation clips in the same GLB:

| Clip name | Description |
|-----------|-------------|
| `Idle` | Subtle breathing / weight shift |
| `Inspect` | Looking at panel / equipment |
| `Reach` | Reaching toward panel or cable |
| `ToolUse` | Screwdriver / multimeter action |
| `Walk` | Short walk cycle (optional) |
| `Point` | Pointing at equipment / drawing |

### Materials
- Physically based (PBR): baseColor, metalness, roughness, normal
- Skin: non-metallic, moderate roughness
- Clothing: fabric-like roughness
- PPE (hard hat, boots): higher metalness / plastic response
- Brand accents only where realistic (helmet stripe, badge) — **not full burgundy uniforms**

### Safety rules (content)
- No depiction of unsafe live-electrical contact
- Gloves and appropriate PPE when near open panels
- No casual contact with energised conductors

---

## Recommended asset sources

1. **Custom Blender / Maya production** (best brand control)
2. **Ready Player Me** + custom clothing (fast, diverse faces)
3. **Mixamo** (animation retargeting onto custom meshes)
4. **Sketchfab / CGTrader** licensed industrial worker packs (verify commercial licence)
5. **Actor scan + retopology** (highest realism, higher cost)

---

## File placement in this repo

```
public/assets/elsim/humans/
  EngineerMale/
    high.glb
    medium.glb
    low.glb
  Technician/
    high.glb
    medium.glb
    low.glb
  ...
public/assets/elsim/equipment/
  ElectricalPanel.glb
  Transformer.glb
  SolarPanel.glb
  Switchgear.glb
  ...
public/assets/elsim/environments/
  ElectricalRoom.glb
  SolarSite.glb
  ...
```

---

## Code integration points (already prepared)

- `components/3d/humans/HumanFigure.tsx` — procedural placeholder + GLB slot
- `components/3d/humans/CharacterScene.tsx` — scene wrapper with quality tiers
- `components/3d/HeroHumanScene.tsx` — hero with engineer + panel
- `lib/3d/quality.ts` — HIGH / MEDIUM / LOW adaptive levels
- `hooks/useWebGLSupport.ts` — fallback detection

When a real `high.glb` is placed in the path above, set `USE_REAL_HUMANS = true` in `lib/3d/config.ts`.

---

## Current interim approach

Until photorealistic GLBs are supplied, the site uses **industrial-proportion procedural figures** (not cartoon, not game avatars):

- Clear head / torso / limb proportions
- PPE silhouettes (hard hat, vest)
- Subtle idle + inspect motion
- Burgundy + metal + charcoal materials aligned with brand

These placeholders communicate *people at work* and are replaced 1:1 by real GLBs without restructuring the site.

---

## Approval checklist before launch

- [ ] Commercial licence confirmed for all human models
- [ ] PPE accuracy reviewed by ELSIM technical lead
- [ ] No unsafe work depictions
- [ ] Mobile LOW tier tested on mid-range Android
- [ ] `prefers-reduced-motion` uses static photography fallback
- [ ] Authentic ELSIM project photos linked where available
