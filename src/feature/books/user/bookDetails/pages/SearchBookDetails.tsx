import { useNavigate, useParams } from "react-router-dom";
import BookDetails from "../../../components/BookDetails/Book/BookDetails";
import InfoBookDetails from "../../../components/BookDetails/InfoBookDetails/InfoBookDetails";
import { useBookDetails } from "../hooks/useBookDetails";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./SearchBookDetails.module.css";
import { useSearchBooks } from "../../searchBooks/hooks/useSearchBooks";
import { handleBookLoan } from "../../../actions/loanBookAction";
import Loading from "../../../../../shared/components/Loading/Loading";
import Breadcrumb from "../../../../../shared/components/Breadcrumb/Breadcrumb";
import type { BookLoanResponseDTO } from "../../../../loan/user/types/bookLoanResponseDTO";
import { authStorage } from "../../../../auth/services/authStorage";

export default function SearchBookDetails() {
    const { id } = useParams();

    const {book, loading} = useBookDetails(id);

    const { bookLoan } = useSearchBooks();

    const token = authStorage.getToken();

    const navigate = useNavigate();

    function verifyHandleBookLoan(idBook: string, bookLoan: (id: string) => Promise<BookLoanResponseDTO>) {
        if(!token) {
            navigate("/auth/login");
            return;
        }

        handleBookLoan(idBook, bookLoan);
    }

    return (
        <section className={styles.container}>
            {loading ? <Loading /> : ""}

            <Breadcrumb breadcrumb={[
                {label: "Pesquisar livros", to: "/search/books"},
                
                {label: "Detalhes do livro"}
            ]}/>

           {book &&  <BookDetails id={book?.id} coverUrl={book?.coverUrl} title={book?.title} authors={book?.authors} actions={
                <Button onClick={() => verifyHandleBookLoan(book.id, bookLoan)} className={styles.loan} variant="primary">
                    Emprestimo
                </Button>
            }/>}

            {book && <InfoBookDetails className={styles.infoBook} title={book.title} authors={book.authors} bookshelves={book.categories} description={book.description}/>}

        </section>
    );
}