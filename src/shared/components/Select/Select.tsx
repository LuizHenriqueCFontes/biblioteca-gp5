import { Check, ChevronDown } from "lucide-react";
import * as SelectRadix from "@radix-ui/react-select";
import styles from "./Select.module.css";

interface OptionType {
    label?: string,
    value: string
}

interface Select {
    id: string
    value?: string,
    onChangeValue?: (value: string) => void,
    placeholder?: string,
    options?: OptionType[]
}

export default function Select(props: Select) {
   return(
        <SelectRadix.Root value={props.value} onValueChange={props.onChangeValue}>

            <SelectRadix.Trigger className={styles.trigger} id={props.id}>
                <SelectRadix.Value placeholder={props.placeholder}/>
                <SelectRadix.Icon asChild>
                    <ChevronDown className={styles.icon}/>
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
                <SelectRadix.Content className={styles.content}>

                    <SelectRadix.Viewport className={styles.viewport}>
                        {props.options?.map((option) => (
                            <SelectRadix.Item className={styles.item} key={option.value} 
                                value={option.value}>
                                <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>

                                <SelectRadix.ItemIndicator className={styles.itemIndicator} asChild>
                                    <Check />
                                </SelectRadix.ItemIndicator>
                            </SelectRadix.Item>
                        ))}


                    </SelectRadix.Viewport>

                </SelectRadix.Content>

            </SelectRadix.Portal>

        </SelectRadix.Root>
   );
}