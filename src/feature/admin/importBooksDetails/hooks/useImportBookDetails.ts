import { useEffect, useState } from "react";
import { importBooksDetailsService, type BookDetails } from "../services/importBooksDetails";

export function useImportBooksDetails(id: string | undefined){
    const [response, setResponse] = useState<BookDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const data = await importBooksDetailsService.bookDetails(id);

                setResponse(data);

            } catch (error) {
                setError(
                error instanceof Error
                ? error.message
                : "Erro ao carregar livro"
                );

                throw error;

            }finally {
                setLoading(false);
            }
        };   

        fetchBook();

    }, [id]);

    return {
        book: response,
        loading,
        error
    }
}