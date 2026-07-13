import { User } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEditPersonalData } from "../hooks/useEditPersonalData";

export default function EditPersonalData() {

    const { userLoading, userData, handleUserData} = useEditPersonalData();

    return(
        <section>
            {userLoading && <p>Carregando...</p>}

            <form>
                <Input id="username"
                icon={User}
                label="Nome completo" 
                value={userData.username}
                onChange={(value) => handleUserData("username", value)}
                placeholder="Altere o seu nome na plataforma"/>

                
            </form>
        </section>
    );
}