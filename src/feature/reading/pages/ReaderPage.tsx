import { useParams } from "react-router-dom";
import { useBookDetails } from "../../books/user/bookDetails/hooks/useBookDetails";
import { ReactReader } from "react-reader"
import styles from "./ReaderPage.module.css";

export default function ReaderPage() {
    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    if(loading) {
        return(<p>Carregando...</p>);
    }

    if(!book) {
        return <p>Livro nao encontrado</p>
    }

    return(
        <div className={styles.readerContainer}>
            <ReactReader url={book.fileUrl} location={null} locationChanged={() => {}}/>
        </div>
    );
}