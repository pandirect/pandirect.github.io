import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { MetrikaCounter } from "react-metrika";
import { YANDEX_ID } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Pandirect',
  description: 'We develop mobile and web applications for business growth.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"/>
        <link rel="preload" href="https://mc.yandex.ru/metrika/tag.js" as="script"/>
      </head>
      <body className="font-body antialiased">
      {children}
      <Toaster/>
      <MetrikaCounter
        id={YANDEX_ID}
        options={{
          clickmap: true,
          trackHash: true,
          webvisor: true,
          accurateTrackBounce: true,
          trackLinks: true,
          ecommerce: "dataLayer",
        }}
      />
      </body>
      </html>
    </NextIntlClientProvider>
  );
}
