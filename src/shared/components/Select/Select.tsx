import { Check, ChevronDown } from "lucide-react";
import * as SelectRadix from "@radix-ui/react-select";

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
   return(
        <SelectRadix.Root value={props.value} onValueChange={props.onChangeValue}>

            <SelectRadix.Trigger>
                <SelectRadix.Value placeholder={props.placeholder}/>
                <SelectRadix.Icon asChild>
                    <ChevronDown />
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
                <SelectRadix.Content>

                    <SelectRadix.Viewport>
                        {props.options.map((option) => (
                            <SelectRadix.Item value={option.value}>
                                <SelectRadix.ItemText>{option.label}</SelectRadix.ItemText>

                                <SelectRadix.ItemIndicator asChild>
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