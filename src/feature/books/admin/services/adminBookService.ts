import { api } from "../../../../services/api"
import type { BookResponseDTO } from "../../types/response/bookReponseDTO"
import type { BooksRecentlyCreatedResponseDTO } from "../../types/response/booksRecentlyCreatedResponseDTO"
import type { EditBookRequestDTO } from "../editBook/types/request/editBookRequestDTO"
import type { EditBookResponseDTO } from "../editBook/types/response/editBookResponseDTO"

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

export type AdminBookDetails = {
    id: number,
    title: string,
    authors: string[],
    description: string[],
    bookshelves: string[],
    coverUrl: string,
    fileUrl: string
}

export const adminBooksService = {
    getBooks: async (url?: string, title?: string, page?: number): Promise<ImportSearchResponseDTO> => {
        const endpoint = url ?? "/admin/books";

        const { data } = await api.get<ImportSearchResponseDTO>(endpoint, {
            params: {
                title: title,
                page: page
            }
        });

        return data;
    },

    listRecently: async(): Promise<BooksRecentlyCreatedResponseDTO[]> => {
        const endpoint = "/admin/books/recent";

        const { data } = await api.get<BooksRecentlyCreatedResponseDTO[]>(endpoint);

        return data;
    },
    
    importBook: async(id?: string): Promise<BookResponseDTO> => {
        const endpoint = `/admin/books/${id}`;

        const { data } = await api.post<BookResponseDTO>(endpoint);

        return data;
    },
    
    bookDetails: async (id?: string): Promise<AdminBookDetails> => {
        const endpoint = `/admin/books/${id}`;

        const { data } = await api.get<AdminBookDetails>(endpoint);

        return data;
    },

    editBook: async(id: string, request: Partial<EditBookRequestDTO>): Promise<EditBookResponseDTO> => {
        const endpoint = `/admin/books/${id}`;

        const { data } = await api.patch<EditBookResponseDTO>(endpoint, request);

        return data;
    },

    deleteBook: async(id: string): Promise<void> => {
        const endpoint = `/admin/books/${id}`;

        await api.delete<void>(endpoint);
    }

}