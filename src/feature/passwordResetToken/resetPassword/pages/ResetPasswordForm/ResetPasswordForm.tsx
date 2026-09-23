import { Clock4, LockKeyhole } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import Logo from "../../../../../shared/components/Logo/Logo";
import { useResetPassword } from "../../hooks/useResetPassword";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button/Button";

export default function ResetPasswordForm() {

    const [ searchParams ] = useSearchParams();

    const token = searchParams.get("token");

    const { passwordData, handleSetPassword } = useResetPassword(token ?? "");

    return(
        <section>
            <Logo />

            <p>Escolha uma senha segura para acessar sua biblioteca novamente.</p>

            <form>
                <div>
                    <Input id="password"
                    label="Nova senha"
                    icon={LockKeyhole}
                    placeholder="Digite sua nova senha"
                    value={passwordData.password}
                    onChange={(value) => handleSetPassword("password", value)}/>

                    <p>Mínimo de 8 caracteres</p>
                </div>

                <Input id="confirm-password"
                label="Confirmar nova senha"
                icon={LockKeyhole}
                placeholder="Confirme sua nova senha"
                value={passwordData.confirmPassword}
                onChange={(value) => handleSetPassword("confirmPassword", value)}/>

                <div>
                    <Button type="button" variant="primary">Salvar nova senha</Button>

                    <p><Clock4 /> O link de redefinição expira após um período determinado.</p>
                </div>
            </form>
        </section>
    );
}