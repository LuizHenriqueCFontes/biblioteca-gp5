import { useParams } from "react-router-dom";
import BookDetails from "../../../components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../components/BookDetails/InfoBookDetails/InfoBookDetails";
import { useBookDetails } from "../hooks/useBookDetails";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./SearchBookDetails.module.css";
import { useSearchBooks } from "../../searchBooks/hooks/useSearchBooks";
import { handleBookLoan } from "../../../actions/loanBookAction";

export default function SearchBookDetails() {
    const { id } = useParams();

    const {book, loading} = useBookDetails(id);

    const { bookLoan } = useSearchBooks();

    return (
        <section className={styles.container}>
            {loading ? <div>Carregando...</div> : ""}

           {book &&  <BookDetails id={book?.id} coverUrl={book?.coverUrl} title={book?.title} authors={book?.authors} actions={
                <Button onClick={() => handleBookLoan(book.id, bookLoan)} className={styles.loan} variant="primary">
                    Emprestimo
                </Button>
            }/>}

            {book && <InfoBookDetails className={styles.infoBook} title={book.title} authors={book.authors} bookshelves={book.categories} description={book.description}/>}

        </section>
    );
}