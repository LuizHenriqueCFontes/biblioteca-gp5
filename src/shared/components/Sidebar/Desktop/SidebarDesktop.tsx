import SidebarLinks from "../SidebarLinks/SidebarLinks";
import styles from "./SiderbarDesktop.module.css";

export default function SidebarDesktop() {
    return(
        <aside className={styles.sidebar}>
            <SidebarLinks />
        </aside>
    );
}