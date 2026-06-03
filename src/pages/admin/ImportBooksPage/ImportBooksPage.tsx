import styles from "./ImportBooksPage.module.css";
import { Button } from "../../../shared/components/Button/Button";
import { useImportBooks } from "../../../feature/admin/importBooks/hooks/useImportBooks";
import BookSearch from "../../../shared/components/BookSearch/BookSearch";

export default function ImportBooksPage(){
    const { books, totalElements, loading, /*error, previousPage, nextPage, fetchBooks*/ } = useImportBooks();
    return (
        <BookSearch description="Pesquise e importe livros para a biblioteca e disponibilize para todos os usuários." 
        books={books} totalElements={totalElements} 
        loading={loading}
        showGutendexInfo
        action={
            <>
                <Button className={styles.button} variant="secondary">Detalhes</Button>
                <Button className={styles.button} variant="primary">Importar</Button>
            </>
        }
        />
    );
}