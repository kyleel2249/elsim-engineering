/**
 * ELSIM Engineering — blog posts.
 *
 * Kept as data so articles can be reviewed and expanded without touching page
 * components. Add a post here and it appears on /blog, gets a static route at
 * /blog/[slug], and is included in the sitemap automatically.
 *
 * Each post should carry a descriptive `image.alt` (for accessibility and image
 * SEO) and `keywords` aligned with the title and body.
 */

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string (YYYY-MM-DD). */
  publishedAt: string;
  /** Optional last-updated date for sitemap lastmod. */
  updatedAt?: string;
  author: string;
  category: string;
  /** Search-facing keywords (also used in metadata). */
  keywords: string[];
  /** Hero / social share image — use real site photography with descriptive alt. */
  image: BlogImage;
  /** Paragraphs of body copy. */
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'planning-a-transformer-installation',
    title: 'Planning a transformer installation: what clients should prepare',
    excerpt:
      'Site access, load data and clearances make the difference between a smooth install and costly delay. Here is what we ask for before mobilising on transformer projects in Ghana and West Africa.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-17',
    author: 'ELSIM Engineering',
    category: 'Power distribution',
    keywords: [
      'transformer installation Ghana',
      'package substation',
      '800kVA transformer',
      'power distribution West Africa',
      'electrical engineering Accra',
    ],
    image: {
      src: '/assets/elsim/work/transformer-kiosk-installation.jpg',
      alt: 'ELSIM Engineering crew in high-visibility vests excavating beside a packaged transformer kiosk substation on a West African site',
      width: 1400,
      height: 836,
    },
    body: [
      'A transformer installation is rarely just the unit and the crane day. Access routes, foundation readiness, cable terminations and protection settings all need to be aligned before the equipment leaves the yard.',
      'We typically ask clients for single-line diagrams, expected load, available fault levels and any utility interconnection requirements. Confirming these early reduces the risk of redesign once the transformer is already on site.',
      'On constrained industrial plots, temporary works and lift plans matter as much as the electrical design. Sharing site photos and dimensions of access gates helps us plan the method statement before we arrive.',
      'If you are preparing a transformer or package substation project in Ghana or the wider region, send the location, the kVA rating and your programme. We will respond with an approach and the information we need next.',
    ],
  },
  {
    slug: 'electrical-safety-on-live-sites',
    title: 'Electrical safety on live commercial sites',
    excerpt:
      'Working near energised systems demands discipline: isolation, permits and clear roles. How ELSIM approaches safety when the building cannot fully shut down.',
    publishedAt: '2026-08-22',
    updatedAt: '2026-09-17',
    author: 'ELSIM Engineering',
    category: 'Safety',
    keywords: [
      'electrical safety Ghana',
      'live site isolation',
      'electrical permits to work',
      'commercial electrical maintenance',
      'HSE electrical engineering',
    ],
    image: {
      src: '/assets/elsim/photography/engineer-panel-inspection.jpg',
      alt: 'ELSIM electrical engineer in a white hard hat inspecting an energised control panel by torchlight on a commercial site',
      width: 1448,
      height: 572,
    },
    body: [
      'Many commercial and industrial facilities cannot take a full outage. That does not mean work proceeds without isolation — it means isolation is planned zone by zone, with written permits and verified dead testing before tools come out.',
      'Our teams follow a hierarchy of controls: eliminate the hazard where possible, then isolate, then use PPE as the last line of defence. Toolbox talks at the start of each shift keep roles and emergency routes current.',
      'Clients can support this by nominating a site contact who understands which boards can be switched, when, and who holds the keys. Ambiguity on authority is one of the most common sources of delay and risk.',
      'Safety is not a separate product line for us; it is how every installation, inspection and maintenance visit is run. Read more on our Safety & quality page, or talk to us about a planned outage window for your next works.',
    ],
  },
  {
    slug: 'solar-for-industrial-loads-in-ghana',
    title: 'Solar for industrial loads in Ghana: practical considerations',
    excerpt:
      'Industrial roofs and yards can host meaningful PV, but load profiles, grid rules and maintenance access decide whether a system pays back.',
    publishedAt: '2026-07-15',
    updatedAt: '2026-09-17',
    author: 'ELSIM Engineering',
    category: 'Solar',
    keywords: [
      'solar installation Ghana',
      'industrial solar PV',
      'commercial solar Accra',
      'photovoltaic system design',
      'renewable energy West Africa',
    ],
    image: {
      src: '/assets/elsim/photography/solar-team-review.jpg',
      alt: 'Three ELSIM engineers in white hard hats and safety glasses reviewing drawings in front of a solar photovoltaic array',
      width: 1324,
      height: 820,
    },
    body: [
      'Industrial solar is more than panel count. Daytime load shape, power factor, existing switchgear capacity and roof structure all influence design. A system sized only on roof area often mismatches how the plant actually draws power.',
      'We start with an energy and load assessment, then look at interconnection options and any utility requirements that apply to the site. Storage is optional — not every industrial profile needs batteries on day one.',
      'Operations teams care about access for cleaning and inverter service. Designing walkways and clearances into the array avoids shortcuts that create both safety and performance problems later.',
      'If you are evaluating solar for a factory, warehouse or commercial complex, share twelve months of bills if you have them, or a recent load survey. We will outline a realistic scope and next steps.',
    ],
  },
  {
    slug: 'why-maintenance-contracts-matter',
    title: 'Why planned electrical maintenance contracts matter',
    excerpt:
      'Reactive call-outs fix symptoms. Planned inspection and testing catch loose connections, thermal hotspots and protection drift before they become outages.',
    publishedAt: '2026-06-03',
    updatedAt: '2026-09-17',
    author: 'ELSIM Engineering',
    category: 'Maintenance',
    keywords: [
      'electrical maintenance contract Ghana',
      'planned preventive maintenance',
      'switchgear inspection',
      'electrical testing and commissioning',
      'facility maintenance West Africa',
    ],
    image: {
      src: '/assets/elsim/photography/technician-panel-work.jpg',
      alt: 'ELSIM technician in an orange hard hat and safety glasses working on switchgear inside a low-voltage control panel',
      width: 1004,
      height: 564,
    },
    body: [
      'Unplanned downtime is almost always more expensive than scheduled maintenance. Thermal imaging, torque checks and protection relay testing surface issues while the plant is still running under control.',
      'A maintenance contract gives you a defined response window, a known team and a record of what was tested. That documentation is useful for insurers, auditors and internal asset managers.',
      'We tailor frequency to criticality: main incomer and generators more often than remote distribution boards. The goal is proportional coverage, not a one-size checklist.',
      'Explore our Maintenance support page for how cover is structured, or request a quotation with your site locations and preferred response times.',
    ],
  },
];

export function getPublishedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/** Absolute image URL for Open Graph, Twitter and JSON-LD. */
export function postImageAbsoluteUrl(post: BlogPost, origin: string): string {
  return `${origin.replace(/\/$/, '')}${post.image.src}`;
}
