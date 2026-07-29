import { Mail, PhoneCall, Save, User } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEditPersonalData } from "../hooks/useEditPersonalData";
import { Button } from "../../../../../shared/components/Button/Button";
import { handleEditPersonalData } from "../action/handleEditPersonalData";
import styles from "./EditPersonalData.module.css";
import Loading from "../../../../../shared/components/Loading/Loading";
import { authStorage } from "../../../../auth/services/authStorage";
import { useNavigate } from "react-router-dom";

export default function EditPersonalData() {

    const { userLoading, userData, handleUserData, originalUserData, updateUser} = useEditPersonalData();

    function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        handleEditPersonalData(originalUserData, userData, updateUser);
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
            {userLoading ? <Loading /> : 
            
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

                <div className={styles.btnContainer}>
                    <Button className={styles.btn} variant="primary" icon={Save}>
                        Salvar alterações
                    </Button>

                    <Button className={styles.btn} onClick={cancel} type="button" variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </form>}

            
        </section>
    );
}