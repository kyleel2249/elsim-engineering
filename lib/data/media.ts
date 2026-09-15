/**
 * ELSIM Engineering — Media asset registry with accessibility alt text
 * Place files under public/assets/elsim/ as documented in docs/ASSET_INSTALL.md
 */

export const media = {
  photography: {
    engineerPanelInspection: {
      src: '/assets/elsim/photography/engineer-panel-inspection.png',
      alt: 'ELSIM electrical engineer wearing a white hard hat and orange high-visibility vest inspecting an electrical panel with a flashlight',
    },
    solarTeamReview: {
      src: '/assets/elsim/photography/solar-team-review.png',
      alt: 'Three ELSIM engineers in white hard hats and safety glasses reviewing solar installation plans in front of solar panels',
    },
    siteEngineerLaptop: {
      src: '/assets/elsim/photography/site-engineer-laptop.png',
      alt: 'ELSIM site engineer in a blue hard hat and safety glasses reviewing project data on a laptop at a construction site',
    },
    technicianPanelWork: {
      src: '/assets/elsim/photography/technician-panel-work.png',
      alt: 'ELSIM technician in an orange hard hat and safety glasses working on an electrical control panel with switchgear',
    },
  },
  infrastructure: {
    powerTransmission: {
      src: '/assets/elsim/infrastructure/power-transmission.png',
      alt: 'High-voltage power transmission insulator string and overhead conductors on an electrical tower against the sky',
    },
    electricalPole: {
      src: '/assets/elsim/infrastructure/electrical-pole.png',
      alt: 'Wooden electrical distribution pole with cross-arms, insulators and power lines against a clear blue sky',
    },
  },
  leadership: {
    ourTeam: {
      src: '/assets/elsim/leadership/our-team.png',
      alt: 'ELSIM Engineering leadership team: Ing. Simon Sandy Kununya, Chief Executive Officer; Ella Ankah, General Manager; Ing. Teye Amos Agudey, Engineer and Project Manager; Stephen Doe Agbo, Chief Accounts Officer',
    },
  },
  logo: {
    src: '/assets/elsim/logo.png',
    alt: 'ELSIM Engineering Firm logo — gear and circuit mark',
  },
} as const;

/** URL strings for 3D TextureLoader and similar */
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
