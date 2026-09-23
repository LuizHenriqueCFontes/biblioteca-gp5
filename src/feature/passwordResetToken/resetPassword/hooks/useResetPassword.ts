import { useState } from "react";
import type { ResetPasswordRequestDTO } from "../../types/resetPasswordRequestDTO";
import { useMutation } from "@tanstack/react-query";
import { passwordResetTokenService } from "../../services/passwordResetTokenService";

export function useResetPassword(token: string) {

    const [passwordData, setPasswordData] = useState<ResetPasswordRequestDTO>({token: token, password: "", confirmPassword: ""});

    const handleSetPassword = (field: keyof ResetPasswordRequestDTO, value: string) => (
        setPasswordData((prev) => ({
            ...prev,
            [field]: value
        }))
    );

    const resetPassword = useMutation({
        mutationFn: passwordResetTokenService.resetPassword
    });

    return {
        passwordData,
        handleSetPassword,

        resetPassword: resetPassword.mutateAsync
    }

}