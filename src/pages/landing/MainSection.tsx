import React from 'react';
import styles from './styles.module.css';

const MainSection = ({...rest}) => {
    return (
        <div className={styles.main} {...rest}>
            <div className={styles.main__text}>
                <p className={styles.main__title}>Digital-агентство «Pandirect»</p>
                <p className={`${styles.main__description} ${styles.main__description_big}`}>
                    Многолетний опыт разработки web-проектов на службе Ваших идей
                </p>
                <p className={`${styles.main__description} ${styles.main__description_small}`}>
                    Индивидуальный подход помогает нам вникнуть в проблемы наших клиентов и сделать хороший
                    продукт, отвечающий всем поставленным требованиям, эффективно и в срок.
                </p>
                {/* <a className={`${styles.navLink} ${styles.button} ${styles.buttonBlue}`} href="#about">
          Создать сайт
        </a> */}
            </div>
            <div className={styles.main__image}>
                <img src="/illustrate.svg" className={styles.illustrate} alt="" title=""/>
            </div>
        </div>
    );
};

export default MainSection;