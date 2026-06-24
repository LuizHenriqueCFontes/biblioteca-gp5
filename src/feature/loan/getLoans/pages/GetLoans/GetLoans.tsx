import { BookOpen, CircleCheck, Clock } from "lucide-react";
import CardStatusLoan from "../../../components/CardStatusLoan/CardStatusLoan";
import { useGetLoans } from "../../hooks/useGetLoans";
import { useState } from "react";
import BookCard from "../../../../books/components/BookCard/BookCard";
import { Button } from "../../../../../shared/components/Button/Button";
import styles from "./GetLoans.module.css";
import { motion } from "framer-motion";
import InfoLoan from "../../../components/InfoLoan/InfoLoan";
import { formatDate } from "../../../../../utils/date";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";
import { handleBookReturn } from "../../../actions/handleBookReturn";
import { useStartReading } from "../../../../reading/hooks/useStartReading";
import { startReadingAction } from "../../../../reading/actions/startReading";
import { useNavigate } from "react-router-dom";

export default function GetLoans() {
    const [currentStatus, setCurrentStatus] = useState<"ACTIVE" | "RETURNED">("ACTIVE");

    const navigate = useNavigate();

    const { loans, summary, errorLoans, returnLoan } = useGetLoans(currentStatus);

    const { startReading } = useStartReading();

    function handleChange(status: "ACTIVE" | "RETURNED") {
        setCurrentStatus(status);
    }

    async function handleStartReading(idBook: string) {
        await startReadingAction(idBook, startReading);

        navigate(`/reading/${idBook}`);
    }

    function handleContinueReading(idBook: string) {
        navigate(`/reading/${idBook}`);
    }

    const isActive = currentStatus === "ACTIVE";

    return(
        <section>

            {errorLoans && <div>{errorLoans}</div>}

            <div className={styles.titleContainer}>
                <div className={styles.iconContainer}>
                    <BookOpen className={styles.icon}/>
                </div>
                
                <div>
                    <h1 className={styles.title}>Meus Empréstimos</h1>
                    <p className={styles.information}>Acompanhe seus empréstimos e faça a leitura dos seus livros</p>
                </div>
            </div>

            <div className={styles.statusContainer}>
                <CardStatusLoan  variant="active" icon={BookOpen} number={summary?.activeLoans} caption="Ativos" information="Emprestimos" />
                <CardStatusLoan variant="days" icon={Clock} number={summary?.nextDueDateInDays} caption="Dias restantes" information="mais urgente" />
                <CardStatusLoan variant="done" icon={CircleCheck} number={summary?.totalLoans} caption="Realizados" information="Totais"/>
            </div>

            <div className={styles.buttonContainer}>
                <button className={`${styles.buttonFilter} ${isActive ? styles.active : ""}`} onClick={() => handleChange("ACTIVE")}>
                    Ativos
                    
                    {currentStatus === "ACTIVE" && <motion.div layoutId="underline" className={styles.indicator}/>}
                    
                    </button>

                <button className={`${styles.buttonFilter} ${currentStatus === "RETURNED" ? styles.active : ""}`}
                 onClick={() => handleChange("RETURNED")}>
                    Histórico

                    {currentStatus === "RETURNED" && <motion.div layoutId="underline" className={styles.indicator}/>}
                </button>
            </div>

            {loans.length === 0 
                ? <EmptyState title={isActive ? "Nenhum emprestimo encontrado" : "Nenhum histórico encontrado"} 
                description={isActive ? "Você não possui nenhum emprestimo" : "Você não possui nenhum histórico de emprestimos"}/>
                : loans.map((loan) => (
                <div key={loan.idLoan} className={styles.loanContainer}>
                    <BookCard variant={isActive
                        ? "available"
                        : "returned"
                    } tagBook={isActive
                        ? "Disponível"
                        : "Livro"
                    } className={styles.bookContainer} id={loan.idLoan} coverUrl={loan.coverUrl} fileUrl={loan.coverUrl} title={loan.title} authors={loan.authors} action={
                        isActive
                        ? <>
                            <Button className={styles.actionButton} variant="primary" onClick={loan.hasReading 
                                ? () => handleContinueReading(loan.bookId) 
                                : () => handleStartReading(loan.bookId)}>{loan.hasReading ? "Continuar Leitura" : "Iniciar leitura"}</Button>

                            <Button onClick={() => handleBookReturn(loan.idLoan, returnLoan)} className={styles.actionButton} variant="secondary">Devolver</Button>
                        </>

                        : <div className={styles.returnedContainer}>
                            <CircleCheck className={styles.returnedIcon}/>

                            <p className={styles.returnedInformation}>Devolvido</p>
                        </div>
                    }/>

                    <InfoLoan currentStatus={currentStatus} variant={currentStatus === "ACTIVE" ? "expected" : "returned"} informReturnDate={isActive
                    ? "Devolver até"
                    : "Devolvido em"
                    } loanDate={formatDate(loan.loanDate)} expectedReturnDate={formatDate(loan.expectedReturnDate)} actualReturnDate={formatDate(loan.actualReturnDate)}/>
                </div>
                ))
            
            }
            
        </section>
    );
}