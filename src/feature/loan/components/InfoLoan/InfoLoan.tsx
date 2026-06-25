import { CalendarDays } from "lucide-react";
import styles from "./InfoLoan.module.css"

interface InfoLoan {
    loanDate: string,
    expectedReturnDate: string,
    actualReturnDate: string,
    informReturnDate: string,
    variant: "expected" | "returned",
    currentStatus: "ACTIVE" | "RETURNED"
}

export default function InfoLoan(props: InfoLoan) {
    const isActive = props.currentStatus === "ACTIVE";

    return(
        <section className={styles.container}>

            <div className={styles.loanContainer}>

                <div className={styles.iconContainer}>
                    <CalendarDays className={styles.icon}/>
                </div>

                <div>
                    <p className={styles.information}>Emprestado em</p>
                    <span className={`${styles.information} ${styles.loanDate}`}>{props.loanDate}</span>
                </div>
            </div>

            <div className={styles.space}/>

            <div>
                <p className={styles.information}>{props.informReturnDate}</p>
                
                <span className={`${styles.information} ${styles[props.variant] ?? ""}`}>{isActive ? props.expectedReturnDate : props.actualReturnDate}</span>
            </div>
        </section>
    );
}