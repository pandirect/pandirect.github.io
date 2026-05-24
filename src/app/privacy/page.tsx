import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { LegalPageLayout } from '@/components/legal/legal-page-layout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.privacy');

  return {
    title: `${t('title')} | Pandirect`,
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations('legal.privacy');

  return (
    <LegalPageLayout title={t('title')} updatedAt={t('updatedAt')}>
      <div className="rounded-lg border border-border bg-secondary/20 p-6">
        <h2 className="text-lg font-semibold text-foreground">{t('placeholderTitle')}</h2>
        <p className="mt-3 text-muted-foreground">{t('placeholder')}</p>
        <div className="mt-6 space-y-1 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{t('operatorLabel')}</p>
          <p>{t('operatorName')}</p>
          <p>{t('operatorInn')}</p>
          <p>{t('operatorOgrnip')}</p>
          <p>{t('operatorAddress')}</p>
          <p>
            <Link
              href={`mailto:${t('operatorEmail')}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {t('operatorEmail')}
            </Link>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
