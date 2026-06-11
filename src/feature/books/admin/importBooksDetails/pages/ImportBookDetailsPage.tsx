import { useParams } from "react-router-dom";
import { useImportBooksDetails } from "../hooks/useImportBookDetails";
import BookDetails from "../../../components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../components/BookDetails/InfoBookDetails/InfoBookDetails";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./ImportBookDetailsPage.module.css"
import { handleImportBook } from "../../../actions/importBookAction";
import { useImportBooks } from "../../importBooks/hooks/useImportBooks";


export default function ImportBookDetailPage(){

    const { id } = useParams();

    const { book, loading, /*error*/ } = useImportBooksDetails(id);

    const { importBook } = useImportBooks();


    const normalizedBookshelves = book ? book.bookshelves.map(bookshelve => ({
        name: bookshelve
    }))
    : []


    return(
        <section className={styles.container}>
            {loading ? <div>Carregando</div> : ""}

            {book && <BookDetails id={book.id} coverUrl={book.coverUrl} title={book.title} authors={book.authors} actions={
                <Button className={styles.import} variant="primary" onClick={() => handleImportBook(`${book.id}`, importBook)}>
                    Importar Livro
                </Button>
            }/>}

            {book && <InfoBookDetails className={styles.infoBook} title={book.title} description={book.description} bookshelves={normalizedBookshelves} authors={book.authors}/>}
        </section>
    );
}