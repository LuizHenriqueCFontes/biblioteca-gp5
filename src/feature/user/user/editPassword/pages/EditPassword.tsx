import { LockKeyhole, Save } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEditPassword } from "../hooks/useEditPassword";
import { Button } from "../../../../../shared/components/Button/Button";
import { handleEditPassword } from "../actions/handleEditPassword";
import styles from "./EditPassword.module.css";
import { authStorage } from "../../../../auth/services/authStorage";
import { useNavigate } from "react-router-dom";

export default function EditPassword() {

    const { password, handlePasswordData, updatePassword } = useEditPassword();

    function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        handleEditPassword(password, updatePassword);
    }

    const navigate = useNavigate();

    function cancel() {
        const role = authStorage.getRole();

        if (role === "ADMIN") {
            navigate("/admin/home")

        }  else {
            navigate("/");
        }
    }

    return(
        <section className={styles.container}>
            <form onSubmit={(event) => handleOnSubmit(event)} className={styles.formContainer}>
                <Input id="oldPassword"
                icon={LockKeyhole}
                label="Senha atual"
                type="password"
                value={password.oldPassword}
                onChange={(value) => handlePasswordData("oldPassword", value)}
                placeholder="Digite a senha atual..."
                required/>

                <Input id="newPassword"
                icon={LockKeyhole}
                label="Nova senha"
                type="password"
                value={password.newPassword}
                onChange={(value) => handlePasswordData("newPassword", value)}
                placeholder="Digite a nova senha..."
                required/>

                <Input id="confirmPassword"
                icon={LockKeyhole}
                label="Confirmar nova senha"
                type="password"
                value={password.confirmNewPassword}
                onChange={(value) => handlePasswordData("confirmNewPassword", value)}
                placeholder="Confirme a sua nova senha..."
                required/>

                <div>
                    <Button icon={Save} variant="primary">
                        Salvar alterações
                    </Button>

                    <Button onClick={cancel} variant="secondary" type="button">
                        Cancelar
                    </Button>
                </div>
            </form>
        </section>
    );
}