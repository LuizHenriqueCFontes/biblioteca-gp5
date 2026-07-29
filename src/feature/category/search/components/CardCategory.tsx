import { Bookmark } from "lucide-react";
import styles from "./CardCategory.module.css";

interface CardCategory {
    title: string,
    numberBooks: number,
    action: React.ReactNode,
    className?: string
}

export default function CardCategory(props: CardCategory) {
    return(
        <article className={`${styles.cardContainer} ${props.className ?? ""}`}>

            <div className={styles.iconContainer}>
                <Bookmark className={styles.icon}/>
            </div>

            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.numberBooks}>{props.numberBooks} {props.numberBooks <= 1 ? "livro" : "livros"}</p>
            </div>

            <div className={styles.actionContainer}>
                {props.action}
            </div>
        </article>
    );
}