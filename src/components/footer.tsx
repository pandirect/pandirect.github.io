import Link from 'next/link';
import {Logo} from '@/components/logo';
import {useTranslations} from "next-intl";
import { servicesKeys } from "@/lib/constants";

const Footer = () => {
    const t = useTranslations('common');

    const services = servicesKeys.map((key) => ({
        title: t(`services.items.${key}.title`),
    }));

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Logo/>
                        <p className="mt-4 text-sm text-gray-400">
                            {t(`footer.brand.slogan`)}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">
                            {t(`footer.company.title`)}
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.0')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.1')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.2')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">
                            {t(`footer.services`)}
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {(services.map(({ title }, index) => (
                              <li key={index}>
                                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                      {title}
                                  </Link>
                              </li>
                            )))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">{t(`footer.contact.title`)}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-400">
                            <li>
                                <a href={`mailto:${t('footer.contact.mail')}`}
                                   className="hover:text-white transition-colors">
                                    {t(`footer.contact.mail`)}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {t(`footer.copyright`)}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
