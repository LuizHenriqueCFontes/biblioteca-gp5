import { Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface HeaderProps{
    className?: string
}

export default function Header(props:HeaderProps){
    const [open, setIsOpen] = useState(false);

    return(
        <>
            <header className={`${styles.header} ${props.className ?? ""}`}>

                <button onClick={() => setIsOpen(true)} aria-label="Abrir menu" className={styles.iconContainer}>
                    <Menu className={styles.icon}/>
                </button>
            </header>

            <Sidebar open={open}
            onOpenChange={setIsOpen}/>
        </>
    );
}