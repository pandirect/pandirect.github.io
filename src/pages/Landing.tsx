import Menu from "@/components/menu/Menu";
import MainSection from "@/pages/landing/MainSection";
import Services from "@/pages/landing/Services";
import About from "@/pages/landing/About";
import Footer from "@/components/footer/Footer";
import Section from "@/components/section/Section";
import styles from "./styles.module.css";
import Main from "@/components/main/Main";

export default function Landing() {
    return (
        <div className={styles.layout}>
            <Menu/>
            <div className={styles.content}>
                <Main>
                    <Section id="main">
                        <MainSection/>
                    </Section>
                    <Section id="services">
                        <Services/>
                    </Section>
                    <Section id="about" style={{maxWidth: '1200px'}}>
                        <About/>
                    </Section>
                    <Section id="contacts">
                        {/*<Contacts/>*/}
                    </Section>
                </Main>
                <Footer/>
            </div>
        </div>
    );
}