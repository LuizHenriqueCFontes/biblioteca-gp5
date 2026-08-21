import SidebarLinks from "../SidebarLinks/SidebarLinks";
import styles from "./SiderbarDesktop.module.css";
import { motion } from "framer-motion";

interface SidebarDesktop {
    isCollapsed?: boolean
}

export default function SidebarDesktop(props: SidebarDesktop) {
    return(
        <motion.aside className={`${styles.sidebar} ${props.isCollapsed ? styles.collapsed : ""}`}
        initial={false}
        animate={{width: props.isCollapsed ? 0 : 260,
                 opacity: props.isCollapsed ? 0 : 1
        }}
        transition={{type: "spring", stiffness: 300, damping: 30}}>
            
            <SidebarLinks />
            
        </motion.aside>
    );
}