import { BookOpen, BookOpenCheck, Tag, User, UserRound } from "lucide-react";
import CardStatus from "../../../../shared/components/CardStatus/CardStatus";
import { useSearchBooks } from "../../../books/user/searchBooks/hooks/useSearchBooks";
import { useCategory } from "../../../category/hooks/useCategory";
import { useListUsers } from "../../../user/admin/listUsers/hooks/useListUsers";
import { useGetLoans } from "../../../loan/user/getLoans/hooks/useGetLoans";
import { useLoanAdmin } from "../../../loan/admin/hooks/useLoanAdmin";
import Loading from "../../../../shared/components/Loading/Loading";
import { useSearchBooksAdmin } from "../../../books/admin/searchBooksAdmin/hooks/useSearchBooksAdmin";
import BookCard from "../../../books/components/BookCard/BookCard";
import { formatDate } from "../../../../utils/date";
import styles from "./HomeAdmin.module.css";
import { authStorage } from "../../../auth/services/authStorage";
import { formatName } from "../../../../utils/formatName";

export default function HomeAdmin() {
    const { totalElements } = useSearchBooks();
    const { totalCategories } = useCategory();
    const { totalUsers } = useListUsers();
    const { totalLoans } = useGetLoans("ACTIVE");
    const { listDetailsLoan, loadingListDetailsLoan } = useLoanAdmin();
    const { booksRecent, booksRecentLoading } = useSearchBooksAdmin();

    const username = formatName(authStorage.getUsername() ?? "");

    return(
        <section className={styles.container}>
                <h1 className={styles.title}>Olá, {username}! 👋</h1>
            <p className={styles.welcome}>Bem-vindo ao painel administrativo da Biblioteca-GP5.</p>

            <section className={styles.cardContainer}>
                <CardStatus className={styles.card} icon={BookOpen} 
                number={totalElements}
                caption="Livros"
                variant="purple"/>

                <CardStatus className={styles.card} icon={Tag}
                number={totalCategories}
                caption="Categorias"
                variant="orange"/>

                <CardStatus className={styles.card} icon={UserRound}
                number={totalUsers}
                caption="Usuários"
                variant="green"/>

                <CardStatus className={styles.card} icon={BookOpenCheck}
                number={totalLoans}
                caption="Empréstimos ativos"
                variant="blue"/>
            </section>

            <section className={styles.loanSection}>
                <div className={styles.loanTitleContainer}>
                    <h3 className={styles.titlesFeature}>Últimos empréstimos</h3>
                </div>

                {loadingListDetailsLoan && <Loading />}

                {listDetailsLoan.map((loan, index) => (
                    <div key={index} className={styles.containerLoan}>
                        <div className={styles.loanContet}>
                            <div className={styles.photoUser}>
                                <User className={styles.iconUser}/>
                            </div>

                            <div>
                                <p className={styles.username}>{loan.username}</p>
                                <p className={styles.titleLoan}>{loan.title}</p>
                            </div>
                        </div>

                        <div>
                            <p className={styles.loanDate}>{formatDate(loan.loanDate)}</p>
                            <p className={`${styles.loanDate} ${styles.expectedReturnDate}`}>{formatDate(loan.expectedReturnDate)}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className={styles.booksSection}>
                <h3 className={styles.titlesFeature}>Útimos livros adicionados</h3>

                {booksRecentLoading && <Loading />}

                {booksRecent.map((bookRecent, index) => (
                    <BookCard key={index}
                    className={styles.bookCard}
                    coverUrl={bookRecent.coverUrl}
                    title={bookRecent.title}
                    authors={bookRecent.authors}
                    variant="younger"
                    action={<p className={styles.creationDate}>{formatDate(bookRecent.creationDate)}</p>}/>
                ))}
            </section>
        </section>
    );
}