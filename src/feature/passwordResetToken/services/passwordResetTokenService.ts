import { api } from "../../../services/api";
import type { ForgotPasswordRequestDTO } from "../types/forgotPasswordRequestDTO ";

const BASE_ENDPOINT = "/reset-password"

export const passwordResetTokenService = {
    requestPasswordReset: async(request: ForgotPasswordRequestDTO): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/email`;

        await api.post(endpoint, request);
    }
}