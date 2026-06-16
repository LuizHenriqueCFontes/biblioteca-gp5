import type { BookLoanResponseDTO } from "../types/bookLoanResponseDTO";
import { api } from "../../../services/api";
import type { Status } from "../types/loanStatus";
import type { PageResponse } from "../../../shared/types/pageResponse";
import type { LoanSummaryResponseDTO } from "../types/loanSummaryResponseDTO";

const BASE_ENDPOINT = "/loan"

export const loanService = {

    bookLoan: async(id: string): Promise<BookLoanResponseDTO> => {
        const endpoint = BASE_ENDPOINT;

        const { data } = await api.post<BookLoanResponseDTO>(endpoint, {
            bookId: id
        });

        return data;
    },

    getSummary: async(): Promise<LoanSummaryResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/summary`;

        const { data } = await api.get<LoanSummaryResponseDTO>(endpoint);

        return data;
    },

    getLoans: async(status: Status): Promise<PageResponse<BookLoanResponseDTO>> => {
        const endpoint = BASE_ENDPOINT;

        const { data } = await api.get<PageResponse<BookLoanResponseDTO>>(endpoint, {
            params: {
                status: status
            }
        });

        return data;
    },

    returnLoan: async(idLoan: string): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/${idLoan}`

        await api.patch<void>(endpoint);
    }

}