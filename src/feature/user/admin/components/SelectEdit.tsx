import { Check, ChevronDown } from "lucide-react";
import styles from "./SelectEdit.module.css";

interface OptionType {
    value: string,
    label: string
}

interface SelectEdit {
    options?: OptionType[],
    placeholder?: string,
    value: string,
    onChangeValue: (value: string) => void
}

export default function SelectEdit(props: SelectEdit) {
    return(

        <div className={styles.container}>
            <div className={styles.select}>
                <span>{props.value}</span>
                <ChevronDown className={styles.iconChev}/>
            </div>

            <div className={styles.content}>
                {props.options?.map((option) => {
                    const isSelected = props.value === option.value;

                    return (
                        <div className={styles.itemList} onClick={() => props.onChangeValue(option.value)}>
                            <span>{option.label}</span>

                            {isSelected && <Check className={styles.iconCheck}/>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}