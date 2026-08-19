import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";
import SidebarMobile from "../Sidebar/Mobile/SidebarMobile";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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

const isDesktop = useMediaQuery("(min-width: 1024px)")

    return(
        <>
            <header className={`${styles.header} ${props.className ?? ""}`}>

                <Logo onClick={handleHome}/>

                {!isDesktop && <button onClick={() => {setIsOpen(!open)
                    console.log("Cliquei");
                }} aria-label="Abrir menu" className={styles.iconContainer}>
                    {open ? <X className={styles.icon}/> : <Menu className={styles.icon}/>} 
                </button>}
            </header>

            <SidebarMobile open={open}
            onOpenChange={setIsOpen}/>
        </>
    );
}