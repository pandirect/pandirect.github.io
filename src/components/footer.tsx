import Link from 'next/link';
import {Linkedin, Send, Youtube} from 'lucide-react';
import {Logo} from '@/components/logo';
import {useTranslations} from "next-intl";

const Footer = () => {
    const t = useTranslations('common');

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Logo/>
                        <p className="mt-4 text-sm text-gray-400">
                            {t(`footer.brand.slogan`)}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20}/>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Send size={20}/>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Youtube size={20}/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">
                            {t(`footer.company.title`)}
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.0')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies"
                                      className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.1')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t('footer.company.items.2')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">
                            {t(`footer.services.title`)}
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t(`footer.services.items.0`)}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t(`footer.services.items.1`)}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t(`footer.services.items.2`)}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t(`footer.services.items.3`)}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {t(`footer.services.items.4`)}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">{t(`footer.contact.title`)}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="mailto:contact@pandirect.com"
                                   className="hover:text-white transition-colors">
                                    {t(`footer.contact.items.0`)}
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                                    {t(`footer.services.items.1`)}
                                </a>
                            </li>
                            <li>
                                {t(`footer.services.items.2`)}
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
