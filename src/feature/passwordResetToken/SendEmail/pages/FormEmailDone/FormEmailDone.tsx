import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./FormEmailDone.module.css";

export default function FormEmailDone() {
    return(
        <section className={styles.container}>
            <Logo className={styles.logo}/>

            <h1 className={styles.title}>Redefina sua senha</h1>

            <p className={styles.description}>Caso a conta exista, foi enviado um link para redefinir sua senha.</p>
        </section>
    );
}