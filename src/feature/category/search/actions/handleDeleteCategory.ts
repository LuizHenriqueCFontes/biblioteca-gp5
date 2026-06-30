import { confirmAction } from "../../../../utils/confirm";
import { executeWithToast } from "../../../../utils/toast";

export async function handleDeleteCategory(idCategory: string, deleteCategory: (idCategory: string) => Promise<void>) {

    const confirmed = await confirmAction("Excluir categoria", "Você deseja excluir essa categoria?");

    if(!confirmed) {
        return
    }

    executeWithToast(() => deleteCategory(idCategory), "Deletando categoria...", "Categoria deleteda com sucesso!");  
}