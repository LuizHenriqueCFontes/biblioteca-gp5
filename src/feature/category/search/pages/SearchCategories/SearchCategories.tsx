import { Pencil, Plus, Search, Shapes, Trash2 } from "lucide-react";
import { Button } from "../../../../../shared/components/Button/Button";
import { Input } from "../../../../../shared/components/Input/Input";
import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";
import CardCategory from "../../components/CardCategory";
import styles from "./SearchCategories.module.css"
import Select from "../../../../../shared/components/Select/Select";
import { useNavigate } from "react-router-dom";
import { handleDeleteCategory } from "../../actions/handleDeleteCategory";

export default function SearchCategories() {

    const navigate = useNavigate();

    function handleNewCategory() {
        navigate("/categories/create");
    }

    function handleEditCategory(idCategory: string) {
        navigate(`/categories/edit/${idCategory}`);
    }

    const [findCategory, setFindCategory] = useState("");

    const { categories, loadingCategories, errorCategories, deleteCategory } = useCategory(findCategory);

    {errorCategories ? errorCategories.valueOf : ""}

    return(
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.informContainer}>
                    <h1 className={styles.title}>Categorias</h1>
                    <p className={styles.description}>Gerencie as categorias de livros da biblioteca.</p>
                </div>

                <Button className={styles.btnCategory} variant="primary" icon={Plus} onClick={handleNewCategory}>Nova categoria</Button>
            </div>

            <div className={styles.inputContainer}>

                <form>
                    <Input className={styles.findInput} id="categorias" icon={Search} ariaLabel="Buscar Categorias" placeholder="Buscar categorias..." value={findCategory} onChange={setFindCategory}/>
                </form>

                <Select id="order" options={[{value: "", label: "Nome (A-Z)"}]} label="Ordernar por"/>
            </div>

            <div className={styles.categoriesContainer}>
               {categories.length === 0 && <EmptyState  icon={Shapes} title="Nenhuma categoria cadastrada" description="O sistema nao possui categorias cadastradas"/>}

                {loadingCategories 
                    ? <p>Carregando...</p>

                    : categories.map((categorie) => (
                        <CardCategory  className={styles.categories} key={categorie.idCategory}
                            title={categorie.name} numberBooks={categorie.bookCount} action={
                                <>
                                    <Button variant="action" className={styles.btnEdit} onClick={() => handleEditCategory(categorie.idCategory)}> <Pencil className={`${styles.btnIcon} ${styles.iconEdit}`}/> </Button>

                                    <Button variant="action" className={styles.btnDel} onClick={() => handleDeleteCategory(categorie.idCategory, deleteCategory)}> <Trash2 className={`${styles.btnIcon} ${styles.iconDel}`}/> </Button>
                                </>
                            }/>
                ))}
            </div>
        </section>
    );
}