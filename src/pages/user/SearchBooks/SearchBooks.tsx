import { useNavigate } from "react-router-dom";
import { useSearchBooks } from "../../../feature/user/searchBooks/hooks/useSearchBooks";
import BookSearch from "../../../feature/books/components/BookSearch/BookSearch";
import { Button } from "../../../shared/components/Button/Button";
import styles from "./SearchBooks.module.css";

export default function SearchBooks(){

    const navigate = useNavigate();

    const { books, loading, totalElements } = useSearchBooks();

    function handleGoToBookDetails(id: string) {
        navigate(`/book/${id}`)
    }
    
    return(
        <BookSearch 
            description="Encontre livros disponíveis e amplie seus conhecimentos"
            books={books}
            totalElements={totalElements}
            loading={loading}
            action={(books) => (
                 <>
                    <Button onClick={() => handleGoToBookDetails(`${books.id}`)} className={styles.button} variant="secondary">
                        Detalhes
                    </Button>

                    <Button className={styles.button} variant="primary">
                        Emprestimo
                    </Button>
                </>
            )}
        />
    );
}