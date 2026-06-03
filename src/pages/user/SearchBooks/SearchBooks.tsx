import { useSearchBooks } from "../../../feature/user/searchBooks/hooks/useSearchBooks";
import BookSearch from "../../../shared/components/BookSearch/BookSearch";
import { Button } from "../../../shared/components/Button/Button";
import styles from "./SearchBooks.module.css";

export default function SearchBooks(){

    const { books, loading, totalElements } = useSearchBooks();
    
    return(
        <BookSearch 
            description="Encontre livros disponíveis e amplie seus conhecimentos"
            books={books}
            totalElements={totalElements}
            loading={loading}
            action={
                <>
                    <Button className={styles.button} variant="secondary">
                        Detalhes
                    </Button>

                    <Button className={styles.button} variant="primary">
                        Emprestimo
                    </Button>
                </>
            }
        />
    );
}