import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminBooksService } from "../../services/adminBookService";

export function useSearchBooksAdmin() {
    const queryClient = useQueryClient();


    const deleteBook = useMutation({
        mutationFn: adminBooksService.deleteBook,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["listCategories"]
            });

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            });

            queryClient.invalidateQueries({
                queryKey: ["books"]
            })
        }
    })

    return{
        deleteBook: deleteBook.mutateAsync
    }
}