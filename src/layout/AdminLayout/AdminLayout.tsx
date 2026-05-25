import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./AdminLayout.module.css";


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