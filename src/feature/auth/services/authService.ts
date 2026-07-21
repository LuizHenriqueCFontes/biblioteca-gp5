import { api } from "../../../services/api";
import type { LoginRequestDTO } from "../types/request/loginRequestDTO";
import type { RegisterValidateDTO } from "../types/request/registerValidateDTO";
import type { AuthResponseDTO } from "../types/response/authResponseDTO";

const BASE_ENDPOINT = "/auth";

export const authService = {
    login: async(request: LoginRequestDTO): Promise<AuthResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/login`;

        const { data } = await api.post<AuthResponseDTO>(endpoint, request);

        return data;
    },

    registerValidate: async(request: RegisterValidateDTO): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/register/validate`;

        await api.post<void>(endpoint, request);
    }
}