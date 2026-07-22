import { ArrowRight, LockKeyhole } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./ResgisterPassword.module.css";
import { useRegisterPassword } from "../hooks/useRegisterPassword";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button/Button";
import { handleRegisterPassword } from "../actions/handleRegisterPassword";

export default function RegisterPassword() {

    const { handleSetRegister, register, registerMutation } = useRegisterPassword();

    const navigate = useNavigate();

    async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleRegisterPassword(register, registerMutation);

        navigate("/");
    }

    return(
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>

            <div className={styles.imageBackground}></div>

            
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Crie sua senha</h1>
                <p className={styles.description}>Escolha uma senha segura para proteger sua conta.</p>
            </div>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <div>
                    <Input id="password"
                    label="Senha"
                    icon={LockKeyhole}
                    placeholder="Digite sua senha"
                    required
                    minLength={8}
                    value={register.password}
                    onChange={(value) => handleSetRegister("password", value)}/>
                    
                    <p className={styles.infoPassword}>Mínimo de 8 caracteres</p>
                </div>

                <Input id="confirmPassword"
                label="Confirmar senha"
                icon={LockKeyhole}
                placeholder="Confirme sua senha"
                required
                minLength={8}
                value={register.confirmPassword}
                onChange={(value) => handleSetRegister("confirmPassword", value)}/>

                <Button icon={ArrowRight} variant="continue">Criar conta</Button>
            </form>

            <div className={styles.informationContainer}>
                <p  className={styles.information}>Já tem uma conta? <Link className={styles.informationLink} to={"/auth/login"}>Faça login</Link> </p>
            </div>
        </section>
    );
}