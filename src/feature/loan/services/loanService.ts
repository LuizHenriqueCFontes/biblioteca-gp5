import type { BookLoanRequestDTO } from "../types/request/bookLoanRequestDTO";
import type { BookLoanResponseDTO } from "../types/response/bookLoanResponseDTO";
import { api } from "../../../services/api";

export const loanService = {
    bookLoan: async(request: BookLoanRequestDTO): Promise<BookLoanResponseDTO> => {
        const endpoint = "/loan";

        const { data } = await api.post<BookLoanResponseDTO>(endpoint, request);

        return data;
    }
}