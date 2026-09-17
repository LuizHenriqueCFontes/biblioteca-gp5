import { useState } from "react";
import type { ForgotPasswordRequestDTO } from "../../types/forgotPasswordRequestDTO ";

export function useSendEmail() {

    const [email, setEmail] = useState<ForgotPasswordRequestDTO>({email: ""});

    const handleSetEmail = (value: string) => {
        setEmail(() => ({
            email: value
        }));
    }

    return {
        email,
        handleSetEmail
    }
}