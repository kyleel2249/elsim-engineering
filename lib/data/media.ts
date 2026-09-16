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

export interface WorkPhoto extends MediaAsset {
  /** Service/project category slugs this photo depicts, e.g. 'power-distribution'. */
  categories: readonly string[];
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

  /**
   * Field photography of ELSIM crews at work.
   *
   * Each entry is tagged with the service/project category it depicts —
   * matched from what's visibly happening in the shot (pole work, panel
   * wiring, transformer installation, and so on), not from a claim about
   * which specific named project or site it was taken on. `categories`
   * drives `getWorkByCategory` below, used on service and project pages.
   */
  work: {
    panelWiringTeam: {
      src: '/assets/elsim/work/panel-wiring-team.png',
      alt: 'Two ELSIM technicians wiring a distribution panel inside a building doorway',
      width: 565,
      height: 425,
      categories: ['electrical-installations'],
    },
    transformerKioskInstallation: {
      src: '/assets/elsim/work/transformer-kiosk-installation.png',
      alt: 'ELSIM crew in high-visibility vests excavating beside a packaged transformer kiosk substation',
      width: 561,
      height: 335,
      categories: ['power-distribution'],
    },
    switchgearCabinetOutdoor: {
      src: '/assets/elsim/work/switchgear-cabinet-outdoor.png',
      alt: 'Two ELSIM engineers in hard hats working on an outdoor switchgear cabinet',
      width: 508,
      height: 681,
      categories: ['power-distribution'],
    },
    facadeConduitInstallation: {
      src: '/assets/elsim/work/facade-conduit-installation.png',
      alt: 'ELSIM crew on a ladder installing conduit on a building facade, high-visibility strip uniforms',
      width: 454,
      height: 608,
      categories: ['electrical-installations'],
    },
    transformerRoomOverview: {
      src: '/assets/elsim/work/transformer-room-overview.png',
      alt: 'Row of oil-type distribution transformers with copper busbar connections inside a transformer room',
      width: 504,
      height: 670,
      categories: ['power-distribution'],
    },
    linemanConductorWork: {
      src: '/assets/elsim/work/lineman-conductor-work.png',
      alt: 'ELSIM lineman harnessed to a utility pole, working on overhead conductors and insulators',
      width: 490,
      height: 652,
      categories: ['power-distribution'],
    },
    cableCoilTransport: {
      src: '/assets/elsim/work/cable-coil-transport.png',
      alt: 'ELSIM linemen carrying a fall-arrest harness and a coil of overhead conductor to a line-works site',
      width: 511,
      height: 416,
      categories: ['power-distribution'],
    },
    poleTeamBriefing: {
      src: '/assets/elsim/work/pole-team-briefing.png',
      alt: 'ELSIM line crew gathered at the base of a utility pole beside a danger-of-death warning sign',
      width: 478,
      height: 655,
      categories: ['power-distribution'],
    },
    linemanPoleTop: {
      src: '/assets/elsim/work/lineman-pole-top.png',
      alt: 'ELSIM lineman working at height on a utility pole crossarm, silhouetted against the sky',
      width: 439,
      height: 656,
      categories: ['power-distribution'],
    },
    machinePlatformAssembly: {
      src: '/assets/elsim/work/machine-platform-assembly.png',
      alt: 'ELSIM technicians on an elevated platform assembling industrial machinery, forklift supporting the platform',
      width: 485,
      height: 421,
      categories: ['electrical-installations'],
    },
    siteTeamWalkthrough: {
      src: '/assets/elsim/work/site-team-walkthrough.png',
      alt: 'Site team in high-visibility vests and hard hats on a walkthrough at a building construction site',
      width: 551,
      height: 421,
      categories: ['electrical-consulting'],
    },
    busbarPanelCloseup: {
      src: '/assets/elsim/work/busbar-panel-closeup.png',
      alt: 'Close-up of a three-phase colour-coded copper busbar arrangement inside a distribution panel',
      width: 470,
      height: 677,
      categories: ['power-distribution', 'electrical-installations'],
    },
    meterInspection: {
      src: '/assets/elsim/work/meter-inspection.png',
      alt: 'ELSIM engineer in insulated gloves inspecting an outdoor electricity meter enclosure',
      width: 538,
      height: 681,
      categories: ['electrical-maintenance'],
    },
    liftShaftInstallation: {
      src: '/assets/elsim/work/lift-shaft-installation.png',
      alt: 'Two ELSIM technicians working inside a lift shaft on guide rail and control wiring installation',
      width: 471,
      height: 428,
      categories: ['electrical-installations'],
    },
    breakerPanelInspection: {
      src: '/assets/elsim/work/breaker-panel-inspection.png',
      alt: 'Three ELSIM engineers inspecting an open circuit breaker panel',
      width: 557,
      height: 430,
      categories: ['electrical-installations'],
    },
    reinforcementConstructionSite: {
      src: '/assets/elsim/work/reinforcement-construction-site.png',
      alt: 'Site team beside stacked steel reinforcement mesh at a building construction site',
      width: 472,
      height: 651,
      categories: ['electrical-consulting'],
    },
    steelFrameAssembly01: {
      src: '/assets/elsim/work/steel-frame-assembly-01.png',
      alt: 'Two ELSIM technicians assembling a white steel equipment frame indoors',
      width: 521,
      height: 659,
      categories: ['electrical-installations'],
    },
    machineHallOverview: {
      src: '/assets/elsim/work/machine-hall-overview.png',
      alt: 'Wide view of an industrial hall with ELSIM technicians assembling machinery on elevated platforms',
      width: 514,
      height: 429,
      categories: ['electrical-installations'],
    },
    steelFrameAssembly02: {
      src: '/assets/elsim/work/steel-frame-assembly-02.png',
      alt: 'ELSIM team assembling a steel equipment frame, several technicians working together',
      width: 482,
      height: 430,
      categories: ['electrical-installations'],
    },
    domesticScaffoldWork: {
      src: '/assets/elsim/work/domestic-scaffold-work.png',
      alt: 'ELSIM technicians on a timber platform installing electrical fittings in a residential ceiling',
      width: 565,
      height: 513,
      categories: ['electrical-installations'],
    },
    frameInstallation01: {
      src: '/assets/elsim/work/frame-installation-01.png',
      alt: 'ELSIM crew installing an angled steel equipment frame indoors, onlookers nearby',
      width: 418,
      height: 521,
      categories: ['electrical-installations'],
    },
    frameInstallation02: {
      src: '/assets/elsim/work/frame-installation-02.png',
      alt: 'ELSIM crew fitting a steel equipment frame in place, second angle of the same installation',
      width: 440,
      height: 582,
      categories: ['electrical-installations'],
    },
    busbarPanelFlatlay: {
      src: '/assets/elsim/work/busbar-panel-flatlay.png',
      alt: 'Unmounted three-phase busbar panel assembly laid flat on a workbench, colour-coded copper bars and breakers',
      width: 438,
      height: 580,
      categories: ['power-distribution', 'electrical-installations'],
    },
    /**
     * No ELSIM branding is visible in this shot, so the alt text describes
     * only what's shown rather than asserting whose facility or visit it is.
     */
    factoryFacilityVisit: {
      src: '/assets/elsim/work/factory-facility-visit.png',
      alt: 'Group of engineers and visitors in high-visibility vests touring an industrial warehouse with material racking',
      width: 914,
      height: 550,
      categories: ['electrical-consulting'],
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

/** Flat list of every field photo, for gallery grids. */
export const workPhotos: WorkPhoto[] = Object.values(media.work);

/**
 * Field photos tagged with a given service/project category slug.
 * Used on service and project detail pages so the photography shown is
 * honestly scoped to "this kind of work", not a specific-site claim.
 */
export function getWorkByCategory(category: string): WorkPhoto[] {
  return workPhotos.filter((photo) => photo.categories.includes(category));
}

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
