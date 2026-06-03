import { useImportBooksDetails } from "../../../feature/admin/importBooksDetails/hooks/useImportBookDetails";
import BookDetails from "../../../feature/books/components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../feature/books/components/BookDetails/InfoBookDetails/InfoBookDetails";
import { Button } from "../../../shared/components/Button/Button";
import sytles from "./ImportBookDetailPage.module.css"


export default function ImportBookDetailPage(){

    const { book, loading, /*error*/ } = useImportBooksDetails();

    return(
        <section className={sytles.container}>
            {loading ? <div>Carregando</div> : ""}

            {book && <BookDetails id={book.id} coverUrl={book.coverUrl} title={book.title} authors={book.authors} actions={
                <Button className={sytles.import} variant="primary">
                    Importar Livro
                </Button>
            }/>}

            {book && <InfoBookDetails className={sytles.infoBook} title={book.title} description={book.description} /*bookshelves={book.bookshelves.map(name => ({name}))}*/authors={book.authors}/>}
        </section>
    );
}