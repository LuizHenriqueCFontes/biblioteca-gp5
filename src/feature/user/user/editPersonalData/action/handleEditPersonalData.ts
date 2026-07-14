import { confirmAction } from "../../../../../utils/confirm";
import { executeWithToast } from "../../../../../utils/toast";
import type { UpdateUserRequestDTO } from "../../types/request/updateUserRequestDTO";
import type { UpdateUserResponseDTO } from "../../types/response/updateUserResponseDTO";
import { buildUserPersonalDataPlayload } from "../utils/buildUserPersonalDataPlayload";

export async function handleEditPersonalData(originalUserData: UpdateUserRequestDTO, userData: UpdateUserRequestDTO, updateUser: (request: Partial<UpdateUserRequestDTO>) => Promise<UpdateUserResponseDTO>): Promise<void> {
    const confirm = await confirmAction("Atualizar dados", "Você deseja atualizar os seus dados?");

    if(!confirm) {
        return;
    }

    const playloadUser = buildUserPersonalDataPlayload(originalUserData, userData);

    executeWithToast(() => updateUser(playloadUser), "Atualizando dados...", "Dados atualizados com sucesso!");
}