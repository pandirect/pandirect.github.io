'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import styles from './styles.module.css';
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import LogoMobile from "@/components/logo/LogoMobile";

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
    const [activeLink, setActiveLink] = useState<string>(''); // Track active link
    const pathname = usePathname();
    const pathFragment = pathname.split('#')[1] || ''; // Initial URL fragment

    // Derived state for invertColor
    const invertColor = isOpen || isInvert ? 'purple' : 'white';

    // Toggle mobile hamburgerMenu
    const handleMobileMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle link click to update activeLink and URL
    const handleLinkClick = (link: string) => {
        const fragment = link.slice(1); // Remove '/' from '/#about'
        setActiveLink(fragment);
        if (window.location.hash !== `#${fragment}`) {
            window.history.pushState(null, '', `#${fragment}`);
        }
    };

    // Set up IntersectionObserver to detect the most visible section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let mostVisibleSection = null;
                let maxIntersectionRatio = -1;

                // Find the section with the highest intersection ratio
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                        maxIntersectionRatio = entry.intersectionRatio;
                        mostVisibleSection = entry.target.id;
                    }
                });

                // Update activeLink and URL based on the most visible section
                if (mostVisibleSection) {
                    setActiveLink(mostVisibleSection);
                    const newFragment = `#${mostVisibleSection}`;
                    if (window.location.hash !== newFragment) {
                        window.history.pushState(null, '', newFragment);
                    }
                } else if (!window.location.hash) {
                    // Clear activeLink if no section is visible and no URL fragment exists
                    setActiveLink('');
                    window.history.pushState(null, '', pathname);
                }
            },
            {
                root: null, // Use viewport as root
                threshold: 0.5, // Trigger when 50% of the section is visible
                rootMargin: '0px', // No margin
            }
        );

        // Observe sections with IDs matching link fragments
        const observableSections = links.map(({ link }) => {
            const sectionId = link.slice(2); // Remove '/#' from '/#services'
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
            return { sectionId, section };
        });

        // Set initial active link based on URL fragment only if the section exists
        const initialSection = observableSections.find((item) => item.sectionId === pathFragment)?.section;
        if (initialSection) {
            setActiveLink(pathFragment);
        } else {
            setActiveLink(''); // Clear if no matching section
        }

        // Cleanup observer on unmount
        return () => {
            observableSections.forEach(({ section }) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [links, pathFragment, pathname]);

    // Debug logging
    useEffect(() => {
        console.log('Active Link:', activeLink, 'URL Hash:', window.location.hash);
    }, [activeLink]);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${isInvert ? styles.invert : ''}`}>
            <Link href="/" className={styles.sidebar__logo}>
                <Logo />
            </Link>
            <div className={styles.sidebarMobile}>
                <Link href="/">
                    <LogoMobile colorType={invertColor}/>
                </Link>
                <div className={styles.sidebar__hamburger} onClick={handleMobileMenu}>
                    <HamburgerMenu isOpen={isOpen} colorType={invertColor}/>
                </div>
            </div>
            <nav className={styles.sidebar__navigation} onClick={isOpen ? handleMobileMenu : undefined}>
                <ul className={styles.navigation}>
                    {links && Array.isArray(links) ? (
                        links.map((item, index) => (
                            <li key={index} className={styles.navigation__item}>
                                <Link
                                    href={item.link}
                                    onClick={() => handleLinkClick(item.link)}
                                    className={`${styles.navigation__link} ${
                                        activeLink === item.link.slice(2) ? styles.navigation__link_active : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No links provided</li>
                    )}
                </ul>
            </nav>
            <div className={styles.sidebar__contact}>
                <div>Contacts Placeholder</div>
            </div>
        </div>
    );
};

export default Sidebar;