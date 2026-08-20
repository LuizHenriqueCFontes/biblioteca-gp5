import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./MainLayout.module.css";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import SidebarDesktop from "../../shared/components/Sidebar/Desktop/SidebarDesktop";
import { useState } from "react";


export default function AdminLayout(){

const isDesktop = useMediaQuery("(min-width: 1024px)");

    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

    const toggleDesktopSidebar = () => {
        setIsDesktopCollapsed((prev) => !prev);
    }

    return(
        <>
            <div className={styles.mainContainer}>
                {isDesktop && <SidebarDesktop isCollapsed={isDesktopCollapsed}/>}

                <main className={styles.main}>
                    <Header className={styles.header} isDesktopCollapsed={isDesktopCollapsed} setIsDesktopCollapsed={toggleDesktopSidebar}/>

                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                </main>
            </div>
        
        </>
    );
}