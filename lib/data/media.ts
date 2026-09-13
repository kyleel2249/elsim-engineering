/**
 * ELSIM Engineering — Media asset registry
 * Place files under public/assets/elsim/ as documented in docs/ASSET_INSTALL.md
 */

export const media = {
  photography: {
    engineerPanelInspection: '/assets/elsim/photography/engineer-panel-inspection.png',
    solarTeamReview: '/assets/elsim/photography/solar-team-review.png',
    siteEngineerLaptop: '/assets/elsim/photography/site-engineer-laptop.png',
    technicianPanelWork: '/assets/elsim/photography/technician-panel-work.png',
  },
  infrastructure: {
    powerTransmission: '/assets/elsim/infrastructure/power-transmission.png',
    electricalPole: '/assets/elsim/infrastructure/electrical-pole.png',
  },
  leadership: {
    ourTeam: '/assets/elsim/leadership/our-team.png',
  },
} as const;

export type MediaKey = typeof media;
