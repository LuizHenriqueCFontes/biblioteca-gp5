import { useState } from "react";
import styles from "./InfoBookDetails.module.css";

interface CategoryOption {
    idCategory?: string,
    name?: string
}

interface InfoBookDetails {
    title: string,
    authors: string[],
    bookshelves: CategoryOption[],
    description: string[],
    className?: string
}

export default function InfoBookDetails(props: InfoBookDetails) {
    const [date] = useState<Date>(new Date());

    const localeTimeFormated = date.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"})

    const firstBookshelves = props.bookshelves[0];

    return(
        <>
            <section className={styles.container}>
                <h2 className={styles.titleContainer}>Informações detalhadas</h2>

                <ul className={styles.informationContainer}>

                    <li className={styles.information}>
                        <span className={styles.key}>Titulo</span>
                        <strong className={styles.value}>{props.title}</strong>
                    </li>

                    <li className={styles.information}>
                        <span className={styles.key}>Autor</span>
                        <strong className={styles.value}>{props.authors}</strong>
                    </li>

                    {firstBookshelves && <li className={styles.information}>
                        <span className={styles.key}>Categoria</span>
                        <strong className={styles.value}>{firstBookshelves.name}</strong>
                    </li>}

                    <li className={styles.information}>
                        <span className={styles.key}>Fonte</span>
                        <strong className={styles.value}>Gutendex</strong>
                    </li>

                    <li className={styles.information}>
                        <span className={styles.key}>Data da captura</span>
                        <strong className={styles.value}>{date.toLocaleDateString("pt-BR")} às {localeTimeFormated}</strong>
                    </li>

                </ul>

            </section>

            {props.description && <section className={styles.descriptionContainer}>
                <h2 className={styles.descriptionTitle}>Descrição do livro</h2>
                <p className={styles.description}>{props.description}</p>
            </section>}

            {props.bookshelves.length > 0 && <section className={styles.categoriesContainer}>
                <h2 className={styles.categories}>Categorias relacionadas</h2>
                {props.bookshelves.map((bookshelve) => (
                    <p className={styles.tagCategories} key={bookshelve.idCategory ?? bookshelve.name}>{bookshelve.name}</p>
                ))}
            </section>}
        </>
    );
}