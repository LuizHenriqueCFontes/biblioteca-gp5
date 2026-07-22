import type { LucideIcon } from "lucide-react";
import styles from "./Input.module.css";

interface InputProps{
    id: string,
    label?: string,
    type?: "text" | "password" | "email" | "phone",
    minLength?: number,
    maxLength?: number,
    ariaLabel?: string,
    icon?: LucideIcon,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    required?: boolean,
    className?: string,
}

export function Input(props: InputProps){

    const Icon = props.icon;

    return(
        <div className={styles.inputContainer}>

            {props.label && <label  className={`${styles.label} ${props.required ? styles.required : ""}`} htmlFor={props.id}>{props.label}</label>}

            <div className={styles.inputContainer}>
                {Icon && <Icon className={styles.icon}/>}

                <input minLength={props.minLength} maxLength={props.maxLength} type={props.type} id={props.id} placeholder={props.placeholder} required={props.required} className={`${styles.input} ${props.className ?? ""}`}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
            </div>
        </div>
    );
}