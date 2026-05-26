import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header/Header";

export default function MainLayout(){
    return(
        <main>
            <Header />
        
            <Outlet />
        </main>
    );
}