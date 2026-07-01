import BookSearch from "../../../components/BookSearch/BookSearch";
import { useSearchBooks } from "../../../user/searchBooks/hooks/useSearchBooks";
import styles from "./SearchBooksAdmin.module.css";
import KebabMenu from "../../../../../shared/components/KebabMenu/KebabMenu";
import { Pencil } from "lucide-react";

export default function SearchBooksAdmin() {

    const { books, totalElements } = useSearchBooks();

    return(
        <BookSearch books={books} description="Gerencie os livros do acervo da biblioteca" totalElements={totalElements} action={(books) => (
            <div className={styles.kebabContainer}>
                <KebabMenu options={[
                    {icon: <Pencil />, label: "Visualizar"}
                ]}/>
            </div>
        )}/>
    );
}