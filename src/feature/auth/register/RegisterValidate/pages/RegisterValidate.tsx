import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./Register.module.css";
import { useRegisterValidate } from "../hooks/useRegister";
import { Button } from "../../../../../shared/components/Button/Button";
import { Link } from "react-router-dom";

export default function RegisterValidate() {

    const { handleSetData, data } = useRegisterValidate();

    return(
        <section className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>

            <div className={styles.imageBackground}></div>

            
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Vamos começar!</h1>
                <p className={styles.description}>Informe seus dados pessoais para criar sua conta.</p>
            </div>

            <form className={styles.formContainer}>
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
                required/>

                <Button icon={ArrowRight} variant="continue">Continuar</Button> 
            </form>

            <div>
                <p>Já tem uma conta? <Link to={"auth/login"}>Faça login</Link> </p>
            </div>
        </section>
    );
}