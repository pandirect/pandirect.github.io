import { getMessages } from 'next-intl/server';

export async function getCaseStudies() {
  const messages = await getMessages();
  return (messages as any).caseStudies as Array<TCase>;
}

export async function getPreviewCaseStudies() {
  const cases = await getCaseStudies();

  return cases.slice(0, 3);
}

export async function getFeedbacks() {
  const cases = await getCaseStudies();

  return cases
    .map(({ testimonial }) => testimonial)
    .filter((value) => value != null)
    .slice(0, 3);
}