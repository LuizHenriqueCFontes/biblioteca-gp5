import styles from "./Button.module.css"

interface ButtonProps{
    children: React.ReactNode,
    type?: "button" | "submit",
    onClick?: () => void,
    variant: "primary" | "secondary"
}

export function Button(props: ButtonProps){

    return(
        <button className={`${styles.button} ${styles[props.variant]}`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>

    );
}