import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css"

interface OptionType {
    label: string,
    value: string
}

interface Select {
    id: string
    label?: string,
    options: OptionType[]
}

export default function Select(props: Select) {
   return(
        <div className={styles.orderContainer}>
            {props.label && <label htmlFor={props.id} className={styles.orderLabel}>{props.label}</label>}

            <ChevronDown className={styles.icon}/>

            <select className={styles.selectOrder} name={props.id} id={props.id}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
   );
}