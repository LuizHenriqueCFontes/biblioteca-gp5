import { useEffect, useState } from "react";
import type { BookDetailsResponseDTO } from "../../../books/types/response/bookDetailsResponseDTO";
import { userBookService } from "../../../books/services/user/userBookService";

export function useBookDetails(id: string | undefined) {
    const [response, setResponse] = useState<BookDetailsResponseDTO | null>(null);
    const [loading, setLoanding] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const bookDetails = async(): Promise<void> => {
            try {
                setLoanding(true);
                setError(null);

                const data  = await userBookService.getBookDetails(id);

                setResponse(data);

            } catch (error) {
                setError(
                error instanceof Error
                ? error.message
                : "Falha ao carregar livro"
                );

                throw error;
            

            } finally {
            setLoanding(false);
            }
        };

        bookDetails();
    }, [id]);

    return {
        book: response,
        loading,
        error
    }
}