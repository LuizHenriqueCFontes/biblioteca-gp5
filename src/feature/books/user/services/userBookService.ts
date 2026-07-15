import { api } from "../../../../services/api";
import type { BookDetailsResponseDTO } from "../../types/response/bookDetailsResponseDTO";
import type { BookResponseDTO } from "../../types/response/bookReponseDTO";
import type { PageResponse } from "../../../../shared/types/pageResponse";
import type { BookFilterRequestDTO } from "../types/bookFilterRequestDTO";
import type { Pageable } from "../../../../shared/types/pageable";

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
    searchBooks: async(url?: string, filter?: BookFilterRequestDTO, pageable?: Pageable): Promise<PageResponse<BookResponseDTO>> => {
        const endpoint = url ?? "/books"

        const { data } = await api.get<PageResponse<BookResponseDTO>>(endpoint, {
            params: {
                title: filter?.title,
                idsCategories: filter?.idsCategories,

                page: pageable?.page,
                size: pageable?.size
            }
        });

        return data;
    },

    getBookDetails: async(id?: string): Promise<BookDetailsResponseDTO> => {
        const endpoint = `/books/${id}`;

        const { data } = await api.get<BookDetailsResponseDTO>(endpoint);

        return data;
    }

}