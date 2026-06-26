import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/categoryService";

export function useCategory(name?: string) {
    const FIVE_MINUTES = 1000 * 60 * 5;

    const listCategories = useQuery({
        queryKey: ["categories", name],
        queryFn: () => categoryService.listCategories(name),
        staleTime: FIVE_MINUTES
    });

    return {
        categories: listCategories?.data ?? [],
        loadingCategories: listCategories.isLoading
    }
}