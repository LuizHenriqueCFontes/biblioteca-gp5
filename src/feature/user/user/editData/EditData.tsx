import { LockKeyhole, User, UserPen } from "lucide-react";
import PageHeader from "../../../../shared/components/PageHeader/PageHeader";
import { useState } from "react";
import EditPersonalData from "../editPersonalData/pages/EditPersonalData";
import EditPassword from "../editPassword/pages/EditPassword";
import Tabs from "../../../../shared/components/Tabs/Tabs";
import styles from "./EditData.module.css";

export default function EditData() {

    const [currentStatus, setCurrentStatus] = useState("DATA-PERSONAL");

    function handleSetCurrentStatus(status: string) {
        setCurrentStatus(status);
    }

    return(
        <section className={styles.container}>
            <PageHeader icon={UserPen} title="Editar dados pessoais" description="Altere suas informações abaixo e clique em salvar para atualizar seus dados"/>

            <hr className={styles.divider}/>

            <Tabs option={[
                {icon: User, value: "DATA-PERSONAL", label: "Dados pessoais"},

            {icon: LockKeyhole, value: "PASSWORD", label: "Alterar senha"}
            ]}
            activeTab={currentStatus}
            onChange={handleSetCurrentStatus}/>

            {currentStatus === "DATA-PERSONAL" ? <EditPersonalData /> : <EditPassword />}
        </section>
    );
}