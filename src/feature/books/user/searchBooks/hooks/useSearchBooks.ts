import { useCallback, useState } from "react";
import { userBookService } from "../../services/userBookService";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import type { BookLoanResponseDTO } from "../../../../loan/user/types/bookLoanResponseDTO";
import { useQuery } from "@tanstack/react-query";
import type { BookFilterRequestDTO } from "../../types/bookFilterRequestDTO";
import type { Pageable } from "../../../../../shared/types/pageable";
import { loanService } from "../../../../loan/user/services/loanService";

export function useSearchBooks(filter?: BookFilterRequestDTO, pageable?: Pageable) {
    //const [response, setResponse] = useState<PaginatedResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const FIVE_MINUTES = 1000 * 60 * 5;

    const searchBook = useQuery({
        queryKey: ["books", filter, pageable?.page],
        queryFn: () => userBookService.searchBooks(undefined, filter, pageable),
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
        loadingBooks: searchBook.isPending,

        first: searchBook?.data?.first,
        last: searchBook?.data?.last,
        number: searchBook?.data?.number ?? 0,
        size: searchBook?.data?.size ?? 0,
        totalElements: searchBook.data?.totalElements ?? 0,
        totalPages: searchBook?.data?.totalPages ?? 0,
        error: searchBook.error,
        bookLoan
    }
}