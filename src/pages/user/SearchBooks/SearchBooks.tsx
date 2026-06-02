import { useState } from "react";
import { Button } from "../../../shared/components/Button/Button";
import { Input } from "../../../shared/components/Input/Input";
import styles from "./SearchBooks.module.css";
import { SlidersHorizontal } from "lucide-react";

export default function SearchBooks(){
    const [book, setBook] = useState("");
    
    return(
        <section className={styles.container}>

            <div>
                <h1 className={styles.title}>Pesquisar livros</h1>
                <p className={styles.information}>Encontre livros disponíveis e amplie seus conhecimentos</p>
            </div>

            <div className={styles.searchContainer}>

                <form>
                    <Input className={styles.input} id="1" placeholder="Digite o título, autor ou palavra-chave" value={book} onChange={setBook}/>

                    <select name="category" id="category" className={styles.filter}>
                        <option>Todos os tipos</option>
                    </select>

                    
                    <Button variant="primary">
                        Pesquisar
                    </Button>
                </form>
            </div>

            <section className={styles.resultContainer}>

                <div className={styles.containerSearch}>
                    <div>
                        <h2 className={styles.resultTitle}>Resultados da pesquisa</h2>
                        <p className={styles.resultDescription}> resultados encontrados</p>
                    </div>
                    
                    <button className={styles.resultIconContainer}>
                        <SlidersHorizontal className={styles.resultIcon}/>
                    </button>
                </div>
            </section>
        </section>

    );
}