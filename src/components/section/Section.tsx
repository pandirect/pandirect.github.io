import styles from './styles.module.css';

const Section = ({ children, className = '', ...rest }) => {
    return (
        <section className={`${styles.section} ${className}`} {...rest}>
            {children}
        </section>
    );
};

export default Section;