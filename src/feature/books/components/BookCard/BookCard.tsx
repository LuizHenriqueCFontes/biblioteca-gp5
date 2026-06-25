import styles from "./BookCard.module.css";

interface BookCardProps{
    id: number | string,
    coverUrl: string,
    fileUrl?: string,
    title: string,
    authors: string[],
    action?: React.ReactNode,
    className?: string,
    variant: "available" | "returned",
    tagBook: string
}

export default function BookCard(props: BookCardProps){
    return(
        <article className={`${styles.container} ${props.className ?? ""}`}>
            
            <img className={styles.cover} src={props.coverUrl} alt="Imagem do livro" />

            <div className={styles.informationContainer}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.authors}>{props.authors}</p>
                <p className={`${styles.tagBook} ${styles[props.variant]}`}>{props.tagBook}</p>
            </div>
            

            <div className={styles.buttonContainer}>
                {props.action}
            </div>
        </article>
    );
}