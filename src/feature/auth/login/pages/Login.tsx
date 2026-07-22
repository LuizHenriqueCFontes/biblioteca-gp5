import { LockKeyholeIcon, Mail, User } from "lucide-react";
import { Input } from "../../../../shared/components/Input/Input";
import Logo from "../../../../shared/components/Logo/Logo";
import styles from "./Login.module.css";
import { useLogin } from "../hooks/useLogin";
import { Button } from "../../../../shared/components/Button/Button";
import { handleLogin } from "../action/handleLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { handleSetLogin, login, loginMutation } = useLogin();

    const navigate = useNavigate();

    async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleLogin(login, loginMutation);

        navigate("/");
    }   

    function handleRegisterPage() {
        navigate("/auth/register");
    }

    return(
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>

            <div className={styles.imageBackground}></div>

            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Bem-vindo de volta!</h1>
                <p className={styles.description}>Faça login para acessar sua conta</p>
            </div>

            <form className={styles.formContainer} onSubmit={(event) => onSubmit(event)}>
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

                <div className={styles.btnContainer}>
                    <Button variant="primary">Entrar</Button>

                    <div className={styles.detailsContainer}>
                        <hr className={styles.divider}/>
                        
                        <p className={styles.details}>ou</p>

                        <hr className={styles.divider}/>
                    </div>

                    <Button type="button" icon={User} variant="create" onClick={handleRegisterPage}>Criar uma conta</Button>
                </div>
            </form>
        </section>
    );
}