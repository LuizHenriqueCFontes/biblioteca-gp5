import { useState } from "react";
import type { UpdatePasswordRequestDTO } from "../types/updatePasswordRequestDTO";

export function useEditPassword() {
    const [password, setPassword] = useState<UpdatePasswordRequestDTO>({oldPassword: "", newPassword: "", confirmNewPassword: ""}); 

    const handlePasswordData = (field: keyof UpdatePasswordRequestDTO, value: string) => (
        setPassword((prev) => ({
            ...prev,
            [field]: value
        }))
    )

    return{
        password,
        setPassword,
        handlePasswordData
    }
}