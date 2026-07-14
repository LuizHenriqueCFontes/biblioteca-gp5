import { useState } from "react";
import type { UpdatePasswordRequestDTO } from "../types/updatePasswordRequestDTO";
import { useMutation } from "@tanstack/react-query";
import { userService } from "../../services/userService";

export function useEditPassword() {

    const updatePassword = useMutation({
        mutationFn: userService.updatePassword
    });

    const [password, setPassword] = useState<UpdatePasswordRequestDTO>({oldPassword: "", newPassword: "", confirmNewPassword: ""}); 

    const handlePasswordData = (field: keyof UpdatePasswordRequestDTO, value: string) => (
        setPassword((prev) => ({
            ...prev,
            [field]: value
        }))
    );



    return{
        password,
        setPassword,
        handlePasswordData,

        updatePassword: updatePassword.mutateAsync
    }
}