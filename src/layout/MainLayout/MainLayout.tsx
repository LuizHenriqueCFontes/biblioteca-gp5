import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./MainLayout.module.css";


export default function AdminLayout(){
    return(
        <>
            <Header className={styles.header}/>

            <main className={styles.main}>
                <Outlet />
            </main>
        
        </>
    );
}