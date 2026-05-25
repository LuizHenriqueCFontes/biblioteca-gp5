import { useState } from "react";
import { Input } from "../../../components/Input/Input";
import styles from "./ImportBooksPage.module.css";
import { CircleAlert, SlidersHorizontal } from "lucide-react";
import { Button } from "../../../components/Button/Button";

export default function ImportBooksPage(){
    const [book, findBook] = useState("");

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