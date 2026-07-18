import styles from "./ImportBooksPage.module.css";
import { Button } from "../../../../../shared/components/Button/Button";
import { useImportBooks } from "../hooks/useImportBooks";
import BookSearch from "../../../components/BookSearch/BookSearch";
import { useNavigate } from "react-router-dom";
import { handleImportBook } from "../../../actions/importBookAction";
import { useState } from "react";

export default function ImportBooksPage(){
    const { books, totalElements, loading, importBook/*error, previousPage, nextPage, fetchBooks*/ } = useImportBooks();
    const navigate = useNavigate();

    const [findBook, setFindBook] = useState("");

    function handleGoToImportBookDetails(id: string){
        navigate(`/admin/details/${id}`)
    }

    return (
            <>
                <BookSearch description="Pesquise e importe livros para a biblioteca e disponibilize para todos os usuários." 
                findBook={findBook}
                setFindBook={setFindBook}
                books={books} totalElements={totalElements} 
                loading={loading}
                showGutendexInfo
                action={(books) => (
                    <div className={styles.buttonContainer}>
                        <Button className={styles.button} onClick={() => handleGoToImportBookDetails(`${books.id}`)} variant="secondary">Detalhes</Button>

                        <Button className={styles.button} onClick={() => handleImportBook(`${books.id}`, importBook)} variant="primary">Importar</Button>
                    </div>
                )}
                />
            </>
    );
}