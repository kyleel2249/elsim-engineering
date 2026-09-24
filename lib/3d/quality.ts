/**
 * Adaptive 3D quality tiers for responsive performance
 */

export type QualityTier = 'HIGH' | 'MEDIUM' | 'LOW';

export interface QualitySettings {
  tier: QualityTier;
  dpr: [number, number];
  shadows: boolean;
  maxCharacters: number;
  particleCount: number;
  antialias: boolean;
  postProcessing: boolean;
}

export function detectQualityTier(): QualitySettings {
  if (typeof window === 'undefined') {
    return {
      tier: 'MEDIUM',
      dpr: [1, 1.5],
      shadows: false,
      maxCharacters: 1,
      particleCount: 0,
      antialias: true,
      postProcessing: false,
    };
  }

  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  // Rough GPU heuristic via hardwareConcurrency + memory if available
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

  if (isMobile || cores <= 4 || memory <= 2) {
    return {
      tier: 'LOW',
      dpr: [1, 1],
      shadows: false,
      maxCharacters: 1,
      particleCount: 0,
      antialias: false,
      postProcessing: false,
    };
  }

  if (isTablet || cores <= 6 || memory <= 4) {
    return {
      tier: 'MEDIUM',
      dpr: [1, 1.5],
      shadows: false,
      maxCharacters: 2,
      particleCount: 8,
      antialias: true,
      postProcessing: false,
    };
  }

  return {
    tier: 'HIGH',
    dpr: [1, 2],
    shadows: true,
    maxCharacters: 3,
    particleCount: 20,
    antialias: true,
    postProcessing: true,
  };
}
