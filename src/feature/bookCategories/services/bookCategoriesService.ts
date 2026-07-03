import { api } from "../../../services/api";
import type { EditBookCategoriesResponseDTO } from "../types/editBookCategoriesResponseDTO";

export const bookCategoriesService = {

    editBookCategories: async(idBook: string, idCategories: string[]): Promise<EditBookCategoriesResponseDTO> => {
        const endpoint = `/book-categories/${idBook}`;

        const { data } = await api.put<EditBookCategoriesResponseDTO>(endpoint, {
            idCategory: idCategories
        });

        return data;
    }
}