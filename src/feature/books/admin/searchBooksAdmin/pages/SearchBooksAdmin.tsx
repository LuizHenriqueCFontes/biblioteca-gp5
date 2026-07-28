import BookSearch from "../../../components/BookSearch/BookSearch";
import { useSearchBooks } from "../../../user/searchBooks/hooks/useSearchBooks";
import styles from "./SearchBooksAdmin.module.css";
import KebabMenu from "../../../../../shared/components/KebabMenu/KebabMenu";
import { Pencil, Tag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchBooksAdmin } from "../hooks/useSearchBooksAdmin";
import { handleDeactiveBook } from "../action/handleDeactiveBook";
import { useState } from "react";
import Loading from "../../../../../shared/components/Loading/Loading";
import Pagination from "../../../../../shared/components/Pagination/Pagination";

export default function SearchBooksAdmin() {

    const [findBook, setFindBook] = useState("");
    const [page, setPage] = useState(0);

    const { books, totalElements, loadingBooks, totalPages } = useSearchBooks({idsCategories: [], title: findBook}, {size: 20, page: page});

    const { deleteBook } = useSearchBooksAdmin();

    const navigate = useNavigate();

    function handleGoManageCategories(idBook: string) {
        navigate(`/admin/manage/categories/${idBook}`);
    }

    function handleGoEditBook(idBook: string) {
        navigate(`/admin/edit/book/${idBook}`);
    }

    return(

        <>

            {loadingBooks && <Loading />}

            <BookSearch findBook={findBook} setFindBook={setFindBook} books={books} description="Gerencie os livros do acervo da biblioteca" totalElements={totalElements} action={(books) => (
                <div className={styles.kebabContainer}>
                    
                    <KebabMenu options={[
                        {icon: <Pencil className={styles.itemIcon}/>, label: "Editar informações", onClick: () => handleGoEditBook(`${books.id}`)},

                        {icon: <Tag className={styles.itemIcon}/>, label: "Gerenciar categorias", onClick: () => handleGoManageCategories(`${books.id}`)},

                        {icon: <Trash2 className={`${styles.itemIcon} ${styles.itemIconDelete}`}/>, label: "Excluir", onClick: () => handleDeactiveBook(`${books.id}`, deleteBook), deleteOption: true}
                    ]}/>
                </div>
             )}/>


            <Pagination page={page}
            onPageChange={setPage}
            totalPages={totalPages}
            startsAt={0}/>
        </>
    );
}