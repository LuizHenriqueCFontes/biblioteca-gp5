import { Pencil, Plus, Search, Shapes, Trash2 } from "lucide-react";
import { Button } from "../../../../../shared/components/Button/Button";
import { Input } from "../../../../../shared/components/Input/Input";
import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";
import CardCategory from "../../components/CardCategory";
import styles from "./SearchCategories.module.css"

export default function SearchCategories() {

    const [findCategory, setFindCategory] = useState("");

    const { categories, loadingCategories } = useCategory(findCategory);

    return(
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.informContainer}>
                    <h1 className={styles.title}>Categorias</h1>
                    <p className={styles.description}>Gerencie as categorias de livros da biblioteca.</p>
                </div>

                <Button className={styles.btnCategory} variant="primary" icon={Plus}>Nova categoria</Button>
            </div>

            <div className={styles.inputContainer}>

                <Input id="categorias" icon={Search} ariaLabel="Buscar Categorias" placeholder="Buscar categorias..." value={findCategory} onChange={setFindCategory}/>

                <div className={styles.orderContainer}>
                    <label className={styles.orderLabel}>Ordenar por</label>

                    <select className={styles.selectOrder} name="order" id="order">
                        <option>Nome (A-Z)</option>
                    </select>
                </div>
            </div>

            <div className={styles.categoriesContainer}>
               {categories.length === 0 && <EmptyState  icon={Shapes} title="Nenhuma categoria cadastrada" description="O sistema nao possui categorias cadastradas"/>}

                {loadingCategories 
                    ? <p>Carregando...</p>

                    : categories.map((categorie) => (
                        <CardCategory key={categorie.idCategory}
                            title={categorie.name} numberBooks={categorie.bookCount} action={
                                <>
                                    <button><Pencil /></button>
                                    <button><Trash2 /></button>
                                </>
                            }/>
                    ))}
            </div>
        </section>
    );
}