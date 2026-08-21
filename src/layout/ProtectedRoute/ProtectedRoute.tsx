import { Navigate, Outlet} from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./ProtectedRoute.module.css";
import { authStorage } from "../../feature/auth/services/authStorage";
import SidebarDesktop from "../../shared/components/Sidebar/Desktop/SidebarDesktop";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import { useState } from "react";
import SidebarMobile from "../../shared/components/Sidebar/Mobile/SidebarMobile";

export default function ProtectedRoute() {

    const isAuthenticated = Boolean(authStorage.getToken());

    {console.log(isAuthenticated)}

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
                    
                    {isAuthenticated
                        ?   <div className={styles.outlet}>
                                <Outlet />
                            </div>
                        : <Navigate to="/auth/login" replace/>
                    }
                </main>
            </div>
        </>
    );
}