import type { Status } from "./loanStatus"

export type BookLoanResponseDTO = {
    idLoan: string,
    title: string,
    authors: string[],
    coverUrl: string,
    fileUrl: string,
    bookId: string,
    status: Status,
    loanData: string,
    expirationDate: string 
}