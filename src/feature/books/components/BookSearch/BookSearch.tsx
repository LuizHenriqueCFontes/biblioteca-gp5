import { CircleAlert, Search } from "lucide-react";
import { Button } from "../../../../shared/components/Button/Button";
import { Input } from "../../../../shared/components/Input/Input";
import styles from "./BookSearch.module.css"
import BookCard from "../BookCard/BookCard";
import Loading from "../../../../shared/components/Loading/Loading";
import Select from "../../../../shared/components/Select/Select";
import { useCategory } from "../../../category/hooks/useCategory";
import { authStorage } from "../../../auth/services/authStorage";

interface BookCardItem {
    id: number | string,
    title: string,
    authors: string[],
    coverUrl: string,
    fileUrl: string,
}

interface BookSearchProps {
    description: string,
    books: BookCardItem[],
    totalElements: number,
    loading?: boolean,
    showGutendexInfo?: boolean,
    findBook: string,
    setFindBook: (book: string) => void,
    category: string,
    setCategory: (value: string) => void
    action?: (book: BookCardItem) => React.ReactNode
}

export default function BookSearch(props: BookSearchProps){

    const { listCategories } = useCategory();

    const role = authStorage.getRole();

    return (
        <section className={styles.container}>

            <div>
                <h1 className={styles.title}>Pesquisar livros</h1>
                <p className={styles.information}>{props.description}</p>
            </div>

            <div className={styles.searchContainer}>

                <form className={styles.inputContainer}>

                    <Input icon={Search} className={styles.input} id="1" placeholder="Digite o título, autor ou palavra-chave" value={props.findBook} onChange={props.setFindBook}/>

                    {role !== "ADMIN" && 
                    <Select id="categories" placeholder="Selecione a categoria..." value={props.category} onChangeValue={props.setCategory} options={[
                        {label: "Todos os tipos", value: ""},
                        ...listCategories.map((categorie) => ({
                            label: categorie.name,
                            value: categorie.idCategory 
                        }))
                    ]}/>}

                    <Button className={styles.btnSearch} variant="primary">
                        Pesquisar
                    </Button>
                </form>

                {props.showGutendexInfo && 
                <div className={styles.alert}>
                    <CircleAlert className={styles.alertIcon}/>
                    <p className={styles.alertDescription}>Buscamos livros na base do Gutendex</p>
                </div>}
            </div>

            <section className={styles.resultContainer}>

                <div className={styles.containerSearch}>
                    <div>
                        <h2 className={styles.resultTitle}>Resultados da pesquisa</h2>
                        <p className={styles.resultDescription}>{props.totalElements} resultados encontrados</p>
                    </div>
                
                    {/*<button className={styles.resultIconContainer}>
                        <SlidersHorizontal className={styles.resultIcon}/>
                    </button>*/}
                </div>

                <hr className={styles.divider}/>

                {props.loading ? <Loading /> : ""}

                {props.books.map((book) => (
                    <BookCard variant="available" tagBook="Disponível" className={styles.bookContainer} key={book.id} id={book.id} coverUrl={book.coverUrl} title={book.title} authors={book.authors} action={props.action?.(book)}/>
                ))}
            </section>
        </section>
    );
}