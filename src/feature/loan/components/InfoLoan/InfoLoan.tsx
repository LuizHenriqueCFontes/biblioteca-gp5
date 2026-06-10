import { CalendarDays } from "lucide-react";

interface InfoLoan {
    loanDate: string,
    expectedReturnDate: string
}

export default function InfoLoan(props: InfoLoan) {

    return(
        <section>
            <div>
                <CalendarDays />
                <p>Emprestado em</p>
                <span>{props.loanDate}</span>
            </div>

            <div>
                <p>Devolver até</p>
                <span>{props.expectedReturnDate}</span>
            </div>
        </section>
    );
}