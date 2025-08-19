import Link from 'next/link';
import styles from './styles.module.css';

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__item} data-type="phone">
                <Link href="tel:+79023582158">+7 (902) 358-21-58</Link>
            </div>
            <div className={styles.contacts__item} data-type="mail">
                <Link href="mailto:info@pandirect.ru">info@pandirect.ru</Link>
            </div>
        </div>
    );
}