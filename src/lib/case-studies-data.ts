import { getMessages } from 'next-intl/server';

export async function getCaseStudies() {
  const messages = await getMessages();
  return (messages as any).caseStudies as Array<TCase>;
}

export async function getPreviewCaseStudies() {
  const cases = await getCaseStudies();

  return cases.slice(0, 3);
}
