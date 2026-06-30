import type { EditCategoryRequestDTO } from "../../types/request/editCategoryRequestDTO";
import type { EditCategoryResponseDTO } from "../../types/response/editCategoryResponseDTO";
import { executeWithToast } from "../../../../utils/toast";

export async function handleEditCategory(idCategory: string, name: string, editCategory: (request: EditCategoryRequestDTO) => Promise<EditCategoryResponseDTO>): Promise<void> {

    const itemEditCategory: EditCategoryRequestDTO = {
        idCategory: idCategory,
        name: name
    }

    await executeWithToast(() => editCategory(itemEditCategory), "Editando categoria...", "Categoria editada com sucesso!");
}