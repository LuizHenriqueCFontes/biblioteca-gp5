import { confirmAction } from "../../../utils/confirm";
import { executeWithToast } from "../../../utils/toast";

export async function handleBookReturn(id: string, returnLoan: (id: string) => Promise<void>): Promise<void> {
    const confirmed = await confirmAction("Devolver livro", "Você deseja devolver esse livro?");

    if(!confirmed) {
        return;
    }

    executeWithToast(() => returnLoan(id), "Devolvendo emprestimo...", "Livro devolvido com sucesso!");
}