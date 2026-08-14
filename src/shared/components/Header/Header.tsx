import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"
import { useState } from "react";
import Sidebar from "../Sidebar/Mobile/SidebarMobile";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";

interface HeaderProps{
    className?: string
}

export default function Header(props:HeaderProps){
    const [open, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const role = authStorage.getRole();

    function handleHome() {
    role === "ADMIN" ? navigate("/admin/home") : navigate("/");
    }

    return(
        <>
            <header className={`${styles.header} ${props.className ?? ""}`}>

                <Logo onClick={handleHome}/>

                <button onClick={() => {setIsOpen(!open)
                    console.log("Cliquei");
                }} aria-label="Abrir menu" className={styles.iconContainer}>
                    {open ? <X className={styles.icon}/> : <Menu className={styles.icon}/>} 
                </button>
            </header>

            <Sidebar open={open}
            onOpenChange={setIsOpen}/>
        </>
    );
}