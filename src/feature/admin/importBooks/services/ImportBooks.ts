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

export const importBooksService = {
    getBooks: async (url?: string): Promise<ImportSearchResponseDTO> => {
        const endpoint = url ?? "/admin/books";

        const { data } = await api.get<ImportSearchResponseDTO>(endpoint);

        return data;
    }
}