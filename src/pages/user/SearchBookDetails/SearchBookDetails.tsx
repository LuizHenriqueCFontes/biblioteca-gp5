import BookDetails from "../../../feature/books/components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../feature/books/components/BookDetails/InfoBookDetails/InfoBookDetails";
import { useBookDetails } from "../../../feature/user/bookDetails/hooks/useBookDetails";
import { Button } from "../../../shared/components/Button/Button";
import styles from "./SearchBookDetails.module.css";

export default function SearchBookDetails() {
    const {book, loading} = useBookDetails();

    return (
        <section className={styles.container}>
            {loading ? <div>Carregando...</div> : ""}

           {book &&  <BookDetails id={book?.id} coverUrl={book?.coverUrl} title={book?.title} authors={book?.authors} actions={
                <Button className={styles.loan} variant="primary">
                    Emprestimo
                </Button>
            }/>}

            {book && <InfoBookDetails className={styles.infoBook} title={book.title} authors={book.authors} bookshelves={book.categories} description={book.description}/>}

        </section>
    );
}