export interface PageResponse<T> {
    content: T[],
    totalElementes: number,
    totalPages: number,
    size: number,
    number: number,
    first: boolean,
    last: boolean
}