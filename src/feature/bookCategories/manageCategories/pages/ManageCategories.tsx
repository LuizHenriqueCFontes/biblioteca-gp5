import { BookmarkPlus, FolderOpen, Save, Search } from "lucide-react";
import Breadcrumb from "../../../../shared/components/Breadcrumb/Breadcrumb";
import PageHeader from "../../../../shared/components/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../../books/user/bookDetails/hooks/useBookDetails";
import { Input } from "../../../../shared/components/Input/Input";
import { useEffect, useState } from "react";
import { useCategory } from "../../../category/hooks/useCategory";
import { Button } from "../../../../shared/components/Button/Button";
import EmptyState from "../../../../shared/components/EmptyState/EmptyState";
import { useManageCategories } from "../hooks/useManageCategories";
import { handleUpdateCategories } from "../../action/handleUpdateCategories";

export default function ManageCategories() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const [findCategory, setFindCategory] = useState("");

    const { listCategories, loadingListCategories } = useCategory(findCategory);

    const { editCategory } = useManageCategories();

    const [selectedCategorie, setSelectedCategorie] = useState<string[]>([]);

    useEffect(() => {
        if(!book) return;

        setSelectedCategorie(book.categories.map((category) => category.idCategory))
    }, [book]);

    function handleCategoryChange(checked: boolean, idCategory: string) {
        if(checked) {
            setSelectedCategorie(prev => [
                ...prev,
                idCategory
            ])

        } else{
            setSelectedCategorie(prev => prev.filter(id => id !== idCategory))
        }
    }

    return(
        <section>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},

                {label: "Gerenciar Categorias"}
            ]}/>

            <PageHeader icon={BookmarkPlus} title="Vincular categorias ao livro" description="Selecione as categorias que se aplicam a este livro"/>

            <div>
                {loading && <p>Carregando...</p>}

                <img src={book?.coverUrl} alt="Imagem do livro" />

                <div>
                    <h1>{book?.title}</h1>
                    <p>{book?.authors}</p>
                </div>
            </div>

            <Input ariaLabel="Buscar categoria" 
            id="category" 
            value={findCategory} 
            onChange={setFindCategory}
            placeholder="Buscar categorias..."
            icon={Search}/>

            <div>
                <div>
                    <h3>Categorias</h3>
                    <h3>Livros vinculados</h3>
                </div>

                {loadingListCategories && <p>Carregando</p>}

                {listCategories.length === 0 ? <EmptyState icon={FolderOpen} title="Falha ao encontrar categoria" description="Nenhuma categoria foi encontrada"/> : ""}

                {listCategories.map((listCategorie) => (
                    <div>
                        <input key={listCategorie.idCategory} 
                        type="checkbox" 
                        id={listCategorie.idCategory}
                        checked={selectedCategorie.includes(listCategorie.idCategory)}
                        onChange={(e) => handleCategoryChange(e.target.checked, listCategorie.idCategory)}/>

                        <label htmlFor={listCategorie.idCategory}>
                            <span>{listCategorie.name}</span>
                            <span>{listCategorie.bookCount}</span>
                        </label>
                    </div>
                ))}

                <hr />

                <div>
                    <Button variant="primary" icon={Save} onClick={() => handleUpdateCategories(book.id, selectedCategorie, editCategory)}>
                        Salvar categorias
                    </Button>

                    <Button variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </div>
        </section>
    );
}