import type { LucideIcon } from "lucide-react";
import styles from "./Input.module.css";

interface InputProps{
    id: string,
    label?: string,
    type?: string,
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
        <div>
            <Icon />

            {props.label && <label  className={styles.label} htmlFor={props.id}>{props.label}</label>}

            <input type={props.type} id={props.id} placeholder={props.placeholder} required={props.required} className={`${styles.input} ${props.className ?? ""}`}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}