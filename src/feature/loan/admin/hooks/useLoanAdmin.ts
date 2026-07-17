import { useQuery } from "@tanstack/react-query";
import { loanAdminService } from "../services/loanAdminService";

export function useLoanAdmin() {
    const FIVE_MINUTES = 1000 * 60 * 5;

    const listDetailsLoan = useQuery({
        queryKey: ["details-loan"],
        queryFn: loanAdminService.listDetailsLoan,
        staleTime: FIVE_MINUTES
    });


    return {
        listDetailsLoan: listDetailsLoan.data ?? []
    }
}