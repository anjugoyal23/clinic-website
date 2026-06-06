export interface ConditionPage {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTagline: string;
  symptoms: { title: string; description: string }[];
  whenToConsult: string[];
  approach: { title: string; description: string }[];
  caseExample: {
    patient: string;
    condition: string;
    story: string;
    outcome: string;
  };
  faq: { q: string; a: string }[];
}
