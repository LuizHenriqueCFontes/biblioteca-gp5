import BookDetails from "../../../feature/books/components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../feature/books/components/BookDetails/InfoBookDetails/InfoBookDetails";
import { useBookDetails } from "../../../feature/user/bookDetails/hooks/useBookDetails";
import { Button } from "../../../shared/components/Button/Button";

export default function SearchBookDetails() {
    const {book, loading} = useBookDetails();

    return (
        <section>
            {loading ? <div>Carregando...</div> : ""}

           {book &&  <BookDetails id={book?.id} coverUrl={book?.coverUrl} title={book?.title} authors={book?.authors} actions={
                <Button variant="primary">
                    Emprestimo
                </Button>
            }/>}

            {/*book && <InfoBookDetails title={book.title} authors={book.authors}/>*/}

        </section>
    );
}