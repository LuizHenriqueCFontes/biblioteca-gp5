import { toast } from "sonner";
import { confirmAction } from "../../../utils/confirm";
import type { BookResponseDTO } from "../types/response/bookReponseDTO"

export async function handleImportBook(id: string, importBook: (id: string) => Promise<BookResponseDTO>): Promise<void> {

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