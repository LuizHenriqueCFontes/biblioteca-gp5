import { Navigate, Outlet} from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./ProtectedRoute.module.css";
import { authStorage } from "../../feature/auth/services/authStorage";
import SidebarDesktop from "../../shared/components/Sidebar/Desktop/SidebarDesktop";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import { useState } from "react";

export default function ProtectedRoute() {

    const isAuthenticated = Boolean(authStorage.getToken());

    {console.log(isAuthenticated)}

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