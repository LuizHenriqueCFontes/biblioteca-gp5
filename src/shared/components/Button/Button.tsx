import type { LucideIcon } from "lucide-react";
import styles from "./Button.module.css"

interface ButtonProps{
    children: React.ReactNode,
    type?: "button" | "submit",
    onClick?: () => void,
    variant: "primary" | "secondary" | "action" | "dashed" | "loan" | "create" | "continue", 
    className?: string,
    icon?: LucideIcon
}

export function Button(props: ButtonProps){

    const Icon = props.icon;

    return(
        <>
            <button className={`${styles.button} ${styles[props.variant]} ${props.className ?? ""}`} type={props.type} onClick={props.onClick}>

                {Icon && <Icon className={styles.icon}/>}

                <span className={styles.content}>{props.children}</span>
            </button>
        </>
    );
}