'use client'

import { useState, useMemo, useRef, useEffect } from 'react';
import IMask from 'imask';
import Button from "@/components/button/Button";
import styles from './styles.module.css';

const About = () => {
    const [values, setValues] = useState({ name: '', phone: '', message: '' });
    const emails = ['info@pandirect.ru', 'pechischev.vladimir@pandirect.ru', 'baev.vsevolod@pandirect.ru'];
    const nameRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            IMask(nameRef.current, { mask: /^[a-zA-Zа-яёА-ЯЁ]+$/i });
        }
        if (phoneRef.current) {
            IMask(phoneRef.current, { mask: '+{7} (000) 000-00-00' });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const body = useMemo(() => {
        return `Телефон: ${values.phone}.\nСообщение: ${values.message}`;
    }, [values.phone, values.message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${emails.join(';')}?subject=Pandirect - ${encodeURIComponent(values.name)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className={styles.about}>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutInfo__title}>Узнайте о нас больше</div>
                <p className={styles.aboutInfo__description}>
                    Не можете сформулировать проблему, которая стоит перед Вашим бизнесом? Мы готовы в этом помочь,
                    оказав бесплатную консультацию и предложив подходящие решения
                </p>
            </div>
            <div className="aboutForm">
                <form onSubmit={handleSubmit}>
                    <div className="form__line">
                        <div className="form__field">
                            <label className="form__label">Как к Вам обращаться?</label>
                            <input
                                type="text"
                                required
                                className="form__input"
                                placeholder="Ваше имя"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                ref={nameRef}
                            />
                        </div>
                        <div className="form__field">
                            <label className="form__label">Телефон</label>
                            <input
                                type="tel"
                                required
                                className="form__input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                                name="phone"
                                value={values.phone}
                                onChange={handleInputChange}
                                ref={phoneRef}
                            />
                        </div>
                    </div>
                    <div className="form__line">
            <textarea
                className="form__textarea"
                required
                placeholder="Введите Ваше сообщение…"
                name="message"
                value={values.message}
                onChange={handleInputChange}
            ></textarea>
                    </div>
                    <div className="aboutForm__submit">
                        <Button variant="outlined" type="submit">
                            Отправить
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default About;