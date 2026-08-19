import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./MainLayout.module.css";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import SidebarDesktop from "../../shared/components/Sidebar/Desktop/SidebarDesktop";


export default function AdminLayout(){

const isDesktop = useMediaQuery("(min-width: 1024px)")

    return(
        <>
            <div className={styles.mainContainer}>
                {isDesktop && <SidebarDesktop />}

                <main className={styles.main}>
                    <Header className={styles.header}/>
                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                </main>
            </div>
        
        </>
    );
}