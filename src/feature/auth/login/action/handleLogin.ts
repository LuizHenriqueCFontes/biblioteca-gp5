import { executeWithToast } from "../../../../utils/toast";
import { authStorage } from "../../services/authStorage";
import type { LoginRequestDTO } from "../../types/request/loginRequestDTO";
import type { AuthResponseDTO } from "../../types/response/authResponseDTO";

export async function handleLogin(request: LoginRequestDTO, login: (request: LoginRequestDTO) => Promise<AuthResponseDTO>): Promise<void> {
    const response =  await executeWithToast(() => login(request), "Autenticando...", "Autenticado com suceso!");

    authStorage.save(response.token, response.username);
}