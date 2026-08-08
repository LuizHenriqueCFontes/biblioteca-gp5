import { confirmAction } from "../../../utils/confirm";
import { executeWithToast } from "../../../utils/toast";
import type { EditBookCategoriesMutation } from "../types/editBookCategoriesMutation";
import type { EditBookCategoriesResponseDTO } from "../types/editBookCategoriesResponseDTO";

export async function handleUpdateCategories(idBook: string, idCategory: string[], editBookCategories: (request: EditBookCategoriesMutation) => Promise<EditBookCategoriesResponseDTO>): Promise<void> {

    const confirmed = await confirmAction("Atualizar categorias", "Você deseja atualizar as categorias desse livro?");

    if(!confirmed) {
        return;
    }

    const request = {
        idBook: idBook,
        idCategory: idCategory
    }

     executeWithToast(() => editBookCategories(request), "Atualizando...", "Categorias atualizadas com sucesso!");
}