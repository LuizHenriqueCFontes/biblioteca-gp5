import { useCallback, useEffect, useState } from "react";
import { userBookService, type PaginatedResponseDTO } from "../../../books/services/user/userBookService";

export function useSearchBooks() {
    const [response, setResponse] = useState<PaginatedResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const searchBook = useCallback(async(url?: string): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            const data =  await userBookService.searchBooks(url);

            setResponse(data);

        } catch (error) {
            setError(
                error instanceof Error
                ? error.message
                : "Livros não encontrados"
            );

            throw error;

        } finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        searchBook();

    }, [searchBook])

    return {
        books: response?.content ?? [],
        first: response?.first,
        last: response?.last,
        number: response?.number ?? 0,
        size: response?.size ?? 0,
        totalElements: response?.totalElements ?? 0,
        totalPages: response?.totalPages ?? 0,
        error,
        loading
    }
}