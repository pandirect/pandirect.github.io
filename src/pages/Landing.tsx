'use client'

import { useState, useRef, useEffect } from 'react';
import { MainSection, Services, About, Contacts } from "@/pages/landing";
import { Footer } from '@components/footer';
import { Section } from '@components/section';
import { Main } from '@components/main';
import { Sidebar } from '@components/sidebar';
import { links } from '@models/links';
import styles from './styles.module.css';

export default function Landing() {
    const [invert, setInvert] = useState(false);
    const contentRef = useRef(null);
    const mobileSidebarHeight = 96;

    const onScroll = () => {
        if (contentRef.current) {
            const contentElement = contentRef.current;
            const mainBlock = document.getElementById("main");
            const heightOfMainBlock = mainBlock ? mainBlock.clientHeight : 0;
            setInvert(contentElement.scrollTop + mobileSidebarHeight > heightOfMainBlock);

            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const distance = contentElement.scrollTop - section.offsetTop;
                const anchor = section.getAttribute('id');
                if (-30 < distance && distance < 30 && window.location.hash.slice(1) !== anchor) {
                    window.location.hash = `#${anchor}`;
                }
            });
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('scroll', onScroll);
            return () => contentElement.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className={styles.layout}>
            <Sidebar links={links} isInvert={invert} />
            <div className={styles.content} ref={contentRef}>
                <Main>
                    <Section id="main">
                        <MainSection />
                    </Section>
                    <Section id="services">
                        <Services />
                    </Section>
                    <Section id="about" style={{ maxWidth: '1200px' }}>
                        <About />
                    </Section>
                    <Section id="contacts">
                        <Contacts />
                    </Section>
                </Main>
                <Footer />
            </div>
        </div>
    );
}