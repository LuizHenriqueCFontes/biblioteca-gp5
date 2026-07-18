import { useLocation, useNavigate } from "react-router-dom";
import { useSearchBooks } from "../hooks/useSearchBooks";
import BookSearch from "../../../components/BookSearch/BookSearch";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./SearchBooks.module.css";
import { handleBookLoan } from "../../../actions/loanBookAction";
import { useState } from "react";

export default function SearchBooks(){

    const[findBook, setFindBook] = useState("");

    const navigate = useNavigate();

    const location = useLocation();

    const locationCategories = location.state?.categories || [];

    const { books, loadingBooks, totalElements, bookLoan } = useSearchBooks({title: findBook, idsCategories: locationCategories});

    function handleGoToBookDetails(id: string) {
        navigate(`/book/${id}`)
    }
    
    return(
        <BookSearch 
            description="Encontre livros disponíveis e amplie seus conhecimentos"
            books={books}
            setFindBook={setFindBook}
            findBook={findBook}
            totalElements={totalElements}
            loading={loadingBooks}
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