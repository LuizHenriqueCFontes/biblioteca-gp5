import { ChevronRight, FolderClosed, Save, Tag } from "lucide-react"
import { Input } from "../../../../shared/components/Input/Input";
import { useState } from "react";
import { Button } from "../../../../shared/components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Register.module.css"

export default function RegisterCategory() {
    const [category, setCategory] = useState("");


    return(
        <section>
            <nav>
               <ul className={styles.breadcrumbContainer}>
                    <li> 
                        <Link  className={styles.breadcrumbValue} to="/categories">Categorias</Link>
                    </li>
                
                    <li>
                        <ChevronRight className={styles.breadcrumbIcon}/>
                    </li>

                    <li>
                        <span className={styles.breadcrumbValue}>Nova categoria</span>
                    </li>
                </ul> 
            </nav>

            <div className={styles.titleContainer}>
                <div className={styles.iconContainer}>
                    <FolderClosed className={styles.icon}/>
                </div>

                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>Cadastrar nova categoria</h1>
                    <p className={styles.description}>Preencha as informações abaixo para criar uma nova categoria</p>
                </div>
            </div>

            <hr />

            <form className={styles.inputContainer}>
                <Input className={styles.input} id="category" label="Nome da categoria" type="text" placeholder="Ex.: Ficção, Educação, Ciência..." required value={category} onChange={setCategory}/>

                
                <div className={styles.tagContainer}>
                    <div>
                        <Tag className={styles.iconTag}/>
                    </div>

                    <div>
                        <h3>Organize do seu jeito</h3>
                        <p>Você poderá adicionar itens e organizar sua categoria depois</p>
                    </div>
                </div>
                
                <hr />

                <Button variant="primary">
                    <Save />
                    Salvar categoria
                </Button>

                <Button type="button" variant="secondary">
                    Cancelar
                </Button>
            </form>
        </section>
    );
}