import styles from "./Input.module.css";

interface InputProps{
    id: string,
    label: string,
    type?: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void
    required?: boolean
}

export function Input(props: InputProps){

    return(
        <div>
            {props.label && <label  className={styles.label} htmlFor={props.id}>{props.label}</label>}

            <input type={props.type} id={props.id} placeholder={props.placeholder} required={props.required} className={styles.input}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}