import { api } from "../../../services/api";
import type { ForgotPasswordRequestDTO } from "../types/forgotPasswordRequestDTO ";
import type { ResetPasswordRequestDTO } from "../types/resetPasswordRequestDTO";

const BASE_ENDPOINT = "/reset-password"

export const passwordResetTokenService = {
    requestPasswordReset: async(request: ForgotPasswordRequestDTO): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/email`;

        await api.post<void>(endpoint, request);
    },

    resetPassword: async(request: ResetPasswordRequestDTO): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/password`;

        await api.post<void>(endpoint, request);
    }
}