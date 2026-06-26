import type { LucideIcon } from "lucide-react";
import styles from "./Button.module.css"

interface ButtonProps{
    children: React.ReactNode,
    type?: "button" | "submit",
    onClick?: () => void,
    variant: "primary" | "secondary",
    className?: string,
    icon?: LucideIcon
}

export function Button(props: ButtonProps){

    const Icon = props.icon;

    return(
        <>
            <Icon />

            <button className={`${styles.button} ${styles[props.variant]} ${props.className ?? ""}`} type={props.type} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    );
}