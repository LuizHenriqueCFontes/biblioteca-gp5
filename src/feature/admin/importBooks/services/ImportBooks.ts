import { api } from "../../../../services/api"

export type AuthorsDTO = {
    name: string,
    birthYear: number | null,
    deathYear: number | null
}

export type GutendexBookDTO =  {
    id: number,
    title: string,
    authors: AuthorsDTO[],
    summaries: string[],
    formats: Record<string, string>
}

export type ImportBooksResponseDTO = {
    count: number | null,
    next: string | null,
    previous: string | null,
    results: GutendexBookDTO[]
}

export const importBooksService = {
    getBooks: async (url?: string): Promise<ImportBooksResponseDTO> => {
        const endpoint = url ?? "/admin/books";

        const { data } = await api.get<ImportBooksResponseDTO>(endpoint);

        return data;
    }
}