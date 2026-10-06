import { Button } from "../../../../../shared/components/Button/Button";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import { useSendEmail } from "../../hooks/useSendEmail";
import { Mail } from "lucide-react"
import styles from "./FormEmail.module.css";

interface FormEmail {
    onEmailSend: () => void
}

export default function FormEmail(props: FormEmail) {

    const { email, handleSetEmail, requestPasswordReset } = useSendEmail();

    function sendEmail(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        requestPasswordReset(email);

        props.onEmailSend();
    }

    return(
        <section className={styles.container}>
            <div className={styles.detailsContainer}>
                <Logo className={styles.logo}/>

                <h1 className={styles.title}>Redefina sua senha</h1>

                <p className={styles.description}>Insira o endereço de e-mail da sua conta e enviaremos um link para redefinir sua senha.</p>
            </div>

            <form className={styles.inputContainer} onSubmit={(event) => sendEmail(event)}>
                <Input id="email"
                label="Email"
                icon={Mail}
                type="email"
                placeholder="Insira seu e-mail"
                value={email.email}
                onChange={handleSetEmail}
                required/>

                <Button variant="primary">Enviar e-mail</Button>
            </form>
        </section>
    );
} 