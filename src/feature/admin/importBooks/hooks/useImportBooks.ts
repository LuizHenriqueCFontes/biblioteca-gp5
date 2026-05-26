import { useCallback, useEffect, useState } from "react";
import type { ImportBooksResponseDTO } from "../services/ImportBooks";
import { importBooksService } from "../services/ImportBooks";

export function useImportBooks(){
    const [response, setResponse] = useState<ImportBooksResponseDTO | null>(null);
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
        nextPage: response?.next ?? null,
        previousPage: response?.previous ?? null,
        count: response?.count ?? 0,

        loading,
        error,
        fetchBooks
    }
}