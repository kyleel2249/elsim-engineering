/**
 * ELSIM Engineering — media asset registry.
 *
 * Every image the site renders is declared here with its alt text and its
 * intrinsic pixel dimensions. Components read the dimensions rather than
 * guessing, which keeps layout stable and stops small source files from being
 * upscaled into a blur.
 *
 * Assets are optimized JPEG/PNG for Cloudflare static export (images.unoptimized).
 * See performance pass: multi-MB PNGs reduced to web-appropriate JPG.
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
      src: '/assets/elsim/photography/engineer-panel-inspection.jpg',
      alt: 'ELSIM electrical engineer in a white hard hat inspecting an energised panel by torchlight',
      width: 1448,
      height: 572,
    },
    solarTeamReview: {
      src: '/assets/elsim/photography/solar-team-review.jpg',
      alt: 'Three ELSIM engineers in white hard hats and safety glasses reviewing drawings in front of a solar array',
      width: 1324,
      height: 820,
    },
    siteEngineerLaptop: {
      src: '/assets/elsim/photography/site-engineer-laptop.jpg',
      alt: 'ELSIM site engineer in a blue hard hat reviewing project data on a laptop on site',
      width: 416,
      height: 1600,
    },
    technicianPanelWork: {
      src: '/assets/elsim/photography/technician-panel-work.jpg',
      alt: 'ELSIM technician in an orange hard hat and safety glasses working on switchgear in a control panel',
      width: 1004,
      height: 564,
    },
  },
  infrastructure: {
    electricalPole: {
      src: '/assets/elsim/infrastructure/electrical-pole.jpg',
      alt: 'Wooden distribution pole with steel cross-arms, insulators and overhead lines against a clear sky',
      width: 1600,
      height: 580,
    },
    powerTransmission: {
      src: '/assets/elsim/infrastructure/power-transmission.jpg',
      alt: 'Silhouette of a high-voltage transmission insulator string and lattice tower against a bright sky',
      width: 1600,
      height: 499,
    },
  },
  leadership: {
    ourTeam: {
      src: '/assets/elsim/leadership/our-team.jpg',
      alt: 'ELSIM Engineering leadership: Ing. Simon Sandy Kununya, Chief Executive Officer; Ella Ankah, General Manager; Ing. Teye Amos Agudey, Engineer and Project Manager; Stephen Doe Agbo, Chief Accounts Officer',
      width: 1149,
      height: 1599,
    },
  },
  work: {
    breakerPanelInspection: {
      src: '/assets/elsim/work/breaker-panel-inspection.jpg',
      alt: 'ELSIM technician inspecting a low-voltage breaker panel with the door open',
      width: 1400,
      height: 1080,
      categories: ['electrical-installations'],
    },
    busbarPanelCloseup: {
      src: '/assets/elsim/work/busbar-panel-closeup.jpg',
      alt: 'Close-up of a three-phase busbar assembly with colour-coded copper bars inside a distribution panel',
      width: 971,
      height: 1400,
      categories: ['power-distribution', 'electrical-installations'],
    },
    busbarPanelFlatlay: {
      src: '/assets/elsim/work/busbar-panel-flatlay.jpg',
      alt: 'Unmounted three-phase busbar panel assembly laid flat on a workbench, colour-coded copper bars and breakers',
      width: 1057,
      height: 1400,
      categories: ['power-distribution', 'electrical-installations'],
    },
    cableCoilTransport: {
      src: '/assets/elsim/work/cable-coil-transport.jpg',
      alt: 'ELSIM linemen carrying a fall-arrest harness and a coil of overhead conductor to a line-works site',
      width: 1400,
      height: 1139,
      categories: ['power-distribution'],
    },
    domesticScaffoldWork: {
      src: '/assets/elsim/work/domestic-scaffold-work.jpg',
      alt: 'ELSIM electrician on scaffolding installing wiring on a residential building',
      width: 1400,
      height: 1271,
      categories: ['electrical-installations'],
    },
    facadeConduitInstallation: {
      src: '/assets/elsim/work/facade-conduit-installation.jpg',
      alt: 'ELSIM crew on a ladder installing conduit on a building facade, high-visibility strip uniforms',
      width: 1045,
      height: 1400,
      categories: ['electrical-installations'],
    },
    factoryFacilityVisit: {
      src: '/assets/elsim/work/factory-facility-visit.jpg',
      alt: 'Group of engineers and visitors in high-visibility vests touring an industrial warehouse with material racking',
      width: 1400,
      height: 842,
      categories: ['electrical-consulting'],
    },
    frameInstallation01: {
      src: '/assets/elsim/work/frame-installation-01.jpg',
      alt: 'ELSIM technicians assembling an equipment support frame on site',
      width: 1123,
      height: 1400,
      categories: ['electrical-installations'],
    },
    frameInstallation02: {
      src: '/assets/elsim/work/frame-installation-02.jpg',
      alt: 'ELSIM crew installing an equipment frame structure',
      width: 1058,
      height: 1400,
      categories: ['electrical-installations'],
    },
    liftShaftInstallation: {
      src: '/assets/elsim/work/lift-shaft-installation.jpg',
      alt: 'ELSIM technicians working inside a lift shaft installing electrical services',
      width: 1400,
      height: 1272,
      categories: ['electrical-installations'],
    },
    linemanConductorWork: {
      src: '/assets/elsim/work/lineman-conductor-work.jpg',
      alt: 'ELSIM lineman harnessed to a utility pole, working on overhead conductors and insulators',
      width: 1052,
      height: 1400,
      categories: ['power-distribution'],
    },
    linemanPoleTop: {
      src: '/assets/elsim/work/lineman-pole-top.jpg',
      alt: 'ELSIM lineman working at height on a utility pole crossarm, silhouetted against the sky',
      width: 936,
      height: 1400,
      categories: ['power-distribution'],
    },
    machineHallOverview: {
      src: '/assets/elsim/work/machine-hall-overview.jpg',
      alt: 'Overview of industrial machine installation in a large hall with overhead crane',
      width: 1400,
      height: 1168,
      categories: ['electrical-installations'],
    },
    machinePlatformAssembly: {
      src: '/assets/elsim/work/machine-platform-assembly.jpg',
      alt: 'ELSIM technicians assembling equipment on an elevated platform',
      width: 1400,
      height: 1215,
      categories: ['electrical-installations'],
    },
    meterInspection: {
      src: '/assets/elsim/work/meter-inspection.jpg',
      alt: 'Close-up of an electricity meter being inspected by an ELSIM technician',
      width: 1106,
      height: 1400,
      categories: ['electrical-installations', 'power-distribution'],
    },
    panelWiringTeam: {
      src: '/assets/elsim/work/panel-wiring-team.jpg',
      alt: 'Two ELSIM technicians wiring a distribution panel inside a building doorway',
      width: 1400,
      height: 1053,
      categories: ['electrical-installations'],
    },
    poleTeamBriefing: {
      src: '/assets/elsim/work/pole-team-briefing.jpg',
      alt: 'ELSIM line crew gathered at the base of a utility pole beside a danger-of-death warning sign',
      width: 1021,
      height: 1400,
      categories: ['power-distribution'],
    },
    reinforcementConstructionSite: {
      src: '/assets/elsim/work/reinforcement-construction-site.jpg',
      alt: 'ELSIM supervisors walking a reinforced-concrete construction site',
      width: 1015,
      height: 1400,
      categories: ['electrical-consulting'],
    },
    siteTeamWalkthrough: {
      src: '/assets/elsim/work/site-team-walkthrough.jpg',
      alt: 'ELSIM engineering team walking through an active construction site',
      width: 1400,
      height: 1069,
      categories: ['electrical-installations'],
    },
    steelFrameAssembly01: {
      src: '/assets/elsim/work/steel-frame-assembly-01.jpg',
      alt: 'ELSIM technicians assembling a steel equipment frame',
      width: 1106,
      height: 1400,
      categories: ['electrical-installations'],
    },
    steelFrameAssembly02: {
      src: '/assets/elsim/work/steel-frame-assembly-02.jpg',
      alt: 'Steel equipment frame being assembled on site by ELSIM crew',
      width: 1400,
      height: 1248,
      categories: ['electrical-installations'],
    },
    switchgearCabinetOutdoor: {
      src: '/assets/elsim/work/switchgear-cabinet-outdoor.jpg',
      alt: 'Two ELSIM engineers in hard hats working on an outdoor switchgear cabinet',
      width: 1044,
      height: 1400,
      categories: ['power-distribution'],
    },
    transformerKioskInstallation: {
      src: '/assets/elsim/work/transformer-kiosk-installation.jpg',
      alt: 'ELSIM crew in high-visibility vests excavating beside a packaged transformer kiosk substation',
      width: 1400,
      height: 836,
      categories: ['power-distribution'],
    },
    transformerRoomOverview: {
      src: '/assets/elsim/work/transformer-room-overview.jpg',
      alt: 'Row of oil-type distribution transformers with copper busbar connections inside a transformer room',
      width: 1053,
      height: 1399,
      categories: ['power-distribution'],
    },
  },

  /** Master logo as supplied, on its white ground. */
  logo: {
    src: '/assets/elsim/logo.jpg',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 640,
    height: 640,
  },
  /** Background knocked out — use on any light theme surface. */
  logoMark: {
    src: '/assets/elsim/logo-mark.png',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 548,
    height: 640,
  },
  /** Navy lifted to white — use on dark surfaces (footer, black theme). */
  logoInverse: {
    src: '/assets/elsim/logo-inverse.png',
    alt: 'ELSIM Engineering Firm logo — navy gear ring with gold circuit mark',
    width: 548,
    height: 640,
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
    electricalPole: media.infrastructure.electricalPole.src,
    powerTransmission: media.infrastructure.powerTransmission.src,
  },
  leadership: {
    ourTeam: media.leadership.ourTeam.src,
  },
} as const;
