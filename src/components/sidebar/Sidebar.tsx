'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import styles from './styles.module.css';
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import LogoMobile from "@/components/logo/LogoMobile";
import {Contacts} from "@pages/landing";

interface LinkItem {
    link: string;
    label: string;
}

interface SidebarProps {
    links?: LinkItem[];
    isInvert?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ links = [], isInvert = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>('');
    const pathname = usePathname();
    const pathFragment = pathname.split('#')[1] || '';

    const invertColor = isOpen || isInvert ? 'purple' : 'white';

    const handleMobileMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLinkClick = (link: string, isActive: boolean) => {
        if (isActive) {
            return;
        }

        const fragment = link.slice(1);
        setActiveLink(fragment);
        if (window.location.hash !== `${fragment}`) {
            window.history.pushState(null, '', `${fragment}`);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let mostVisibleSection = null;
                let maxIntersectionRatio = -1;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                        maxIntersectionRatio = entry.intersectionRatio;
                        mostVisibleSection = entry.target.id;
                    }
                });

                if (mostVisibleSection) {
                    setActiveLink(mostVisibleSection);
                    const newFragment = `#${mostVisibleSection}`;
                    if (window.location.hash !== newFragment) {
                        window.history.pushState(null, '', newFragment);
                    }
                } else if (!window.location.hash) {
                    setActiveLink('');
                    window.history.pushState(null, '', pathname);
                }
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '0px',
            }
        );

        const observableSections = links.map(({ link }) => {
            const sectionId = link.slice(2);
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
            return { sectionId, section };
        });

        const initialSection = observableSections.find((item) => item.sectionId === pathFragment)?.section;
        if (initialSection) {
            setActiveLink(pathFragment);
        } else {
            setActiveLink('');
        }

        return () => {
            observableSections.forEach(({ section }) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [links, pathFragment, pathname]);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${isInvert ? styles.invert : ''}`}>
            <Link href="/#main" className={styles.sidebar__logo}>
                <Logo />
            </Link>
            <div className={styles.sidebarMobile}>
                <Link href="/#main">
                    <LogoMobile colorType={invertColor}/>
                </Link>
                <div className={styles.sidebar__hamburger} onClick={handleMobileMenu}>
                    <HamburgerMenu isOpen={isOpen} colorType={invertColor}/>
                </div>
            </div>
            <nav className={styles.sidebar__navigation} onClick={isOpen ? handleMobileMenu : undefined}>
                <ul className={styles.navigation}>
                    {links && Array.isArray(links) ? (
                        links.map((item, index) => {
                            const isActive = activeLink === item.link.slice(2);
                            return (
                                <li key={index} className={styles.navigation__item}>
                                    <Link
                                        href={item.link}
                                        onClick={() => handleLinkClick(item.link, isActive)}
                                        className={`${styles.navigation__link} ${
                                            isActive ? styles.navigation__link_active : ''
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })
                    ) : (
                        <li>No links provided</li>
                    )}
                </ul>
            </nav>
            <div className={styles.sidebar__contact}>
                <Contacts/>
            </div>
        </div>
    );
};

export default Sidebar;