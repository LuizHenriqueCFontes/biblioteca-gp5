import type { Status } from "./loanStatus"

export type BookLoanResponseDTO = {
    idLoan: string,
    title: string,
    bookId: string,
    status: Status,
    loanData: string,
    expirationDate: string 
}