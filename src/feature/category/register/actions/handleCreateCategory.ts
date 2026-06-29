import { executeWithToast } from "../../../../utils/toast";
import type { ListCategoryResponseDTO } from "../../types/listCategoryResponseDTO";

export async function handleCreateCategory(event: React.SubmitEvent<HTMLFormElement>, name: string, createCategory: (name: string) => Promise<ListCategoryResponseDTO>): Promise<void> { 
    event.preventDefault();

    await executeWithToast<ListCategoryResponseDTO>(() => createCategory(name), "Criando categoria...", "Categoria criada com sucesso!");
}