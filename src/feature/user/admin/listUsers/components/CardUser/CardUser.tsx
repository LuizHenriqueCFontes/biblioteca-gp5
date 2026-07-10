import { Pencil, User } from "lucide-react";
import KebabMenu from "../../../../../../shared/components/KebabMenu/KebabMenu";
import styles from "./CardUser.module.css";
import { useState } from "react";
import SelectEdit from "../../../components/SelectEdit";
import { Button } from "../../../../../../shared/components/Button/Button";

interface CardUser {
    name: string,
    email: string,
    role: string
}

export default function CardUser(props: CardUser) {

    const [isEditing, setIsEditing] = useState(false);
    const [role, setRole] = useState("");
    const [tempRole, setTempRole] = useState(props.role);

    function handleCancel() {
        setRole(props.role)
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return(
        <article className={styles.cardContainer}>
            <div className={styles.photoUser}>
                <User className={styles.iconUser}/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.name}>{props.name}</h3>
                <p className={styles.email}>{props.email}</p>
                
                {isEditing 
                ?   <div>
                        <SelectEdit 
                        value={tempRole} 
                        onChangeValue={setTempRole}
                        placeholder="Edite as permissões do usuário"
                        options={[
                            {value: "USER", label: "Usuário"},
                            {value: "ADMIN", label: "ADMINISTRADOR"}
                        ]}/>

                        <div>
                            <Button variant="primary">Salvar</Button>
                            <Button variant="secondary" onClick={() => handleCancel()} className={styles.btnCancel}>Cancelar</Button>
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