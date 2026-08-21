import { Menu, PanelLeft, PanelLeftClose, X } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface HeaderProps{
    className?: string,
    isDesktopCollapsed?: boolean,
    setIsDesktopCollapsed?: () => void,
    open: boolean,
    setIsOpen: (value: boolean) => void
}

export default function Header(props:HeaderProps){
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

                {!isDesktop ? <button onClick={() => {props.setIsOpen(!props.open)
                    console.log("Cliquei");
                }} aria-label="Abrir menu" className={styles.iconContainer}>
                    {props.open ? <X className={styles.icon}/> : <Menu className={styles.icon}/>} 
                </button> 
                :   <button aria-label="Abrir menu" className={styles.iconContainer} type="button" onClick={props.setIsDesktopCollapsed}>
                        {props.isDesktopCollapsed ? <PanelLeft className={styles.icon}/> : <PanelLeftClose className={styles.icon}/>}
                    </button>}
            </header>
        </>
    );
}