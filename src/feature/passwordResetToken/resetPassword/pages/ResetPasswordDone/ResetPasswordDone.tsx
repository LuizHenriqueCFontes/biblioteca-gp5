import { Undo2 } from "lucide-react";
import { Button } from "../../../../../shared/components/Button/Button";
import Logo from "../../../../../shared/components/Logo/Logo";
import styles from "./ResetPasswordDone.module.css";
import { Link } from "react-router-dom";

export default function ResetPasswordDone() {
    return(
        <section className={styles.container}>
            <Logo className={styles.logo}/>

            <h1 className={styles.title}>Senha alterada com sucesso!</h1>

            <p className={styles.description}>Sua senha foi atualizada. Agora você já pode acessar sua biblioteca usando sua nova senha.</p>

            <Button variant="primary" icon={Undo2}> <Link className={styles.link} to={"/auth/login"}>Voltar para o login</Link> </Button>
        </section>
    );
}