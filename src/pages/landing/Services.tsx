'use client';

import { useState, useRef, useEffect } from 'react';
import {services} from '@/models/services';
import Button from "@/components/button/Button";
import styles from './styles.module.css';

const Services = () => {
    const [selectedService, setSelectedService] = useState(services[0]);
    const serviceRef = useRef(null);

    const selectService = (index) => {
        setSelectedService(services[index]);
    };

    useEffect(() => {
        if (serviceRef.current) {
            serviceRef.current.classList.remove(styles.fadeIn);
            void serviceRef.current.offsetWidth
            serviceRef.current.classList.add(styles.fadeIn);
        }
    }, [selectedService]);

    return (
        <div>
            <div className={styles.serviceGroups}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceGroups__name}>
                        <Button
                            onClick={() => selectService(index)}
                            variant={selectedService === service ? 'contained' : ''}
                        >
                            {service.group}
                        </Button>
                    </div>
                ))}
            </div>
            <div className={styles.servicesContainer}>
                <div className={styles.service} ref={serviceRef}>
                    <img
                        className={styles.service__image}
                        alt={selectedService.group}
                        title={selectedService.group}
                        src={`/assets/services/${selectedService.image}`}
                    />
                    <div className={styles.service__info}>
                        <p className={styles.service__title}>{selectedService.title}</p>
                        <p className={styles.service__description}>{selectedService.description}</p>
                        <ul className={styles.service__items}>
                            {selectedService.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;