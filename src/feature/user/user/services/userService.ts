import { api } from "../../../../services/api";
import type { UpdatePasswordRequestDTO } from "../editPassword/types/updatePasswordRequestDTO";
import type { UpdateUserRequestDTO } from "../types/request/updateUserRequestDTO";
import type { UpdateUserResponseDTO } from "../types/response/updateUserResponseDTO";
import type { UserResponseDTO } from "../types/response/userResponseDTO";

const BASE_ENDPOINT = "/users";

export const userService = {
    getUserData: async(): Promise<UserResponseDTO> => {
        const { data } = await api.get(BASE_ENDPOINT);

        return data;
    },

    updateUser: async(request: Partial <UpdateUserRequestDTO>): Promise<UpdateUserResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/me`

        const { data } = await api.patch<UpdateUserResponseDTO>(endpoint, request);

        return data;
    },

    updatePassword: async(request: UpdatePasswordRequestDTO): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/me/password`;

        await api.patch<void>(endpoint, request);
    }
}