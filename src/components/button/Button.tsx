import React from 'react';
import styles from './styles.module.css';

const Button = ({ variant = 'text', disabled = false, type, text, children, onClick }) => {
    return (
        <button
            className={`${styles.button} ${variant === 'contained' ? styles.button_contained : ''} ${
                variant === 'outlined' ? styles.button_outlined : ''
            } ${disabled ? styles.button_disabled : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children || text}
        </button>
    );
};

export default Button;