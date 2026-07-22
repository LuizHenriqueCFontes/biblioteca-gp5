import { useState } from "react";
import type { LoginRequestDTO } from "../../types/request/loginRequestDTO";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/authService";

export function useLogin() {
    const [login, setLogin] = useState<LoginRequestDTO>({email: "", password: ""});

    const handleSetLogin = (field:  keyof LoginRequestDTO, value: string) => {
        setLogin((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    const loginMutation = useMutation({
        mutationFn: authService.login
    });

    return {
        handleSetLogin,
        login,

        loginMutation: loginMutation.mutateAsync,
        loading: loginMutation.isPending
    }
}