import { executeWithToast } from "../../../../../utils/toast";
import { authStorage } from "../../../services/authStorage";
import { registerStorage } from "../../../services/registerStorage";
import type { RegisterDTO } from "../../../types/request/registerDTO";
import type { AuthResponseDTO } from "../../../types/response/authResponseDTO";

export async function handleRegisterPassword(request: RegisterDTO, register: (request: RegisterDTO) => Promise<AuthResponseDTO>) {
    
    const response = await executeWithToast(() => register(request), "Criando conta...", "Conta criada com sucesso!");

    authStorage.save(response.token, response.username);
    registerStorage.clear();
}