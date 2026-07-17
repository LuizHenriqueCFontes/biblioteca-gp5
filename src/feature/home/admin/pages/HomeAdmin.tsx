import { BookOpen, BookOpenCheck, Tag, User, UserRound } from "lucide-react";
import CardStatus from "../../../../shared/components/CardStatus/CardStatus";
import { useSearchBooks } from "../../../books/user/searchBooks/hooks/useSearchBooks";
import { useCategory } from "../../../category/hooks/useCategory";
import { useListUsers } from "../../../user/admin/listUsers/hooks/useListUsers";
import { useGetLoans } from "../../../loan/user/getLoans/hooks/useGetLoans";
import { useLoanAdmin } from "../../../loan/admin/hooks/useLoanAdmin";
import Loading from "../../../../shared/components/Loading/Loading";

export default function HomeAdmin() {
    const { totalElements } = useSearchBooks();
    const { totalCategories } = useCategory();
    const { totalUsers } = useListUsers();
    const { totalLoans } = useGetLoans("ACTIVE");
    const { listDetailsLoan, loadingListDetailsLoan } = useLoanAdmin();

    return(
        <section>
            <h1>Olá, variavel! 👋</h1>
            <p>Bem-vindo ao painel administrativo da Biblioteca-GP5.</p>

            <div>
                <CardStatus icon={BookOpen} 
                number={totalElements}
                caption="Livros"
                variant="purple"/>

                <CardStatus icon={Tag}
                number={totalCategories}
                caption="Categorias"
                variant="orange"/>

                <CardStatus icon={UserRound}
                number={totalUsers}
                caption="Usuários"
                variant="green"/>

                <CardStatus icon={BookOpenCheck}
                number={totalLoans}
                caption="Empréstimos ativos"
                variant="blue"/>
            </div>

            <div>
                <h3>Últimos empréstimos</h3>

                {loadingListDetailsLoan && <Loading />}

                {listDetailsLoan.map((loan) => (
                    <div>
                        <div>
                            <User />

                            <div>
                                <p>{loan.username}</p>
                                <p>{loan.title}</p>
                            </div>

                            <div>
                                <p>{loan.loanDate}</p>
                                <p>{loan.expectedReturnDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}