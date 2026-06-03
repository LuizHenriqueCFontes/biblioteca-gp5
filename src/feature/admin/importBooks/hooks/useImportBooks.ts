import { useCallback, useEffect, useState } from "react";
import type { ImportSearchResponseDTO } from "../services/importBooks";
import { importBooksService } from "../services/importBooks";

export function useImportBooks(){
    const [response, setResponse] = useState<ImportSearchResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = useCallback(async (url?: string): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            const data = await importBooksService.getBooks(url);

            setResponse(data);

        } catch (error) {
            setError(
                error instanceof Error
                ? error.message
                : "Erro ao carregar livros"
            );

        } finally {
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
        fetchBooks
    }
}