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
    bookDetails: async (id?: string): Promise<BookDetails> => {
        const endpoint = `/admin/books/${id}`;

        const { data } = await api.get<BookDetails>(endpoint);

        return data;
    }

}