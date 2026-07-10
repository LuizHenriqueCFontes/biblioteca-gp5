import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css"
import * as SelectRadix from "@radix-ui/react-select";
import { useState } from "react";

interface OptionType {
    label: string,
    value: string
}

interface Select {
    id: string
    value?: string,
    onChangeValue?: (value: string) => void,
    placeholder?: string,
    options: OptionType[]
}

export default function Select(props: Select) {
    const [open, setOpen] = useState(false);

   return(
        <SelectRadix.Root value={props.value} onValueChange={props.onChangeValue}>

            <SelectRadix.Trigger>
                <SelectRadix.Value placeholder={props.placeholder}/>
                <SelectRadix.Icon asChild>
                    <ChevronDown />
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            {open && (
                <SelectRadix.Portal>
                    <SelectRadix.Content>

                        <SelectRadix.Viewport>



                        </SelectRadix.Viewport>

                    </SelectRadix.Content>

                </SelectRadix.Portal>
            )}

        </SelectRadix.Root>
   );
}