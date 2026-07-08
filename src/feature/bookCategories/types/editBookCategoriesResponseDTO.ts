import type { ListCategoryResponseDTO } from "../../category/types/response/listCategoryResponseDTO"

export type EditBookCategoriesResponseDTO = {
    idBook: string,
    title: string,
    categories: ListCategoryResponseDTO[]
}