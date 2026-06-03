import { useCallback, useEffect, useState } from "react";
import { bookDetailsService, type BookDetailsResponseDTO } from "../services/bookDetailsService";

export function useBookDetails() {
    const [response, setResponse] = useState<BookDetailsResponseDTO | null>(null);
    const [loading, setLoanding] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const bookDetails = useCallback(async(url?: string): Promise<void> => {
        try {
            setLoanding(true);
            setError(null);

            const data  = await bookDetailsService.getBookDetails(url);

            setResponse(data);

        } catch (error) {
            setError(
                error instanceof Error
                ? error.message
                : "Falha ao carregar livro"
            );
        } finally {
            setLoanding(false);
        }

    }, []);

    useEffect(() => {
        bookDetails();

    }, [bookDetails]);

    return {
        book: response,
        loading,
        error
    }
}