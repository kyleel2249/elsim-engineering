/**
 * ELSIM Engineering — media asset registry.
 *
 * Every image the site renders is declared here with its alt text and its
 * intrinsic pixel dimensions. Components read the dimensions rather than
 * guessing, which keeps layout stable and stops small source files from being
 * upscaled into a blur.
 *
 * The supplied photography is low resolution. Per the standing decision, it is
 * displayed with `object-contain` and never cropped — so images letterbox
 * against a brand ground instead of being trimmed to fill a box. Replacing a
 * file with a higher-resolution version only requires updating `width`/`height`
 * here. See docs/ASSET_INSTALL.md.
 */

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const media = {
  photography: {
    engineerPanelInspection: {
      src: '/assets/elsim/photography/engineer-panel-inspection.png',
      alt: 'ELSIM electrical engineer in a white hard hat inspecting an energised panel by torchlight',
      width: 362,
      height: 143,
    },
    solarTeamReview: {
      src: '/assets/elsim/photography/solar-team-review.png',
      alt: 'Three ELSIM engineers in white hard hats and safety glasses reviewing drawings in front of a solar array',
      width: 331,
      height: 205,
    },
    siteEngineerLaptop: {
      src: '/assets/elsim/photography/site-engineer-laptop.png',
      alt: 'ELSIM site engineer in a blue hard hat reviewing project data on a laptop on site',
      width: 135,
      height: 518,
    },
    technicianPanelWork: {
      src: '/assets/elsim/photography/technician-panel-work.png',
      alt: 'ELSIM technician in an orange hard hat and safety glasses working on switchgear in a control panel',
      width: 251,
      height: 141,
    },
  },
  infrastructure: {
    powerTransmission: {
      src: '/assets/elsim/infrastructure/power-transmission.png',
      alt: 'High-voltage transmission tower with insulator strings and overhead conductors',
      width: 1600,
      height: 900,
    },
    electricalPole: {
      src: '/assets/elsim/infrastructure/electrical-pole.png',
      alt: 'Wooden distribution pole with steel cross-arms, insulators and overhead lines against a clear sky',
      width: 463,
      height: 168,
    },
  },
  leadership: {
    ourTeam: {
      src: '/assets/elsim/leadership/our-team.png',
      alt: 'ELSIM Engineering leadership: Ing. Simon Sandy Kununya, Chief Executive Officer; Ella Ankah, General Manager; Ing. Teye Amos Agudey, Engineer and Project Manager; Stephen Doe Agbo, Chief Accounts Officer',
      width: 414,
      height: 498,
    },
  },

  /** Master logo as supplied, on its white ground. */
  logo: {
    src: '/assets/elsim/logo.png',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 1280,
    height: 1280,
  },
  /** Background knocked out — use on any light theme surface. */
  logoMark: {
    src: '/assets/elsim/logo-mark.png',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 1280,
    height: 1280,
  },
  /** Navy lifted to white — use on dark surfaces (footer, black theme). */
  logoInverse: {
    src: '/assets/elsim/logo-inverse.png',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 1280,
    height: 1280,
  },
  og: {
    src: '/og-image.png',
    alt: 'ELSIM Engineering — electrical, energy and technical engineering across West Africa',
    width: 1200,
    height: 630,
  },
} as const;

/** URL strings for 3D TextureLoader and similar. */
export const mediaUrls = {
  photography: {
    engineerPanelInspection: media.photography.engineerPanelInspection.src,
    solarTeamReview: media.photography.solarTeamReview.src,
    siteEngineerLaptop: media.photography.siteEngineerLaptop.src,
    technicianPanelWork: media.photography.technicianPanelWork.src,
  },
  infrastructure: {
    powerTransmission: media.infrastructure.powerTransmission.src,
    electricalPole: media.infrastructure.electricalPole.src,
  },
  leadership: {
    ourTeam: media.leadership.ourTeam.src,
  },
} as const;
