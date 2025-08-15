import styles from "./styles.module.css"

export default function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#main">Главная</a>
                </li>
                <li className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#services">Услуги</a>
                </li>
                <li className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="/">Кейсы</a>
                </li>
                <li className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#about">О компании</a>
                </li>
            </ul>
        </nav>
    )
}