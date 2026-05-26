import { useState } from "react";
import { Input } from "../../../../shared/components/Input/Input";
import styles from "./ImportBooksPage.module.css";
import { CircleAlert, SlidersHorizontal } from "lucide-react";
import { Button } from "../../../../shared/components/Button/Button";
import { useImportBooks } from "../../../../feature/importBooks/hooks/useImportBooks";
import BookCard from "../../../../feature/books/components/BookCard/BookCard";

export default function ImportBooksPage(){
    const [book, findBook] = useState("");

    const { books, loading, error, previousPage, nextPage, fetchBooks } = useImportBooks();

    return(
        <section className={styles.container}>

            <div>
                <h1 className={styles.title}>Pesquisar livros</h1>
                <p className={styles.information}>Pesquise e importe livros para a biblioteca e disponibilize para todos os usuários.</p>
            </div>

            <div className={styles.searchContainer}>

                <form>
                    <Input className={styles.input} id="1" placeholder="Digite o título, autor ou palavra-chave" value={book} onChange={findBook}/>

                    <select name="category" id="category" className={styles.filter}>
                        <option>Todos os tipos</option>
                    </select>

                    
                    <Button variant="primary">
                        Pesquisar
                    </Button>
                </form>

                <div className={styles.alert}>
                    <CircleAlert className={styles.alertIcon}/>
                    <p className={styles.alertDescription}>Buscamos livros na base do Gutendex</p>
                </div>
            </div>

            <section className={styles.resultContainer}>
                <div>
                    <h2 className={styles.resultTitle}>Resultados da pesquisa</h2>
                    <p></p>
                </div>

                <button className={styles.resultIconContainer}>
                    <SlidersHorizontal className={styles.resultIcon}/>
                </button>

                  
            </section>
        </section>

    );
}