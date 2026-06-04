import { useCallback, useEffect, useState } from "react";
import { bookDetailsService, type BookDetailsResponseDTO } from "../services/bookDetailsService";

export function useBookDetails(id: string | undefined) {
    const [response, setResponse] = useState<BookDetailsResponseDTO | null>(null);
    const [loading, setLoanding] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const bookDetails = useCallback(async(): Promise<void> => {
        try {
            setLoanding(true);
            setError(null);

            const data  = await bookDetailsService.getBookDetails(id);

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

    }, [id]);

    useEffect(() => {
        bookDetails();

    }, [bookDetails]);

    return {
        book: response,
        loading,
        error
    }
}