import { Clock4, LockKeyhole } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import { useResetPassword } from "../../hooks/useResetPassword";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button/Button";
import { executeWithToast } from "../../../../../utils/toast";
import styles from "./ResetPasswordForm.module.css"

export default function ResetPasswordForm() {

    const [ searchParams ] = useSearchParams();

    const token = searchParams.get("token");

    const { passwordData, handleSetPassword, resetPassword } = useResetPassword(token ?? "");

    async function handlePasswordReset(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        executeWithToast(() => resetPassword(passwordData), "Alterando senha...", "Senha Alterada com sucesso!")
    }

    return(
        <section className={styles.container}>
            <Logo className={styles.logo}/>

            <h1 className={styles.title}>Crie uma nova senha</h1>

            <p className={styles.description}>Escolha uma senha segura para acessar sua biblioteca novamente.</p>

            <form className={styles.form} onSubmit={(event) => handlePasswordReset(event)}>
                <div>
                    <Input id="password"
                    label="Nova senha"
                    icon={LockKeyhole}
                    placeholder="Digite sua nova senha"
                    type="password"
                    minLength={8}
                    value={passwordData.password}
                    onChange={(value) => handleSetPassword("password", value)}/>

                    <p className={styles.minimum}>Mínimo de 8 caracteres</p>
                </div>

                <Input id="confirm-password"
                label="Confirmar nova senha"
                type="password"
                icon={LockKeyhole}
                placeholder="Confirme sua nova senha"
                minLength={8}
                value={passwordData.confirmPassword}
                onChange={(value) => handleSetPassword("confirmPassword", value)}/>

                <div className={styles.btnContainer}>
                    <Button type="submit" variant="primary">Salvar nova senha</Button>

                    <div className={styles.linkContainer}>
                        <Clock4 className={styles.icon}/> 
                        
                        <p className={styles.link}> O link de redefinição expira após um período determinado.</p>
                    </div>
                </div>
            </form>
        </section>
    );
}