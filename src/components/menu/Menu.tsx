import Logo from "@/components/logo/Logo";
import styles from "./styles.module.css";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Logo/>
            <Sidebar/>
        </div>
    )
}