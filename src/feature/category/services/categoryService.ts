import { api } from "../../../services/api";
import type { CategoryResponseDTO } from "../types/categoryResponseDTO";


const BASE_ENDPOINT = "/category"

export const categoryService = {

    listCategories: async(name?: string): Promise<CategoryResponseDTO[]> => {
        
        const { data } = await api.get<CategoryResponseDTO[]>(BASE_ENDPOINT, {
            params: {
                name: name
            }  
        });
        return data;
    }
}