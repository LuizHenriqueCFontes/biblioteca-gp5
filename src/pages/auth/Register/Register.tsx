import styles from "../../../styles/auth/authTheme.module.css";
import Logo from "../../../shared/components/Logo/Logo";
import { Input } from "../../../shared/components/Input/Input";
import { useState } from "react";
import { Button } from "../../../shared/components/Button/Button";

interface RegisterFormData{
    email: string,
    username: string,
    phone: string
}

export default function Register(){
    const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
        email: "",
        username: "",
        phone: ""
    });

    return(
        <main className={styles.background}>
            <article className={styles.article}>

                <section className={styles.top}>
                    <Logo />
                    <h4>Vamos registrar-se na plataforma</h4>
                    <p>Pedimos que preencha o campo para o cadastro</p>
                </section>

                <section>
                    <form>
                        <Input id="email" label="Digite seu email" placeholder="Email@example.com" type="email" value={registerFormData.email} onChange={(value) => {
                        setRegisterFormData({
                            ...registerFormData,
                            email: value
                            });
                        }} />

                        <Input id="username" label="Digite seu nome completo" placeholder="Digite seu nome" type="text" value={registerFormData.username} onChange={(value) => {
                            setRegisterFormData({
                                ...registerFormData,
                                username: value
                            })
                        }}/>

                        <Input id="phone" label="Digite seu telefone" placeholder="(00) 00000-0000" type="tel" value={registerFormData.phone} onChange={(value) => {
                            setRegisterFormData({
                               ...registerFormData,
                               phone: value 
                            })
                        }}/>

                        <Button variant="primary" type="submit">Continuar</Button>

                        <Button variant="secondary" type="button">Voltar</Button>
                    </form> 
                </section>
            </article>
        </main>

    );
}