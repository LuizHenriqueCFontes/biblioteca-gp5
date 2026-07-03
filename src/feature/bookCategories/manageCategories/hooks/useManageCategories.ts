import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookCategoriesService } from "../../services/bookCategoriesService";
import type { EditBookCategoriesMutation } from "../../types/editBookCategoriesMutation";

export function useManageCategories() {

    const queryClient = useQueryClient();

    const editBookCategories = useMutation({
        mutationFn: (request: EditBookCategoriesMutation) => bookCategoriesService.editBookCategories(request.idBook, request.idCategory),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["listCategories"]
            })
        }
    })


    return{
        editCategory: editBookCategories.mutateAsync
    }

}