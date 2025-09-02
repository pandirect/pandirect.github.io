import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from "@/components/ui/toaster"
import {getLocale, getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

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
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                  rel="stylesheet"/>
        </head>
        <body className="font-body antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        <Toaster/>
        </body>
        </html>
    );
}
