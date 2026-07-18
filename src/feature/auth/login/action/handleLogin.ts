import { executeWithToast } from "../../../../utils/toast";
import type { LoginRequestDTO } from "../../types/request/loginRequestDTO";
import type { AuthResponseDTO } from "../../types/response/authResponseDTO";

export async function handleLogin(request: LoginRequestDTO, login: (request: LoginRequestDTO) => Promise<AuthResponseDTO>): Promise<void> {
    const response =  await executeWithToast(() => login(request), "Autenticando...", "Autenticado com suceso!");

    /* transferir para o authStorage localStorage.setItem("token", response.token);
    localStorage.setItem("name", response.username);*/
}