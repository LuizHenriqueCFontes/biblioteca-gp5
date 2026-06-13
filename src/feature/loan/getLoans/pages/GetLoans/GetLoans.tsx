import { BookOpen, CircleCheck, Clock } from "lucide-react";
import CardStatusLoan from "../../../components/CardStatusLoan/CardStatusLoan";
import { useGetLoans } from "../../hooks/useGetLoans";
import { useState } from "react";
import BookCard from "../../../../books/components/BookCard/BookCard";
import { Button } from "../../../../../shared/components/Button/Button";

export default function GetLoans() {
    const [currentStatus, setCurrentStatus] = useState<"ACTIVE" | "RETURNED">("ACTIVE");

    const { loans, summary, errorLoans } = useGetLoans(currentStatus);

    function handleChange(status: "ACTIVE" | "RETURNED") {
        setCurrentStatus(status);
    }

    return(
        <section>

            {errorLoans && <div>{errorLoans}</div>}

            <BookOpen />
            <div>
                <h1>Meus Empréstimos</h1>
                <p>Acompanhe seus empréstimos e faça a leitura dos seus livros</p>
            </div>

            <div>
                <CardStatusLoan icon={BookOpen} number={summary?.activeLoans} subTitle="Ativos" information="Emprestimos" />
                <CardStatusLoan icon={Clock} number={summary?.nextDueDateInDays} subTitle="Dias para devolver" information="mais urgente" />
                <CardStatusLoan icon={CircleCheck} number={summary?.totalLoans} subTitle="Realizados" information="Totais"/>
            </div>

            <div>
                <button onClick={() => handleChange("ACTIVE")}>Ativos</button>
                <button onClick={() => handleChange("RETURNED")}>Histórico</button>
            </div>

            {loans.map((loan) => (
                <BookCard key={loan.idLoan} id={loan.idLoan} coverUrl={loan.coverUrl} fileUrl={loan.coverUrl} title={loan.title} authors={loan.authors} action={
                    <>
                        <Button variant="primary">Ler agora</Button>
                        <Button variant="secondary">Devolver</Button>
                    </>
                }/>
            ))}
        </section>
    );
}