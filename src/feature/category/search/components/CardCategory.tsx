import type { LucideIcon } from "lucide-react";

interface CardCategory {
    icon?: LucideIcon,
    title: string,
    numberBooks: number,
    action: React.ReactNode
}

export default function CardCategory(props: CardCategory) {

    const Icon = props.icon;

    return(
        <article>
            <Icon />

            <div>
                <h2>{props.title}</h2>
                <p>{props.numberBooks}</p>
            </div>

            <div>
                {props.action}
            </div>
        </article>
    );
}