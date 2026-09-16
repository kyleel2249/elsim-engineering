import { company } from '@/lib/data/company';

/**
 * Legal page content.
 *
 * Kept as data rather than JSX so the wording can be reviewed and replaced by
 * ELSIM's own counsel without touching component code. Every clause here is a
 * reasonable default for a corporate brochure site, not legal advice — have it
 * reviewed before relying on it.
 */

export const legalLastUpdated = '2026-09-16';

export const privacySections = [
  {
    heading: 'What this policy covers',
    body: `This policy explains what ${company.name} does with information collected through this website. It does not cover information you give us in person, by telephone, or under a separate contract.`,
  },
  {
    heading: 'Information we collect',
    body: 'We collect the details you submit through the quotation and contact forms: your name, company, email address, telephone number, project location, and the description of the work you need. We also collect anonymous usage statistics through Google Analytics, including pages viewed and approximate region. IP addresses are anonymised before storage.',
  },
  {
    heading: 'Why we use it',
    body: 'Enquiry details are used to respond to your request, prepare a quotation, and maintain a record of the enquiry. Usage statistics are used to understand which parts of the site are useful and where visitors have difficulty.',
  },
  {
    heading: 'Consent',
    body: 'The quotation form asks you to confirm that we may contact you about your enquiry. You can withdraw that consent at any time by contacting us, and we will stop using your details for follow-up.',
  },
  {
    heading: 'Who we share it with',
    body: 'We do not sell your information. Enquiry details are visible to the ELSIM staff handling your request and to the hosting and analytics providers that operate this site on our behalf. Where a project requires it, we may share details with a named subcontractor, and we will tell you when that applies.',
  },
  {
    heading: 'How long we keep it',
    body: 'Enquiry records are kept for as long as needed to respond and for a reasonable period afterwards to support any resulting contract. Analytics data is retained according to the default retention settings of the analytics provider.',
  },
  {
    heading: 'Your rights',
    body: `You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to us at the address below or call ${company.phones[0]}.`,
  },
  {
    heading: 'Cookies and analytics',
    body: 'This site uses Google Analytics to measure usage. Your browser can be configured to block these cookies, and the site remains fully usable if you do. A theme preference is stored locally in your browser so the site remembers how you like it to look; that preference never leaves your device.',
  },
  {
    heading: 'Changes',
    body: 'If this policy changes we will update the date shown on this page. Material changes will be highlighted on the page for a reasonable period.',
  },
  {
    heading: 'Contact',
    body: `${company.name}, ${company.address.full}. Telephone ${company.phones.join(' or ')}.`,
  },
];

export const termsSections = [
  {
    heading: 'About these terms',
    body: `These terms govern your use of this website. They do not replace or vary the terms of any contract between you and ${company.name} for engineering services; where the two differ, the signed contract governs.`,
  },
  {
    heading: 'Use of the site',
    body: 'You may read, print and share the content here for your own business purposes. You may not republish it as your own, use it to imply an association with ELSIM that does not exist, or attempt to interfere with the operation or security of the site.',
  },
  {
    heading: 'Accuracy of content',
    body: 'Service descriptions, project records and capability statements on this site are published in good faith and reviewed against company records. They are indicative, not a technical specification, and should not be relied on as an engineering instruction. Project details marked as pending verification are exactly that.',
  },
  {
    heading: 'Quotations and enquiries',
    body: 'Submitting the quotation form starts a conversation; it does not create a contract, reserve resources, or constitute an offer capable of acceptance. Pricing, scope and programme are only binding once issued in a written quotation signed by an authorised ELSIM representative.',
  },
  {
    heading: 'Intellectual property',
    body: `The ELSIM name, the gear-and-circuit mark, and the text and images on this site belong to ${company.name} unless otherwise credited. They may not be used without written permission.`,
  },
  {
    heading: 'Third-party links',
    body: 'Where this site links to another organisation, that link is provided for convenience. We do not control those sites and are not responsible for their content or their handling of your information.',
  },
  {
    heading: 'Availability',
    body: 'We aim to keep the site available, but we do not guarantee uninterrupted access. We may change, suspend or withdraw any part of it without notice.',
  },
  {
    heading: 'Liability',
    body: 'Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud. Subject to that, we are not liable for loss arising from reliance on website content in place of a written engineering instruction or a signed contract.',
  },
  {
    heading: 'Governing law',
    body: 'These terms are governed by the laws of the Republic of Ghana, and disputes are subject to the jurisdiction of the Ghanaian courts.',
  },
];
