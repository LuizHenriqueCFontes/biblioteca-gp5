import { executeWithToast } from "../../../../../utils/toast";
import { registerStorage } from "../../../services/registerStorage";
import type { RegisterValidateDTO } from "../../../types/request/registerValidateDTO";

export async function handleRegisterValidate(request: RegisterValidateDTO, registerValidate: (request: RegisterValidateDTO) => Promise<void>) {
    await executeWithToast(() => registerValidate(request), "Carregando...", "Dados validados!");

    registerStorage.save(request.username, request.email, request.phone);
}