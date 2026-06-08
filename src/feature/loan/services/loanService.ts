import type { BookLoanResponseDTO } from "../types/response/bookLoanResponseDTO";
import { api } from "../../../services/api";

export const loanService = {
    bookLoan: async(id: string): Promise<BookLoanResponseDTO> => {
        const endpoint = "/loan";

        const { data } = await api.post<BookLoanResponseDTO>(endpoint, {
            bookId: id
        });

        return data;
    }
}