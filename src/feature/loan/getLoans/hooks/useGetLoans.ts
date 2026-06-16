import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Status } from "../../types/loanStatus";
import { loanService } from "../../services/loanService";
import { getErrorMessage } from "../../../../utils/getErrorMessage";

export function useGetLoans(status: Status) {

    const queryClient = useQueryClient();

    const FIVE_MINUTES = 1000 * 60 * 5;

    const getLoans = useQuery({
        queryKey: ["get-loans", status],
        queryFn: () => loanService.getLoans(status),
        staleTime: FIVE_MINUTES
    });

    const getLoansSummary = useQuery({
        queryKey: ["get-summary"],
        queryFn: () => loanService.getSummary(),
        staleTime: FIVE_MINUTES
    });

    const returnLoanMutation = useMutation({
        mutationFn: loanService.returnLoan,

        onSuccess: async() => {
            await queryClient.invalidateQueries({
                queryKey: ["get-loans"]
            });
        }
    });

    const errorLoans = getLoans.error
    ? getErrorMessage(getLoans.error)
    : null;

    const errorSummary = getLoansSummary.error
    ? getErrorMessage(getLoansSummary.error)
    : null;

    return {
        loans: getLoans.data?.content ?? [],
        loading: getLoans.isLoading,
        errorLoans,

        summary: getLoansSummary.data ?? null,
        loadingSummary: getLoansSummary.isLoading,
        errorSummary,

        returnLoan: returnLoanMutation.mutateAsync
    }
}