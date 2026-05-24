'use client';

import { useCallback, useEffect, useState } from 'react';
import { YandexMetricaProvider } from '@artginzburg/next-ym';
import { YANDEX_ID } from '@/lib/constants';
import {
  getStoredCookieConsent,
  storeCookieConsent,
  type CookieConsentStatus,
} from '@/lib/cookie-consent';
import { CookieBanner } from '@/components/cookie-consent/cookie-banner';

type ConsentState = CookieConsentStatus | 'pending' | null;

type CookieConsentProviderProps = {
  children: React.ReactNode;
};

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(getStoredCookieConsent() ?? 'pending');
  }, []);

  const handleAccept = useCallback(() => {
    storeCookieConsent('accepted');
    setConsent('accepted');
  }, []);

  const handleDecline = useCallback(() => {
    storeCookieConsent('declined');
    setConsent('declined');
  }, []);

  const content = (
    <>
      {children}
      {consent === 'pending' && (
        <CookieBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );

  if (consent === 'accepted') {
    return (
      <YandexMetricaProvider
        tagID={YANDEX_ID}
        initParameters={{
          clickmap: true,
          trackHash: true,
          webvisor: true,
          accurateTrackBounce: true,
          trackLinks: true,
          ecommerce: 'dataLayer',
        }}
      >
        {content}
      </YandexMetricaProvider>
    );
  }

  return content;
}
