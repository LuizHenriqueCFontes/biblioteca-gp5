import { Navigate, Outlet} from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import styles from "./ProtectedRoute.module.css";
import { authStorage } from "../../feature/auth/services/authStorage";

export default function ProtectedRoute() {

    const isAuthenticated = Boolean(authStorage.getToken());

    {console.log(isAuthenticated)}

    return(
        <>
            <Header className={styles.header}/>

            <main className={styles.main}>
                {isAuthenticated
                    ? <Outlet />

                    : <Navigate to="/auth/login" replace/>
                    
                }
            </main>
        </>
    );
}