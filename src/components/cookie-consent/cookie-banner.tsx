'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

type CookieBannerProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  const t = useTranslations('legal.cookieBanner');

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('message')}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background/95 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground md:max-w-3xl">
            {t('message')}{' '}
            <Link href="/cookies/" className="text-primary underline-offset-4 hover:underline">
              {t('learnMore')}
            </Link>
          </p>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={onDecline}>
              {t('decline')}
            </Button>
            <Button size="sm" onClick={onAccept}>
              {t('accept')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
