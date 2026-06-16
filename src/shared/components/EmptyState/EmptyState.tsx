import { BookX } from "lucide-react";

interface EmptyState {
    title: string,
    description: string,
}

export default function EmptyState(props: EmptyState) {
    return(
        <article>
            <BookX />
            <h1>{props.title}</h1>

            <p>{props.description}</p>
        </article>
    );    
}