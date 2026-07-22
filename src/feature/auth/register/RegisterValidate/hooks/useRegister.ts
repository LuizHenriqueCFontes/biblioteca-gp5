import { useState } from "react";
import type { RegisterValidateDTO } from "../../../types/request/registerValidateDTO";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../services/authService";

export function useRegisterValidate() {
    const [data, setData] = useState<RegisterValidateDTO>({username: "", email: "", phone: ""});

    const handleSetData = (field: keyof RegisterValidateDTO, value: string) => {
        setData((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    const registerValidateMutation = useMutation({
        mutationFn: authService.registerValidate
    })

    return {
        handleSetData,
        data,
        registerValidate: registerValidateMutation.mutateAsync
    }

}