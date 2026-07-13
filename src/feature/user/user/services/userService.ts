import { api } from "../../../../services/api";
import type { UserResponseDTO } from "../types/response/userResponseDTO";

const BASE_ENDPOINT = "/users";

export const userService = {
    getUserData: async(): Promise<UserResponseDTO> => {
        const { data } = await api.get(BASE_ENDPOINT);

        return data;
    }
}