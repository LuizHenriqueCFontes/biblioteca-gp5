import type { LucideIcon } from "lucide-react";

interface CardStatusLoan {
    icon: LucideIcon,
    title: string,
    information: string

}

export default function CardStatusLoan(props: CardStatusLoan) {
    
    const Icon = props.icon;

    return(
        <article>
            <Icon />
            <h3>{props.title}</h3>
            <p>{props.information}</p>
        </article>
    );
}