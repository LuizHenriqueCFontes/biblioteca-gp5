import { toast } from "sonner";
import { confirmAction } from "../../../utils/confirm";
import type { BookLoanResponseDTO } from "../../loan/types/response/bookLoanResponseDTO";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export async function handleBookLoan(id: string, bookLoan: (id: string) => Promise<BookLoanResponseDTO>): Promise<void> {
    const confirmed = await confirmAction("Emprestimo", "Você deseja realizar o emprestimo desse livro?");

    if(!confirmed) {
        return;
    }

    const toastId = toast.loading("Carregando emprestimo...");

    try {
        await bookLoan(id);

        toast.success("Emprestimo realizado com sucesso!", {
            id: toastId
        });

    } catch (error) {
        toast.error(
            getErrorMessage(error),
            {
                id: toastId
            }
        );

    }

}