import Image from "next/image";
import styles from "./styles.module.css";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={133} height={31}  />
        </div>
    );
}