import { confirmAction } from "../../../../../utils/confirm";
import { executeWithToast } from "../../../../../utils/toast";
import type { UpdateRoleRequestMutation } from "../types/updateRoleRequestMutation";

export async function handleUpdateRole(id: string, role: string, updateRole: (request: UpdateRoleRequestMutation) => Promise<void>): Promise<boolean> {
    
    const confirm = await confirmAction("Atualizar permissões", "Você deseja atualizar as permissões desse usuário?");

    if(!confirm) {
        return false;
    }

    const request: UpdateRoleRequestMutation = {
        id: id,
        role: role
    }

    await executeWithToast(() => updateRole(request), "Atualizando permissão...", "Permissão atualizado com sucesso!");

    return true;
}