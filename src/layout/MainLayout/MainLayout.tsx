import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./MainLayout.module.css";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import SidebarDesktop from "../../shared/components/Sidebar/Desktop/SidebarDesktop";
import { useState } from "react";
import SidebarMobile from "../../shared/components/Sidebar/Mobile/SidebarMobile";


export default function AdminLayout(){

    const isDesktop = useMediaQuery("(min-width: 1024px)");

    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

    const toggleDesktopSidebar = () => {
        setIsDesktopCollapsed((prev) => !prev);
    }

    const [open, setIsOpen] = useState(false);

    const toggleMobileSidebar = () => {
        setIsOpen((prev) => (!prev));
    }

    return(
        <>
            <div className={styles.mainContainer}>
                {isDesktop ? <SidebarDesktop isCollapsed={isDesktopCollapsed}/> : <SidebarMobile open={open}
                onOpenChange={setIsOpen}/>}

                <main className={styles.main}>
                    <Header className={styles.header} isDesktopCollapsed={isDesktopCollapsed} setIsDesktopCollapsed={toggleDesktopSidebar} open={open} setIsOpen={toggleMobileSidebar}/>

                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                </main>
            </div>
        
        </>
    );
}