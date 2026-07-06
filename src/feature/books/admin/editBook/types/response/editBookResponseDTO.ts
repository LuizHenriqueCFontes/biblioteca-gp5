export type EditBookResponseDTO = {
    idBook: string,
    title: string,
    authors: string[],
    description: string[],
    source: string,
    active: boolean
}