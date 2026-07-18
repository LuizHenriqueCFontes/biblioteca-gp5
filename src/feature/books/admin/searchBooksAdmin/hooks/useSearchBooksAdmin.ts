import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminBooksService } from "../../services/adminBookService";

export function useSearchBooksAdmin() {
    const queryClient = useQueryClient();

    const FIVE_MINUTES = 1000 * 60 * 5;

    const listRecently = useQuery({
        queryKey: ["books-recent"],
        queryFn: adminBooksService.listRecently,
        staleTime: FIVE_MINUTES
    });


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
        deleteBook: deleteBook.mutateAsync,

        booksRecent: listRecently.data ?? [],
        booksRecentLoading: listRecently.isPending
    }
}