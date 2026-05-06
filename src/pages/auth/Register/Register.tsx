import { useState } from "react";
import { Input } from "../../../components/Input/Input";

export default function Register(){
    const [email, setEmail] = useState("");

    return(
        <Input id="5" label="Teste" value={email} onChange={setEmail}/>

    );
}