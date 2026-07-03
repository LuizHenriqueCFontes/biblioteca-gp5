import { useMutation } from "@tanstack/react-query";
import { bookCategoriesService } from "../../services/bookCategoriesService";
import type { EditBookCategoriesMutation } from "../../types/editBookCategoriesMutation";

export function useManageCategories() {

    const editBookCategories = useMutation({
        mutationFn: (request: EditBookCategoriesMutation) => bookCategoriesService.editBookCategories(request.idBook, request.idCategory)
    })


    return{
        editCategory: editBookCategories.mutateAsync
    }

}