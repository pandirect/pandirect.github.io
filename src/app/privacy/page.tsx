import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageLayout } from '@/components/legal/legal-page-layout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.privacy');

  return {
    title: `${t('shortTitle')} | Pandirect`,
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations('legal.privacy');
  const sections = t.raw('sections') as Array<{ title: string; paragraphs: string[] }>;

  return (
    <LegalPageLayout title={t('title')} updatedAt={t('updatedAt')}>
      <LegalDocument intro={t('intro')} sections={sections} />
    </LegalPageLayout>
  );
}
