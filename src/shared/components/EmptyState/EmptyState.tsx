import { BookX } from "lucide-react";
import styles from "./EmptyState.module.css";

interface EmptyState {
    title: string,
    description: string,
}

export default function EmptyState(props: EmptyState) {
    return(
        <article className={styles.container}>
            <BookX className={styles.icon}/>

            <h1 className={styles.title}>{props.title}</h1>

            <p className={styles.description}>{props.description}</p>
        </article>
    );    
}