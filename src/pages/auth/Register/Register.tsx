import styles from "../../../styles/auth/authTheme.module.css";
import Logo from "../../../components/Logo/Logo";
import { Input } from "../../../components/Input/Input";
import { useState } from "react";

export default function Register(){
    const [email, setEmail] = useState("");

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
                        <Input id="email" label="Digite seu email" placeholder="Email@example.com" type="email" value={email} onChange={setEmail} />

                    </form>
                </section>
            </article>
        </main>

    );
}