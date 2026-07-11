import { Pencil, User } from "lucide-react";
import KebabMenu from "../../../../../../shared/components/KebabMenu/KebabMenu";
import styles from "./CardUser.module.css";
import { useState } from "react";
import SelectEdit from "../../../components/SelectEdit";
import { useListUsers } from "../../hooks/useListUsers";
import { handleUpdateRole } from "../../actions/handleUpdateRole";
import type { UpdateRoleRequestMutation } from "../../types/updateRoleRequestMutation";
import { Button } from "../../../../../../shared/components/Button/Button";

interface CardUser {
    id: string,
    name: string,
    email: string,
    role: string
}

export default function CardUser(props: CardUser) {

    const [isEditing, setIsEditing] = useState(false);
    const [role, setRole] = useState(props.role);

    const { updateRole } = useListUsers();

    function handleCancel() {
        setRole(props.role)
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    async function handleIntermediaryFunctionSend(id: string, role: string, updateRole: (request: UpdateRoleRequestMutation) => Promise<void>) {
         setRole(role);

        const update = await handleUpdateRole(id, role, updateRole);

        if(update) {
            setIsEditing(false);
        }
    }

    return(
        <article className={`${styles.cardContainer} ${isEditing && styles.cardEditContainer}`}>
            <div className={`${styles.photoUser} ${isEditing && styles.photoEdit}`}>
                <User className={`${styles.iconUser} ${isEditing && styles.iconUserEdit}`}/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.name}>{props.name}</h3>
                <p className={styles.email}>{props.email}</p>
                
                {isEditing 
                ?   <div className={styles.selectContainer}>
                        <SelectEdit 
                        value={role} 
                        onChangeValue={setRole}
                        placeholder="Edite as permissões do usuário"
                        options={[
                            {value: "USER", label: "Usuário"},
                            {value: "ADMIN", label: "Administrador"}
                        ]}/>

                        <div className={styles.btnContainer}>
                            <Button className={styles.btn} variant="primary" onClick={() => handleIntermediaryFunctionSend(props.id, role, updateRole)}>Salvar</Button>

                            <Button variant="secondary" onClick={() => handleCancel()} className={styles.btn}>Cancelar</Button>
                        </div>
                    </div> 
                    
                : <span className={styles.role}>{props.role}</span> }
            </div>

            {!isEditing && <div className={styles.kebab}>
                                <KebabMenu variant="editUser" options={[
                                    {icon: <Pencil />, label: "Alterar", onClick: () => handleEdit()}
                                ]}/>
                            </div>
            }
        </article>
    );  
}