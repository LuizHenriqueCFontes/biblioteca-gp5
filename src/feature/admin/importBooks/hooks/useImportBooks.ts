import { useCallback, useEffect, useState } from "react";
import { adminBooksService, type ImportSearchResponseDTO } from "../../../books/services/admin/adminBookService";
import axios from "axios";
import type { BookResponseDTO } from "../../../books/types/response/bookReponseDTO";

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

            if(axios.isAxiosError(error)){
                message = error.response?.data?.message;

            }else if(error instanceof Error) {
                message = error.message;
            }

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