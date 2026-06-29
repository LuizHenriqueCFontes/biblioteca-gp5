import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "../services/categoryService";
import type { EditCategoryRequestDTO } from "../types/request/editCategoryRequestDTO";

export function useCategory(name?: string) {
    const queryClient = useQueryClient();

    const FIVE_MINUTES = 1000 * 60 * 5;

    const listCategories = useQuery({
        queryKey: ["categories", name],
        queryFn: () => categoryService.listCategories(name),
        staleTime: FIVE_MINUTES
    });

    const createCategoryMutation = useMutation({
        mutationFn: categoryService.createCategory,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories", name]
            })
        }
    });

    const editCategory = useMutation({
        mutationFn: (request: EditCategoryRequestDTO) => categoryService.editCategory(request.idCategory, request.name),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        }
    });

    const deleteCategory = useMutation({
        mutationFn: categoryService.deleteCategory,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        }
    });

    return {
        categories: listCategories.data?.content ?? [],
        loadingCategories: listCategories.isLoading,

        createCategory: createCategoryMutation.mutateAsync,

        editCategory: editCategory.mutateAsync,

        deleteCategory: deleteCategory.mutateAsync
    }
}