import { api } from "../../../../services/api"

export type GutendexBookDTO =  {
    id: number,
    title: string,
    authors: string[],
    coverUrl: string,
    fileUrl: string,
}

export type ImportSearchResponseDTO = {
    count: number | null,
    next: string | null,
    previous: string | null,
    results: GutendexBookDTO[]
}

/*export type BookResponseDTO = {
    id: string,
    title: string,
    authors: string[],
    coverUrl: string
}

export type PaginatedResponseDTO = {
    content: BookResponseDTO[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: boolean,
    numberOfElements: number,
    size: number,
    totalElements: number,
    totalPages: number
}*/

export const importBooksService = {
    getBooks: async (url?: string): Promise<ImportSearchResponseDTO> => {
        const endpoint = url ?? "/admin/books";

        const { data } = await api.get<ImportSearchResponseDTO>(endpoint);

        return data;
    }
}