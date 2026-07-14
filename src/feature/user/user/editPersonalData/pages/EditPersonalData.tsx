import { Mail, PhoneCall, Save, User } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEditPersonalData } from "../hooks/useEditPersonalData";
import { Button } from "../../../../../shared/components/Button/Button";
import { handleEditPersonalData } from "../action/handleEditPersonalData";
import styles from "./EditPersonalData.module.css";

export default function EditPersonalData() {

    const { userLoading, userData, handleUserData, originalUserData, updateUser} = useEditPersonalData();

    function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        handleEditPersonalData(originalUserData, userData, updateUser);
    }

    return(
        <section className={styles.container}>
            {userLoading ? <p>Carregando...</p> : 
            
            <form onSubmit={handleOnSubmit} className={styles.formContainer}>
                <Input id="username"
                icon={User}
                label="Nome completo" 
                value={userData.username}
                onChange={(value) => handleUserData("username", value)}
                placeholder="Altere o seu nome na plataforma..."/>

                <Input id="email"
                type="email"
                icon={Mail}
                label="E-mail"
                value={userData.email}
                onChange={(value) => handleUserData("email", value)}
                placeholder="Atualize seu email..."/>

                <Input id="phone"
                icon={PhoneCall}
                type="phone"
                label="Telefone"
                value={userData.phone}
                onChange={(value) => handleUserData("phone", value)}
                placeholder="Atualize seu telefone..."/>

                <div>
                    <Button variant="primary" icon={Save}>
                        Salvar alterações
                    </Button>

                    <Button type="button" variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </form>}

            
        </section>
    );
}