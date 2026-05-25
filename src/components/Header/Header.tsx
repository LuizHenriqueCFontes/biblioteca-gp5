import { Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"

interface HeaderProps{
    className?: string
}

export default function Header(props:HeaderProps){

    return(
        <header className={`${styles.header} ${props.className ?? ""}`}>
            <Logo variant="white"/>

            <button aria-label="Abrir menu" className={styles.iconContainer}>
                <Menu className={styles.icon}/>
            </button>
        </header>
    );
}