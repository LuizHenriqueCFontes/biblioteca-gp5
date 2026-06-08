export type CategoryResponseDTO = {
    idCategory?: string,
    name?: string
}

export type BookDetailsResponseDTO = {
    id: string,
    title: string,
    authors: string[],
    description: string[],
    categories: CategoryResponseDTO[],
    coverUrl: string,
    fileUrl: string
}