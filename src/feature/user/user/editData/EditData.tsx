import { LockKeyhole, User, UserPen } from "lucide-react";
import PageHeader from "../../../../shared/components/PageHeader/PageHeader";
import { useState } from "react";
import EditPersonalData from "../editPersonalData/pages/EditPersonalData";

export default function EditData() {

    const [currentStatus, setCurrentStatus] = useState<"DATA-PERSONAL" | "PASSWORD">("DATA-PERSONAL");

    return(
        <section>
            <PageHeader icon={UserPen} title="Editar dados pessoais" description="Altere suas informações abaixo e clique em salvar para atualizar seus dados"/>

            <div>
                <button><User /> Dados pessoais</button>
                <button><LockKeyhole /> Alterar Senha</button>
            </div>

            {currentStatus === "DATA-PERSONAL" ? <EditPersonalData /> : ""}
        </section>
    );
}