import { useState } from "react";
import FormEmail from "../FormEmail/FormEmail";

export default function SendEmail() {

    const [sendEmail, setSendEmail] = useState(false);

    return(
        <section>
            {sendEmail === false ? <FormEmail /> : <p>Teste</p>}

        </section>
    );
} 