import styles from "./ImportBooksPage.module.css";
import { Button } from "../../../shared/components/Button/Button";
import { useImportBooks } from "../../../feature/admin/importBooks/hooks/useImportBooks";
import BookSearch from "../../../feature/books/components/BookSearch/BookSearch";
import { useNavigate } from "react-router-dom";

export default function ImportBooksPage(){
    const { books, totalElements, loading, /*error, previousPage, nextPage, fetchBooks*/ } = useImportBooks();
    const navigate = useNavigate();

    function handleGoToImportBookDetails(id: string){
        navigate(`/admin/details/${id}`)
    }

    return (
        <BookSearch description="Pesquise e importe livros para a biblioteca e disponibilize para todos os usuários." 
        books={books} totalElements={totalElements} 
        loading={loading}
        showGutendexInfo
        action={(books) => (
            <>
                <Button className={styles.button} onClick={() => handleGoToImportBookDetails(`${books.id}`)} variant="secondary">Detalhes</Button>

                <Button className={styles.button} variant="primary">Importar</Button>
            </>
        )}
        />
    );
}