import { useState } from "react";
import type { RegisterDTO } from "../../../types/request/registerDTO";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../services/authService";
import { registerStorage } from "../../../services/registerStorage";

export function useRegisterPassword() {
    const username = registerStorage.getUsername();
    const email = registerStorage.getEmail();
    const phone = registerStorage.getPhone();

    const [register, setRegister] = useState<RegisterDTO>({username: username ?? "", email: email ?? "", phone: phone ?? "", password: "", confirmPassword: ""});

    const handleSetRegister = (field: keyof RegisterDTO, value: string) => {
        setRegister((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    const registerMutation = useMutation({
        mutationFn: authService.register
    })

    return {
        handleSetRegister,
        register,

        registerMutation: registerMutation.mutateAsync
    }
}