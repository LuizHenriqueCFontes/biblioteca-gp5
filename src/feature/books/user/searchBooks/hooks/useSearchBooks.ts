import { useCallback, useEffect, useState } from "react";
import { userBookService, type PaginatedResponseDTO } from "../../services/userBookService";
import { loanService } from "../../../../loan/services/loanService";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import type { BookLoanResponseDTO } from "../../../../loan/types/bookLoanResponseDTO";
import { useQuery } from "@tanstack/react-query";

export function useSearchBooks(name?: string) {
    //const [response, setResponse] = useState<PaginatedResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const FIVE_MINUTES = 1000 * 60 * 5;

    const searchBook = useQuery({
        queryKey: ["books", name],
        queryFn: () => userBookService.searchBooks(name),
        staleTime: FIVE_MINUTES
    });

    const bookLoan = useCallback(async(id: string): Promise<BookLoanResponseDTO> => {
        try {
            setLoading(true);
            setError(null);

            const data = await loanService.bookLoan(id);

            return data;

        } catch (error) {
            const message = getErrorMessage(error);

            setError(message);

            throw new Error(message, {
                cause: error
            });

        }finally {
            setLoading(false);
        }

    }, []);

    return {
        books: searchBook.data?.content ?? [],

        first: searchBook?.data?.first,
        last: searchBook?.data?.last,
        number: searchBook?.data?.number ?? 0,
        size: searchBook?.data?.size ?? 0,
        totalElements: searchBook.data?.totalElements ?? 0,
        totalPages: searchBook?.data?.totalPages ?? 0,
        error: searchBook.error,
        loading: searchBook.isLoading,
        bookLoan
    }
}