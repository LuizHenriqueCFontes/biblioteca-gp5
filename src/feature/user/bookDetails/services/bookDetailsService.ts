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
        const endpoint = url ?? "/books/8faa18bb-0422-4b38-8454-668ee445f231";

        const { data } = await api.get<BookDetailsResponseDTO>(endpoint);

        return data;
    }
}