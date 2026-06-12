import type { LucideIcon } from "lucide-react";

interface CardStatusLoan {
    icon: LucideIcon,
    number?: number,
    subTitle: string,
    information: string
}

export default function CardStatusLoan(props: CardStatusLoan) {
    
    const Icon = props.icon;

    return(
        <article>
            <Icon />
            <h3>{props.number}</h3>
            <p>{props.subTitle}</p>
            <p>{props.information}</p>
        </article>
    );
}