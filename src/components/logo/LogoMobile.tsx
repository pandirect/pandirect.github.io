import styles from './styles.module.css';
import Text from "@/components/logo/assets/Text";

export default function LogoMobile({ colorType }) {
    return (
        <div className={styles.logoMobile}>
            <Text type={colorType}/>
        </div>
    );
}