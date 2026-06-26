import { api } from "../../../services/api";
import type { PageResponse } from "../../../shared/types/pageResponse";
import type { CategoryResponseDTO } from "../types/categoryResponseDTO";


const BASE_ENDPOINT = "/category"

export const categoryService = {

    listCategories: async(name?: string): Promise<PageResponse<CategoryResponseDTO>> => {
        const endpoint = `${BASE_ENDPOINT}/summary`;
        
        const { data } = await api.get<PageResponse<CategoryResponseDTO>>(endpoint, {
            params: {
                name: name
            }  
        });
        return data;
    }
}