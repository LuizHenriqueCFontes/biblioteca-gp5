import { executeWithToast } from "../../../../utils/toast";
import type { ListCategoryResponseDTO } from "../../types/response/listCategoryResponseDTO";

export async function handleCreateCategory(name: string, createCategory: (name: string) => Promise<ListCategoryResponseDTO>): Promise<void> { 
    await executeWithToast<ListCategoryResponseDTO>(() => createCategory(name), "Criando categoria...", "Categoria criada com sucesso!");
}