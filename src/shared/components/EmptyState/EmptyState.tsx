import { BookX, type LucideIcon } from "lucide-react";
import styles from "./EmptyState.module.css";

interface EmptyState {
    icon: LucideIcon
    title: string,
    description: string,
}

export default function EmptyState(props: EmptyState) {
    const Icon = props.icon;

    return(
        <article className={styles.container}>
            <Icon className={styles.icon}/>

            <h1 className={styles.title}>{props.title}</h1>

            <p className={styles.description}>{props.description}</p>
        </article>
    );    
}