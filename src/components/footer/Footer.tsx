import Logo from "@/components/logo/Logo";
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className={styles.footer__description}>
                Digital-агентство по разработке web-приложений любой сложности
            </div>
            <div className={styles.footer__links}>
                {/*    */}
            </div>
            <div className={styles.footer__copyright}>
                © 2019 - {new Date().getFullYear()} Pandirect. Делаем сайты с{' '}
                <img src="/assets/heart.png" alt="Любовью" title="" />
            </div>
        </footer>
    );
};

export default Footer;