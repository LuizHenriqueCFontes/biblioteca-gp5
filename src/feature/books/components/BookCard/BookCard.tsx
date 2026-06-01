import styles from "./BookCard.module.css";

interface BookCardProps{
    id: string,
    coverUrl: string,
    fileUrl?: string,
    title: string,
    authors: string[],
    description?: string[],
    action?: React.ReactNode
}

export default function BookCard(props: BookCardProps){
    return(
        <article className={styles.container}>
            
            <img className={styles.cover} src={props.coverUrl} alt="Imagem do livro" />

            <div className={styles.informationContainer}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.authors}>{props.authors}</p>
                <p className={styles.available}>Disponível</p>
            </div>
            

            <div className={styles.buttonContainer}>
                {props.action}
            </div>
        </article>
    );
}