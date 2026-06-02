import { api } from "../../../../services/api";

export type BookDetails = {
    id: number,
    title: string,
    authors: string[],
    description: string[],
    bookshelves: string[],
    coverUrl: string,
    fileUrl: string
}

export const importBooksDetailsService = {
    bookDetails: async (url?: string): Promise<BookDetails> => {
        const endpoint = url ?? "/admin/books/84";

        const { data } = await api.get<BookDetails>(endpoint);

        return data;
    }

}