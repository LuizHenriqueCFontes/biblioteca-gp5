import { api } from "../../../../services/api"

export type BookResponseDTO = {
    id: string,
    title: string,
    authors: string[],
    coverUrl: string,
    fileUrl: string
}

export type PaginatedResponseDTO = {
    content: BookResponseDTO[],
    first: boolean,
    last: boolean,
    number: number,
    size: number,
    totalElements: number,
    totalPages: number
}

export const searchBooksService = {
    searchBooks: async(url?: string): Promise<PaginatedResponseDTO> => {
        const endpoint = url ?? "/books"

        const { data } = await api.get<PaginatedResponseDTO>(endpoint);

        return data;
    }
}