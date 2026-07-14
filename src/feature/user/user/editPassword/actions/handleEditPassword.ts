import { confirmAction } from "../../../../../utils/confirm";
import { executeWithToast } from "../../../../../utils/toast";
import type { UpdatePasswordRequestDTO } from "../types/updatePasswordRequestDTO";

export async function handleEditPassword(request: UpdatePasswordRequestDTO, updatePassword: (request: UpdatePasswordRequestDTO) => Promise<void>): Promise<void> {

    const confirm = await confirmAction("Atualizar senha", "Você deseja atualizar a sua senha?");

    if(!confirm) {
        return;
    }

    executeWithToast(() => updatePassword(request), "Atualizando senha...", "Senha atualizada com sucesso!");
}