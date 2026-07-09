import { api } from "../../../../services/api";
import type { PageResponse } from "../../../../shared/types/pageResponse";
import type { UserListResponseDTO } from "../listUsers/types/listUsers";

const ENDPOINT = "/admin/users"

export const adminUserService = {

    listUsers: async(name?: string): Promise<PageResponse<UserListResponseDTO>> => {
        const { data } = await api.get<PageResponse<UserListResponseDTO>>(ENDPOINT, {
            params: {
                username: name
            }
        });

        return data;
    }
}