import type { Status } from "./loanStatus"

export type BookLoanResponseDTO = {
    idLoan: string,
    title: string,
    authors: string[],
    coverUrl: string,
    fileUrl: string,
    bookId: string,
    status: Status,
    loanDate: string,
    expectedReturnDate: string,
    actualReturnDate: string 
}