import BookSearch from "../../../components/BookSearch/BookSearch";
import { useSearchBooks } from "../../../user/searchBooks/hooks/useSearchBooks";
import styles from "./SearchBooksAdmin.module.css";
import KebabMenu from "../../../../../shared/components/KebabMenu/KebabMenu";
import { Pencil, Tag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBooksAdmin() {

    const { books, totalElements } = useSearchBooks();

    const navigate = useNavigate();

    function handleGoMangaCategories(idBook: string) {
        navigate(`/admin/manage/categories/${idBook}`);
    }

    return(
        <BookSearch books={books} description="Gerencie os livros do acervo da biblioteca" totalElements={totalElements} action={(books) => (
            <div className={styles.kebabContainer}>
                <KebabMenu options={[
                    {icon: <Pencil className={styles.itemIcon}/>, label: "Editar informações"},

                    {icon: <Tag className={styles.itemIcon}/>, label: "Gerenciar categorias", onClick: () => handleGoMangaCategories(`${books.id}`)},

                    {icon: <Trash2 className={`${styles.itemIcon} ${styles.itemIconDelete}`}/>, label: "Excluir", deleteOption: true}
                ]}/>
            </div>
        )}/>
    );
}