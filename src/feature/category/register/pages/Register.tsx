import { FolderClosed, Save, Tag } from "lucide-react"
import { Input } from "../../../../shared/components/Input/Input";
import React, { useState } from "react";
import { Button } from "../../../../shared/components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css"
import { useCategory } from "../../hooks/useCategory";
import { handleCreateCategory } from "../actions/handleCreateCategory";
import Breadcrumb from "../../../../shared/components/Breadcrumb/Breadcrumb";

export default function RegisterCategory() {
    const [category, setCategory] = useState("");

    const { createCategory } = useCategory();

    const navigate = useNavigate();

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleCreateCategory(category, createCategory);

        setCategory("");
    }
    
    function handleCancel() {
        navigate("/categories");
    }

    return(
        <section className={styles.mainContainer}>

            <Breadcrumb breadcrumb={[
                {label: "Categorias", to: "/categories"},
                {label: "Nova categoria"}
            ]}/>

            <div className={styles.generalContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.iconContainer}>
                        <FolderClosed className={styles.icon}/>
                    </div>

                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>Cadastrar nova categoria</h1>
                        <p className={styles.description}>Preencha as informações abaixo para criar uma nova categoria</p>
                    </div>
                </div>

                <hr className={styles.divider}/>

                <form className={styles.inputContainer} onSubmit={(event) => handleSubmit(event)}>
                    <Input className={styles.input} id="category" label="Nome da categoria" type="text" placeholder="Ex.: Ficção, Educação, Ciência..." required value={category} onChange={setCategory}/>
                
                    <div className={styles.tagContainer}>
                        <div>
                            <Tag className={styles.iconTag}/>
                        </div>
                        <div>
                            <h3 className={styles.titleTag}>Organize do seu jeito</h3>
                            <p className={styles.infoTag}>Você poderá adicionar itens e organizar sua categoria depois</p>
                        </div>
                    </div>
                
                    <hr className={styles.divider}/>

                    <div className={styles.btnContainer}>
                        <Button variant="primary">
                            <Save />
                            Salvar categoria
                        </Button>
                        
                        <Button type="button" variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}