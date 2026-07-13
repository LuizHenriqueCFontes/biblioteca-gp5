import { LockKeyhole } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEditPassword } from "../hooks/useEditPassword";

export default function EditPassword() {

    const { password, handlePasswordData } = useEditPassword();

    return(
        <section>
            <Input id="oldPassword"
            icon={LockKeyhole}
            label="Senha atual"
            type="password"
            value={password.oldPassword}
            onChange={(value) => handlePasswordData("oldPassword", value)}
            placeholder="Digite a senha atual..."/>

            <Input id="newPassword"
            icon={LockKeyhole}
            label="Nova senha"
            type="password"
            value={password.newPassword}
            onChange={(value) => handlePasswordData("newPassword", value)}
            placeholder="Digite a nova senha..."/>

            <Input id="confirmPassword"
            icon={LockKeyhole}/>
        </section>
    );
}