import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import type { UpdateUserRequestDTO } from "../../types/request/updateUserRequestDTO";
import { useEffect, useState } from "react";

export function useEditPersonalData() {
    const FIVE_MINUTES = 1000 * 6 * 5;

    const getUserData = useQuery({
        queryKey: ["user"],
        queryFn: userService.getUserData,
        staleTime: FIVE_MINUTES
    });

    const [originalUserData, setOriginalUserData] = useState<UpdateUserRequestDTO>({username: "", email: "", phone: ""});
    const [userData, setUserdata] = useState<UpdateUserRequestDTO>({username: "", email: "", phone: ""});

    useEffect(() => {
        if(!getUserData.data) {
            return;
        }

        setOriginalUserData({
            username: getUserData.data?.username,
            email: getUserData.data?.email,
            phone: getUserData.data?.phone
        });

        setUserdata({
            username: getUserData.data?.username,
            email: getUserData.data?.email,
            phone: getUserData.data?.phone
        });

    }, [getUserData.data]);

    const handleUserData = (field:keyof UpdateUserRequestDTO, value: string) => (
        setUserdata((prev) => ({
            ...prev,
            [field]: value
        })
    ))

    return {
        user: getUserData.data,
        userLoading: getUserData.isPending,
        originalUserData,
        userData,
        handleUserData
    }
}