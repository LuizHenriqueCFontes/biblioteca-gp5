import { Menu, X } from "lucide-react";
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

                <Logo />

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