import { api } from "../../../../services/api"

/*export type AuthorsDTO = {
    name: string,
    birthYear: number | null,
    deathYear: number | null
}*/

/*export type GutendexBookDTO =  {
    id: number,
    title: string,
    authors: AuthorsDTO[],
    summaries: string[],
    formats: Record<string, string>
}*/

export type BookResponseDTO = {
    id: string,
    title: string,
    authors: string[],
    description: string[],
    coverUrl: string,
    fileUrl: string
};

export type PaginatedBookResponseDTO = {
    content: BookResponseDTO[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    size: number,
    totalElements: number,
    totalPages: number
}

/*export type ImportSearchResponseDTO = {
    count: number | null,
    next: string | null,
    previous: string | null,
    results: BookResponseDTO[]
}*/

export const importBooksService = {
    getBooks: async (url?: string): Promise<PaginatedBookResponseDTO> => {
        const endpoint = url ?? "/books";

        const { data } = await api.get<PaginatedBookResponseDTO>(endpoint);

        return data;
    }
}