import { BookmarkPlus, Check, FolderOpen, Save, Search } from "lucide-react";
import Breadcrumb from "../../../../shared/components/Breadcrumb/Breadcrumb";
import PageHeader from "../../../../shared/components/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useBookDetails } from "../../../books/user/bookDetails/hooks/useBookDetails";
import { Input } from "../../../../shared/components/Input/Input";
import { useEffect, useState } from "react";
import { useCategory } from "../../../category/hooks/useCategory";
import { Button } from "../../../../shared/components/Button/Button";
import EmptyState from "../../../../shared/components/EmptyState/EmptyState";
import { useManageCategories } from "../hooks/useManageCategories";
import { handleUpdateCategories } from "../../action/handleUpdateCategories";
import styles from "./ManageCategories.module.css";

export default function ManageCategories() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const [findCategory, setFindCategory] = useState("");

    const { listCategories, loadingListCategories } = useCategory(findCategory);

    const { editCategory } = useManageCategories();

    const [selectedCategorie, setSelectedCategorie] = useState<string[]>([]);

    const navigate = useNavigate();

   useEffect(() => {
    if(!book) return;

    setSelectedCategorie(book.categories.map((category) => category.idCategory));
   }, [book])

    function handleCategoryChange(checked: boolean, idCategory: string) {
        if(checked) {
            setSelectedCategorie(prev => [
                ...prev,
                idCategory
            ]);

        } else{
            setSelectedCategorie(prev => prev.filter(id => id !== idCategory))
        }
    }

    function handleCancel() {
        navigate("/admin/search/books")
    }

    return(
        <section className={styles.container}>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},

                {label: "Gerenciar Categorias"}
            ]}/>

            <PageHeader icon={BookmarkPlus} title="Vincular categorias ao livro" description="Selecione as categorias que se aplicam a este livro"/>

            <hr className={styles.divider}/>

            <div className={styles.bookContainer}>
                {loading && <p>Carregando...</p>}

                <img className={styles.cover} src={book?.coverUrl} alt="Imagem do livro" />

                <div className={styles.bookTitleContainer}>
                    <h1 className={styles.bookTitle}>{book?.title}</h1>
                    <p className={styles.bookAuthors}>{book?.authors}</p>
                    <p className={styles.tagBook}>Disponível</p>
                </div>
            </div>

            <Input ariaLabel="Buscar categoria" 
            id="category" 
            value={findCategory} 
            onChange={setFindCategory}
            placeholder="Buscar categorias..."
            icon={Search}/>

            <div className={styles.categoriesContainer}>
                <div className={styles.categoriesTitleContainer}>
                    <h3 className={styles.categoriesTitle}>Categorias</h3>
                    <h3 className={styles.booksCategories}>Livros vinculados</h3>
                </div>

                {loadingListCategories && <p>Carregando...</p>}    

                {listCategories.length === 0 ? <EmptyState icon={FolderOpen} title="Falha ao encontrar categoria" description="Nenhuma categoria foi encontrada"/> : ""}

                {listCategories.map((listCategorie) => (
                    <div key={listCategorie.idCategory} className={styles.categories}>
                        <input className={styles.checkbox}
                        type="checkbox" 
                        id={listCategorie.idCategory}
                        checked={selectedCategorie.includes(listCategorie.idCategory)}
                        onChange={(e) => handleCategoryChange(e.target.checked, listCategorie.idCategory)}/>

                        <label htmlFor={listCategorie.idCategory} className={styles.label}>
                            <div className={styles.customCheckbox}>
                                {selectedCategorie.includes(listCategorie.idCategory) && (
                                    <Check className={styles.iconCheck}/>
                                )}
                            </div>

                            <span className={styles.labelName}>{listCategorie.name}</span>

                            <span className={styles.bookCount}>{listCategorie.bookCount}</span>
                        </label>
                    </div>
                ))}
            </div>

            <hr className={styles.divider}/>

            <div>
                <Button variant="primary" icon={Save} onClick={() => handleUpdateCategories(`${idBook}`, selectedCategorie, editCategory)}>
                    Salvar categorias
                </Button>

                <Button variant="secondary" onClick={handleCancel}>
                    Cancelar
                </Button>
            </div>
        </section>
    );
}