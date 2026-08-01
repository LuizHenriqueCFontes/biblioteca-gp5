import { BookCopy, Bookmark, BookOpen } from "lucide-react";
import { useCategory } from "../../../category/hooks/useCategory";
import { Button } from "../../../../shared/components/Button/Button";
import { useSearchBooks } from "../../../books/user/searchBooks/hooks/useSearchBooks";
import styles from "./HomeUser.module.css";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react";
import { useHomeUser } from "../hooks/useHomeUser";
import Loading from "../../../../shared/components/Loading/Loading";
import { useEffect } from "react";

export default function HomeUser() {

    const { listCategories, loadingListCategories } = useCategory(undefined, 20);

    const { books, loadingBooks, totalElements } = useSearchBooks(undefined, {page: 0, size: 20});

    const { handleBookSearchCategory, handleBookDetails, handleExploreBooks, handleLoan } = useHomeUser();
 
    const [categoriesRef, categoriesSlider] = useKeenSlider<HTMLDivElement>({
        mode: "free-snap",
        slides: {
            perView: "auto",
            spacing: 12
        },
    });

    useEffect(() => {
        categoriesSlider.current?.update();

    }, [listCategories, categoriesSlider])

    const [booksRef, booksSlider] = useKeenSlider<HTMLDivElement>({
        mode: "free-snap",
        slides: {
            perView: "auto",
            spacing: 12
        }
    });

    useEffect(() => {
        booksSlider.current?.update();

    }, [books, booksSlider])


    return(
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.containerContent}>
                    <span className={styles.tagTitle}>Bem-vindo à sua biblioteca</span>
                    <h1 className={styles.title}>Conhecimento que transforma</h1>
                    <p className={styles.description}>Explore milhares de livros gratuitos, organize suas leituras e descubra novos mundos todos os dias.</p>

                    <div className={styles.btnContainer}>
                        <Button className={styles.btn} type="button" variant="primary" icon={BookOpen} onClick={handleExploreBooks}>Explorar livros</Button>

                        <Button onClick={handleLoan} className={styles.btn} type="button" variant="loan" icon={Bookmark}> Emprestimos</Button>
                    </div>
                </div>
            </div>

            <article className={styles.categoriesContainer}>
                <h3 className={styles.titleCategories}>Categorias</h3>

                <div ref={categoriesRef} className={`${styles.listCategories} keen-slider`}>
                    {loadingListCategories && <Loading />}

                    {listCategories.map((categorie) => (
                        <div key={categorie.idCategory} className={`${styles.categoryCard} keen-slider__slide`} onClick={() => handleBookSearchCategory(categorie.idCategory)}>
                           <div className={styles.containerIcon}>
                               <Bookmark className={styles.iconCategory}/>
                           </div>

                           <span className={styles.nameCategory}>{categorie.name}</span>
                        </div>
                    ))}
                </div>
            </article>

            <article className={styles.booksSection}>
                <h3>Livros sugeridos</h3>

                {loadingBooks && <Loading />}

                <div ref={booksRef} className={`${styles.bookCardContainer} keen-slider`}>
                    {books.map((book) => (
                        <div key={book.id} className={`${styles.bookCard} keen-slider__slide`} onClick={() => handleBookDetails(book.id)}>
                            <img className={styles.cover} src={book.coverUrl} alt="imagem do livro" />

                            <div className={styles.bookInformations}>
                                <h3 className={styles.titleBook}>{book.title}</h3>
                                <p className={styles.authors}>{book.authors}</p>
                                <span className={styles.tagBook}>Disponível</span>
                            </div>
                        </div>
                    ))}
                </div>
            </article>

            <div className={styles.detailsHome}>
                <div className={styles.detailsContainer}>
                    <div className={styles.iconDetailsContainer}>
                        <BookCopy className={styles.iconDetails}/>
                    </div>

                    <div className={styles.detailsInformations}>
                        <h3 className={styles.detailsTitle}>Você sabia?</h3>

                        <p className={styles.detailsDescription}>A biblioteca possui mais de <span className={styles.totalElements}>{totalElements}</span> livros cadastrados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}