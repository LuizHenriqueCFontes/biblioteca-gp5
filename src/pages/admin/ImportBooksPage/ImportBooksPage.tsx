import styles from "./ImportBooksPage.module.css";
import { Button } from "../../../shared/components/Button/Button";
import { useImportBooks } from "../../../feature/admin/importBooks/hooks/useImportBooks";
import BookSearch from "../../../feature/books/components/BookSearch/BookSearch";
import { useNavigate } from "react-router-dom";
import { confirmAction } from "../../../utils/confirm";
import { toast } from "sonner";

export default function ImportBooksPage(){
    const { books, totalElements, loading, importBook/*error, previousPage, nextPage, fetchBooks*/ } = useImportBooks();
    const navigate = useNavigate();

    function handleGoToImportBookDetails(id: string){
        navigate(`/admin/details/${id}`)
    }

    async function handleImportBook(id: string): Promise<void> {

        const confirmed = await confirmAction("Importar o livro", "Você deseja importar esse livro?");

        if(!confirmed){
            return;
        }

        const toastId = toast.loading("Importando livro...")

        try {
            await importBook(id);

            toast.success("Livro importado com sucesso!", {
                id: toastId
            });

        } catch (error) {
            toast.error(
                error instanceof Error
                ? error.message
                : "Erro ao importar livro", 
                {
                    id: toastId
                }
            );
        }
    }

    return (
            <BookSearch description="Pesquise e importe livros para a biblioteca e disponibilize para todos os usuários." 
            books={books} totalElements={totalElements} 
            loading={loading}
            showGutendexInfo
            action={(books) => (
                <>
                    <Button className={styles.button} onClick={() => handleGoToImportBookDetails(`${books.id}`)} variant="secondary">Detalhes</Button>

                    <Button className={styles.button} onClick={() => handleImportBook(`${books.id}`)} variant="primary">Importar</Button>
                </>
            )}
            />
    );
}