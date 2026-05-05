import { useState } from "react";

interface InputProps{
    type?: string,
    placeholder?: string,
    value: string
    onChange: (value: string) => void
}

export function Input(props: InputProps){
    const [value, setValue] = useState("");

    return(
        <input type={props.type} placeholder={props.placeholder}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
        />  
    );

}