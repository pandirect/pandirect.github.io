export const COOKIE_CONSENT_KEY = 'pandirect-cookie-consent';

export type CookieConsentStatus = 'accepted' | 'declined';

export function getStoredCookieConsent(): CookieConsentStatus | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (value === 'accepted' || value === 'declined') {
    return value;
  }

  return null;
}

export function storeCookieConsent(status: CookieConsentStatus): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
}
