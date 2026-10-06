import { useState } from "react";
import type { ForgotPasswordRequestDTO } from "../../types/forgotPasswordRequestDTO ";
import { useMutation } from "@tanstack/react-query";
import { passwordResetTokenService } from "../../services/passwordResetTokenService";

export function useSendEmail() {

    const [email, setEmail] = useState<ForgotPasswordRequestDTO>({email: ""});

    const handleSetEmail = (value: string) => {
        setEmail(() => ({
            email: value
        }));
    }

    const requestPasswordReset = useMutation({
        mutationFn: passwordResetTokenService.requestPasswordReset
    });

    return {
        email,
        handleSetEmail,

        requestPasswordReset: requestPasswordReset.mutateAsync
    }
}