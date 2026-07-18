import { LockKeyholeIcon, Mail, User } from "lucide-react";
import { Input } from "../../../../shared/components/Input/Input";
import Logo from "../../../../shared/components/Logo/Logo";
import styles from "./Login.module.css";
import { useLogin } from "../hooks/useLogin";
import { Button } from "../../../../shared/components/Button/Button";
import { handleLogin } from "../action/handleLogin";

export default function Login() {

    const { handleSetLogin, login } = useLogin();

    function onSubmit() {
        
    }

    return(
        <section>
            <div className={styles.logoContainer}>
                <Logo />
            </div>

            <div></div>

            <form onSubmit={=> handleLogin()}>
                <Input id="email"
                label="E-mail"
                icon={Mail}
                required
                value={login.email}
                onChange={(value) => handleSetLogin("email", value)}
                placeholder="seu@email.com"/>

                <Input id="password"
                label="Senha "
                type="password"
                icon={LockKeyholeIcon}
                required
                value={login.password}
                onChange={(value) => handleSetLogin("password", value)}
                placeholder="........"/>

                <div>
                    <Button variant="primary">Entrar</Button>

                    <div>
                        <hr />
                        
                        <p>ou</p>
                        <hr />
                    </div>

                    <Button icon={User} variant="create">Criar uma conta</Button>
                </div>
            </form>
        </section>
    );
}