import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./RegisterValidate.module.css";
import { useRegisterValidate } from "../hooks/useRegister";
import { Button } from "../../../../../shared/components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { handleRegisterValidate } from "../action/handleRegisterValidate";

export default function RegisterValidate() {

    const { handleSetData, data, registerValidate } = useRegisterValidate();

    const navigate = useNavigate();

    async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleRegisterValidate(data, registerValidate);

        navigate("/auth/register/password");
    }

    return(
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>

            <div className={styles.generalContainer}>
                <div className={styles.imageBackground}></div>
                
                <div className={styles.contentContainer}>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.title}>Vamos começar!</h1>
                        <p className={styles.description}>Informe seus dados pessoais para criar sua conta.</p>
                    </div>
                    <form className={styles.formContainer} onSubmit={(value) => onSubmit(value)}>
                        <Input id="username"
                        label="Nome completo"
                        icon={User}
                        value={data.username}
                        onChange={(value) => handleSetData("username", value)}
                        placeholder="Digite seu nome completo"
                        required/>
                        <Input id="email"
                        label="E-mail"
                        icon={Mail}
                        value={data.email}
                        onChange={(value) => handleSetData("email", value)}
                        placeholder="Digite seu e-mail"
                        required/>
                        <Input id="phone"
                        label="Telefone"
                        icon={Phone}
                        value={data.phone}
                        onChange={(value) => handleSetData("phone", value)}
                        placeholder="(00) 00000-0000"
                        required
                        maxLength={15}/>
                        <Button icon={ArrowRight} variant="continue">Continuar</Button>
                    </form>
                    <div className={styles.informationContainer}>
                        <p  className={styles.information}>Já tem uma conta? <Link className={styles.informationLink} to={"/auth/login"}>Faça login</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    );
}