import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = 'ru';

  return {
    locale,
    messages: {
      ...(await import(`../../public/locales/${locale}/cases.json`)).default,
      ...(await import(`../../public/locales/${locale}/common.json`)).default,
    },
  };
});