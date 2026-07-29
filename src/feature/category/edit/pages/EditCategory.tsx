import { Save, SquarePen } from "lucide-react";
import Breadcrumb from "../../../../shared/components/Breadcrumb/Breadcrumb";
import { Input } from "../../../../shared/components/Input/Input";
import { useState } from "react";
import { Button } from "../../../../shared/components/Button/Button";
import styles from "./EditCategory.module.css";
import { handleEditCategory } from "../actions/handleEditCategory";
import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

export default function EditCategory() {

    const { idCategory } = useParams();

    const [updatedCategory, setUpdatedCategory] = useState("");

    const { editCategory } = useCategory();

    const navigate = useNavigate();

   async function handleOnSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleEditCategory(`${idCategory}`, updatedCategory, editCategory);

        navigate("/categories");
    }

    function handleCancelEdit() {
        navigate("/categories");
    }

    return(
        <section className={styles.mainContainer}>
            <Breadcrumb breadcrumb={[
                {label: "Categorias", to: "/categories"},
                {label: "Editar categorias"}
            ]}/>

            <div className={styles.generalContainer}>

                <div className={styles.titleContainer}>

                    <div className={styles.iconContainer}>
                        <SquarePen className={styles.icon}/>
                    </div>

                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>Editar categoria</h1>
                        <p className={styles.description}>Altere as informações da categoria</p>
                    </div>
                </div>

                <hr className={styles.divider}/>

                <form className={styles.inputContainer} onSubmit={(event) => handleOnSubmit(event)}>
                    <Input className={styles.input} id="category" label="Nome da categoria" value={updatedCategory} onChange={setUpdatedCategory} placeholder="Edite o nome da categoria..." required/>

                    <hr className={styles.divider}/>

                    <div className={styles.btnContainer}>
                        <Button className={styles.btn} variant="primary" type="submit"> 
                            <Save />

                            Salvar alterações
                        </Button>

                        <Button className={styles.btn} variant="secondary" type="button" onClick={handleCancelEdit}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}