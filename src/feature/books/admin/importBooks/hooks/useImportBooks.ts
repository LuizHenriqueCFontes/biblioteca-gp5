import { useCallback, useState } from "react";
import { adminBooksService, type ImportSearchResponseDTO } from "../../services/adminBookService";
import type { BookResponseDTO } from "../../../types/response/bookReponseDTO";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import { useQuery } from "@tanstack/react-query";

export function useImportBooks(title?: string, page?: number){
    const [response, setResponse] = useState<ImportSearchResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const FIVE_MINUTES = 1000 * 60 * 5;
    

    const fetchBooks  = useQuery({
        queryKey: ["books-gutendex", title, page],
        queryFn: () => adminBooksService.getBooks(undefined, title, page),
        staleTime: FIVE_MINUTES
    });

    const PAGE_SIZE = 32;

    const totalPages = Math.ceil((fetchBooks.data?.count ?? 0) / PAGE_SIZE)

    const importBook = useCallback(async(id: string): Promise<BookResponseDTO> => {
        try {
            setLoading(true);
            setError(null);

            const data = await adminBooksService.importBook(id);

            return data;

        } catch (error) {
            let message = "Falha ao importar o livro";

            message = getErrorMessage(error);   

            setError(message);

            throw new Error(message, {
                cause: error
            }); 

        }finally {
            setLoading(false);
        }

    }, []);

    return{
        books: fetchBooks.data?.results ?? [],
        totalElements: fetchBooks.data?.count ?? 0,
        next: fetchBooks?.data?.next,
        previous: fetchBooks?.data?.previous,
        loadingBooks: fetchBooks.isPending,
        totalPages,
        error,
        fetchBooks,
        importBook
    }
}