import { confirmAction } from "../../../../../utils/confirm";
import { executeWithToast } from "../../../../../utils/toast";

export async function handleDeactiveBook(id: string, deleteBook: (id: string) =>  Promise<void>): Promise<void> {
    const confirm = await confirmAction("Desativar livro", "Você deseja desativar esse livro?");

    if(!confirm) {
        return;
    }

    executeWithToast(() => deleteBook(id), "Desativando livro...", "Livro desativado com sucesso!");
}