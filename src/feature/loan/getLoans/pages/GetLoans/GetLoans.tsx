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

export default function GetLoans() {
    const [currentStatus, setCurrentStatus] = useState<"ACTIVE" | "RETURNED">("ACTIVE");

    const { loans, summary, errorLoans } = useGetLoans(currentStatus);

    function handleChange(status: "ACTIVE" | "RETURNED") {
        setCurrentStatus(status);
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

                <button className={`${styles.buttonFilter} ${currentStatus === "RETURNED" ? styles.active : ""}`} onClick={() => handleChange("RETURNED")}>
                    Histórico

                    {currentStatus === "RETURNED" && <motion.div layoutId="underline" className={styles.indicator}/>}
                </button>
            </div>

            {loans.map((loan) => (
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
                            <Button className={styles.actionButton} variant="primary">Ler agora</Button>
                            <Button className={styles.actionButton} variant="secondary">Devolver</Button>
                        </>

                        : <div className={styles.returnedContainer}>
                            <CircleCheck className={styles.returnedIcon}/>

                            <p className={styles.returnedInformation}>Devolvido</p>
                        </div>
                    }/>

                    <InfoLoan variant={currentStatus === "ACTIVE" ? "expected" : "returned"} informReturnDate={isActive
                    ? "Devolver até"
                    : "Devolvido em"
                    } loanDate={formatDate(loan.loanDate)} expectedReturnDate={formatDate(loan.expectedReturnDate)}/>
                </div>
            ))}
        </section>
    );
}