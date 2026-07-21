import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./ResgisterPassword.module.css";

export default function RegisterPassword() {
    return(
        <section>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>

            <div className={styles.imageBackground}></div>

            
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Crie sua senha</h1>
                <p className={styles.description}>Escolha uma senha segura para proteger sua conta.</p>

                <form>
                    <Input id="password"/>
                </form>
            </div>
        </section>
    );
}