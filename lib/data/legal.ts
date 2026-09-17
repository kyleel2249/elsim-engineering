import { company } from '@/lib/data/company';

export const legalLastUpdated = '2026-09-17';

export const privacySections = [
  {
    heading: 'Who we are',
    body: `${company.name} (\"we\", \"us\") is an electrical and energy engineering firm based in Accra, Ghana. This notice explains how we handle information when you use our website or contact us about projects.`,
  },
  {
    heading: 'What we collect',
    body: 'When you submit a quotation or contact form we collect the details you provide — typically name, organisation, email, telephone, project location and a description of the work. Server logs may record IP address and basic browser information for security and diagnostics.',
  },
  {
    heading: 'How we use it',
    body: 'We use enquiry details to respond to your request, prepare quotations and, where relevant, deliver contracted work. We do not sell personal data. We do not use enquiry data for unrelated marketing without a clear basis to do so.',
  },
  {
    heading: 'Sharing',
    body: 'We may share information with trusted service providers who help us operate the website or deliver projects (for example hosting or professional advisors), and with authorities where the law requires it. Partners only receive what they need to perform their role.',
  },
  {
    heading: 'Retention',
    body: 'Enquiry records are kept for as long as needed to handle the request and any follow-on work, and then for a limited period for legitimate business and legal purposes. You can ask us about the retention period that applies to your enquiry.',
  },
  {
    heading: 'Your rights',
    body: `You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to us at the address below or call ${company.phones[0].display}.`,
  },
  {
    heading: 'Security',
    body: 'We take reasonable technical and organisational steps to protect information in transit and at rest. No method of transmission over the internet is completely secure; please use secure channels for highly sensitive material.',
  },
  {
    heading: 'Contact',
    body: `${company.name}, ${company.address.full}. Telephone ${company.phones.map((p) => p.display).join(' or ')}.`,
  },
];

export const termsSections = [
  {
    heading: 'Website use',
    body: 'This website provides information about ELSIM Engineering services and projects. Content is for general guidance and does not form a contract until we agree scope, price and terms in writing.',
  },
  {
    heading: 'Quotations',
    body: 'Quotations are estimates based on the information you supply. Final pricing and programme depend on site conditions, client decisions and any variations agreed in writing.',
  },
  {
    heading: 'Intellectual property',
    body: 'Text, images and branding on this site belong to ELSIM Engineering or our licensors. You may not copy or reuse them for commercial purposes without permission.',
  },
  {
    heading: 'Liability',
    body: 'We take care to keep site information accurate but do not warrant that it is complete or error-free. Nothing on this site limits liability that cannot be limited under Ghanaian law.',
  },
  {
    heading: 'Governing law',
    body: 'These terms are governed by the laws of the Republic of Ghana. Courts in Ghana have exclusive jurisdiction over disputes arising from use of this website.',
  },
];
