import { api } from "../../../../services/api";

export type CategoryResponseDTO = {
    idCategory: string,
    name: string
}

export type BookDetailsResponseDTO = {
    id: string,
    title: string,
    authors: string[],
    description: string[],
    categories: CategoryResponseDTO[],
    coverUrl: string,
    fileUrl: string
}

export const bookDetailsService = {
    getBookDetails: async(url?: string): Promise<BookDetailsResponseDTO> => {
        const endpoint = url ?? "/books/859c9724-5520-4172-9c05-464c1f133c08";

        const { data } = await api.get<BookDetailsResponseDTO>(endpoint);

        return data;
    }
}