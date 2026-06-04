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
    getBookDetails: async(id?: string): Promise<BookDetailsResponseDTO> => {
        const endpoint = `/books/${id}`;

        const { data } = await api.get<BookDetailsResponseDTO>(endpoint);

        return data;
    }
}