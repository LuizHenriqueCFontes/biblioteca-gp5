import { confirmAction } from "../../../../../utils/confirm";
import { executeWithToast } from "../../../../../utils/toast";
import type { EditBookMutationRequest } from "../types/request/editBookMutationRequest";
import type { EditBookRequestDTO } from "../types/request/editBookRequestDTO";
import type { EditBookResponseDTO } from "../types/response/editBookResponseDTO";
import { buildBookPatchPayload } from "../utils/buildBookPatchPayload";

export async function handleEditBook(id : string, originalBookData: EditBookRequestDTO, bookFormData: EditBookRequestDTO, editBook: (playload: EditBookMutationRequest) => Promise<EditBookResponseDTO>): Promise<void> {

    const confirm = await confirmAction("Atualizar livro", "Você deseja atualizar esse livro?");

    if(!confirm) {
        return;
    }

    const cleanAuthors = bookFormData.authors.filter((author) => author.trim() !== "");

    const bookFormDataFormated = {
        ...bookFormData,
        authors: cleanAuthors
    }

    const playload = buildBookPatchPayload(originalBookData, bookFormDataFormated);

    const playloadMutation = {
        id,
        playload  
    };

    await executeWithToast(() => editBook(playloadMutation), "Atualizando livro...", "Livro atualizado com sucesso!");
}