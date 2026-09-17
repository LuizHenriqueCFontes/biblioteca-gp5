import { Input } from "../../../../shared/components/Input/Input";
import Logo from "../../../../shared/components/Logo/Logo";
import { useSendEmail } from "../hooks/useSendEmail";

export default function SendEmail() {

    const { email, handleSetEmail } = useSendEmail();

    return(
        <section>
            <div>
                <Logo />
                <h1>Redefina sua senha</h1>
                <p>Insira o endereço de e-mail da sua conta e enviaremos um link para redefinir sua senha.</p>
            </div>

            <form>
                <Input id="email"
                label="Email"
                type="email"
                placeholder="Insira seu e-mail"
                value={email.email}
                onChange={handleSetEmail}
                required/>
            </form>
        </section>
    );
} 