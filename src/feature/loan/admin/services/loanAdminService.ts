import { api } from "../../../../services/api";
import type { DetailsLoanResponseDTO } from "../types/detailsLoanResponseDTO";

export const loanAdminService = {
    listDetailsLoan: async(): Promise<DetailsLoanResponseDTO[]> => {
        const endpoint = "/admin/loan";

        const { data } = await api.get<DetailsLoanResponseDTO[]>(endpoint);

        return data;
    }
}