import { api } from "../../../../services/api";
import type { PageResponse } from "../../../../shared/types/pageResponse";
import type { UserListResponseDTO } from "../listUsers/types/listUsers";

const BASE_ENDPOINT = "/admin/users"

export const adminUserService = {

    listUsers: async(name?: string): Promise<PageResponse<UserListResponseDTO>> => {
        const { data } = await api.get<PageResponse<UserListResponseDTO>>(BASE_ENDPOINT, {
            params: {
                username: name
            }
        });

        return data;
    },

    updateRole: async(id: string, role: string): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/${id}/role`;

        await api.patch<void>(endpoint, {
            role: role
        });
    }
}