import { BookCopy, Bookmark, BookOpen } from "lucide-react";
import { useCategory } from "../../category/hooks/useCategory";
import { Button } from "../../../shared/components/Button/Button";
import { useSearchBooks } from "../../books/user/searchBooks/hooks/useSearchBooks";
import BookCard from "../../books/components/BookCard/BookCard";
import styles from "./HomeUser.module.css";

export default function HomeUser() {

    const { listCategories, loadingListCategories } = useCategory(undefined, 6);

    const { books, loadingBooks, totalElements } = useSearchBooks(undefined, undefined, {page: 0, size: 6});

    return(
        <section>
            <div className={styles.titleContainer}>
                <div>
                    <span>Bem-vindo à sua biblioteca</span>
                    <h1>Conhecimento que transforma</h1>
                    <p>Explore milhares de livros gratuitos, organize suas leituras e descubra novos mundos todos os dias.</p>

                    <Button type="button" variant="primary" icon={BookOpen}>Explorar livros</Button>

                    <Button type="button" variant="secondary" icon={Bookmark}>Meus emprestimos</Button>
                </div>
            </div>

            <article>
                <h3>Categorias populares</h3>

                {loadingListCategories ?? <p>Carregando...</p>}

                {listCategories.map((categorie) => (
                    <div>
                       <Bookmark />
                       <span>{categorie.name}</span> 
                    </div>
                ))}
            </article>

            <article>
                <h3>Recomendados para você</h3>

                {loadingBooks ?? <p>Carregando...</p>}

                {books.map((book) => (
                    <BookCard id={book.id}
                    coverUrl={book.coverUrl}
                    title={book.title}
                    authors={book.authors}
                    tagBook="Disponível"
                    variant="available"/>
                ))}
            </article>

            <div>
                <div>
                    <BookCopy />
                </div>

                <div>
                    <h3>Você sabia?</h3>
                    <p>A biblioteca possui mais de <span>{totalElements}</span> livros cadastrados.</p>
                </div>
            </div>
        </section>
    );
}