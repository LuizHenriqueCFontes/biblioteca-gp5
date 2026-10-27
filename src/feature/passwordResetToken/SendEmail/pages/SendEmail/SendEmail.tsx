import { useState } from "react";
import FormEmail from "../FormEmail/FormEmail";
import FormEmailDone from "../FormEmailDone/FormEmailDone";

export default function SendEmail() {

    const [sendEmail, setSendEmail] = useState(false);

    return(
        <section>
            <title>Recuperação de senha</title>

            {sendEmail ? <FormEmailDone /> : <FormEmail onEmailSend={() => setSendEmail(true)}/>}
        </section>
    );
} 