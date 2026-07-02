import { api } from "../../../services/api";
import type { PageResponse } from "../../../shared/types/pageResponse";
import type { CategoryResponseDTO } from "../types/response/categoryResponseDTO";
import type { EditCategoryResponseDTO } from "../types/response/editCategoryResponseDTO";
import type { ListCategoryResponseDTO } from "../types/response/listCategoryResponseDTO";


const BASE_ENDPOINT = "/category"

export const categoryService = {

    listPageCategories: async(name?: string): Promise<PageResponse<CategoryResponseDTO>> => {
        const endpoint = `${BASE_ENDPOINT}/summary`;
        
        const { data } = await api.get<PageResponse<CategoryResponseDTO>>(endpoint, {
            params: {
                name: name
            }  
        });
        return data;
    },

    listCategories: async(name?: string): Promise<CategoryResponseDTO[]> => {
        
        const { data } = await api.get<CategoryResponseDTO[]>(BASE_ENDPOINT, {
            params: name
        });

        return data;
    },

    createCategory: async(name: string): Promise<ListCategoryResponseDTO> => {
        
        const { data } = await api.post<ListCategoryResponseDTO>(BASE_ENDPOINT, {
            name: name
        });

        return data;
    },

    editCategory: async(idCategory: string, name: string): Promise<EditCategoryResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/${idCategory}`;

        const { data } = await api.put<EditCategoryResponseDTO>(endpoint, {
            name: name
        });

        return data;
    },

    deleteCategory: async(idCategory: string): Promise<void> => {
        const endpoint = `${BASE_ENDPOINT}/${idCategory}`;

        await api.delete<void>(endpoint);
    }
}