import type { EditBookRequestDTO } from "../types/request/editBookRequestDTO";

export function buildBookPatchPayload(originalBookData: EditBookRequestDTO, bookFormData: EditBookRequestDTO): Partial<EditBookRequestDTO> {

    const playload: Partial<EditBookRequestDTO> = {};

    const authorsChanged = originalBookData.authors.length !== bookFormData.authors.length || !originalBookData.authors.every((author, index) => author === bookFormData.authors[index]);

    const descriptionChanged = originalBookData.description.length !== bookFormData.description.length || !originalBookData.description.every((description, index) => description === bookFormData.description[index]);

    if(originalBookData.title !== bookFormData.title) {
        playload.title = bookFormData.title;
    }

    if(authorsChanged) {
        playload.authors = bookFormData.authors;
    }

    if(descriptionChanged) {
        playload.description = bookFormData.description;
    }

    return playload;
}