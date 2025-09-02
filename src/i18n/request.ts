"use server";

import {getUserLocale} from "@/i18n/index";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: {
      ...(await import(`../../public/locales/${locale}/cases.json`)).default,
    },
  };
});