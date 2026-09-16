/**
 * ELSIM 3D configuration
 * Set USE_REAL_HUMANS to true when photorealistic GLB characters are placed in public/assets/elsim/humans/
 */
export const USE_REAL_HUMANS = false;

export const HUMAN_MODEL_PATHS = {
  EngineerMale: {
    high: '/assets/elsim/humans/EngineerMale/high.glb',
    medium: '/assets/elsim/humans/EngineerMale/medium.glb',
    low: '/assets/elsim/humans/EngineerMale/low.glb',
  },
  Technician: {
    high: '/assets/elsim/humans/Technician/high.glb',
    medium: '/assets/elsim/humans/Technician/medium.glb',
    low: '/assets/elsim/humans/Technician/low.glb',
  },
  SolarTechnician: {
    high: '/assets/elsim/humans/SolarTechnician/high.glb',
    medium: '/assets/elsim/humans/SolarTechnician/medium.glb',
    low: '/assets/elsim/humans/SolarTechnician/low.glb',
  },
} as const;

export type CharacterRole = keyof typeof HUMAN_MODEL_PATHS;

/**
 * Colours used by the 3D scenes.
 *
 * `navy` and `gold` are sampled from the master logo and are the primary pair.
 * `burgundy` is kept because the `red` theme and the earlier brand still use
 * it, and because removing it would break the scenes that reference it.
 */
export const BRAND_3D = {
  navy: '#0F3156',
  navyLight: '#2A5A94',
  gold: '#FAB617',
  goldDeep: '#D8960B',
  burgundy: '#941A1D',
  charcoal: '#171717',
  metal: '#D1D1D1',
  engblue: '#2F80C5',
  safety: '#D7E63D',
  skin: '#8D5524',
  skinDark: '#5C3317',
  workShirt: '#2a2a2a',
  vest: '#D7E63D',
} as const;
