import { api } from "../../../../services/api";
import type { BookDetailsResponseDTO } from "../../types/response/bookDetailsResponseDTO";
import type { BookResponseDTO } from "../../types/response/bookReponseDTO";
import type { PageResponse } from "../../../../shared/types/pageResponse";

export type PaginatedResponseDTO = {
    content: BookResponseDTO[],
    first: boolean,
    last: boolean,
    number: number,
    size: number,
    totalElements: number,
    totalPages: number
}

export const userBookService = {
    searchBooks: async(url?: string): Promise<PageResponse<BookResponseDTO>> => {
        const endpoint = url ?? "/books"

        const { data } = await api.get<PageResponse<BookResponseDTO>>(endpoint);

        return data;
    },

    getBookDetails: async(id?: string): Promise<BookDetailsResponseDTO> => {
        const endpoint = `/books/${id}`;

        const { data } = await api.get<BookDetailsResponseDTO>(endpoint);

        return data;
    }

}