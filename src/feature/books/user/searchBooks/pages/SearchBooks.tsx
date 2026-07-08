import { useNavigate } from "react-router-dom";
import { useSearchBooks } from "../hooks/useSearchBooks";
import BookSearch from "../../../components/BookSearch/BookSearch";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./SearchBooks.module.css";
import { handleBookLoan } from "../../../actions/loanBookAction";

export default function SearchBooks(){

    const navigate = useNavigate();

    const { books, loading, totalElements, bookLoan } = useSearchBooks();

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
                 <div className={styles.buttonContainer}>
                    <Button onClick={() => handleGoToBookDetails(`${books.id}`)} className={styles.button} variant="secondary">
                        Detalhes
                    </Button>

                    <Button onClick={() => handleBookLoan(`${books.id}`, bookLoan)} className={styles.button} variant="primary">
                        Emprestimo
                    </Button>
                </div>
            )}
        />
    );
}