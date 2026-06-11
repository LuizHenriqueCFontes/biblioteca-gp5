import { useCallback, useEffect, useState } from "react";
import { adminBooksService, type ImportSearchResponseDTO } from "../../services/adminBookService";
import type { BookResponseDTO } from "../../../types/response/bookReponseDTO";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";

export function useImportBooks(){
    const [response, setResponse] = useState<ImportSearchResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = useCallback(async (url?: string): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            const data = await adminBooksService.getBooks(url);

            setResponse(data);

        } catch (error) {
            setError(
                error instanceof Error
                ? error.message
                : "Erro ao carregar livros"
            );

            throw error;

        } finally {
            setLoading(false);
        }

    }, []);

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

    useEffect(() => {
        fetchBooks();
        
    }, [fetchBooks]);

    return{
        books: response?.results ?? [],
        totalElements: response?.count ?? 0,
        loading,
        error,
        fetchBooks,
        importBook
    }
}