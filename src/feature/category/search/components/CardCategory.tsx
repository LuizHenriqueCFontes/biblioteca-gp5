import { Bookmark } from "lucide-react";

interface CardCategory {
    title: string,
    numberBooks: number,
    action: React.ReactNode
}

export default function CardCategory(props: CardCategory) {
    return(
        <article>
            <Bookmark />

            <div>
                <h2>{props.title}</h2>
                <p>{props.numberBooks} {props.numberBooks >= 1 ? "livro" : "livros"}</p>
            </div>

            <div>
                <p>{props.action}</p>
            </div>
        </article>
    );
}