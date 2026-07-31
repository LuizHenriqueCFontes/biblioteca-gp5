import styles from "./BookDetails.module.css";

interface BookDetailsProps {
    id: number | string,
    coverUrl: string,
    fileUrl?: string
    title: string,
    authors: string[],
    actions?: React.ReactNode,
}


export default function BookDetails(props: BookDetailsProps) {
    return(
        <article className={styles.container}>
            <img className={styles.cover} src={props.coverUrl} alt="Capa do livro" />

            <div>
                <div className={styles.infoContainer}>
                    <p className={styles.available}>Disponivel</p>
                    <h1 className={styles.title}>{props.title}</h1>
                    <p className={styles.authors}>{props.authors}</p>
                </div>
                <div className={styles.actionsContainer}>
                    {props.actions}
                </div>
            </div>
        </article>
    );
}