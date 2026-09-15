import { api } from "../../../services/api";
import type { ForgotPasswordRequestDTO } from "../types/forgotPasswordRequestDTO ";

const BASE_ENDPOINT = "/reset-password"

export const passwordResetTokenService = {
    requestPasswordReset: async(request: ForgotPasswordRequestDTO): Promise<void> => {
        await api.post(BASE_ENDPOINT, request);
    }
}