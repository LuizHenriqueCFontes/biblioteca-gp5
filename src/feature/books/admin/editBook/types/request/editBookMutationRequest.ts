import type { EditBookRequestDTO } from "./editBookRequestDTO"

export type EditBookMutationRequest = {
    id: string,
    playload: Partial<EditBookRequestDTO>
}