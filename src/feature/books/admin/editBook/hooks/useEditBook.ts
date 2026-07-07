import { useEffect, useState } from "react";
import type { EditBookRequestDTO } from "../types/request/editBookRequestDTO";
import type { BookDetailsResponseDTO } from "../../../types/response/bookDetailsResponseDTO";
import { useMutation } from "@tanstack/react-query";
import { adminBooksService } from "../../services/adminBookService";
import type { EditBookMutationRequest } from "../types/request/editBookMutationRequest";

export function useEditBooks(book?: BookDetailsResponseDTO) {
    const [originalBookData, setOriginalBookData] = useState<EditBookRequestDTO>({title: "", authors: [], description: []});
    const [bookFormData, setBookFormData] = useState<EditBookRequestDTO>({title: "", authors: [], description: []});

    useEffect(() => {
        if(!book) return;

        setOriginalBookData({
            title: book.title,
            authors: book.authors,
            description: book.description
        })

        setBookFormData({
            title: book.title,
            authors: book.authors,
            description: book.description,
        })
    }, [book]);

    const handleStringChange = (field: keyof EditBookRequestDTO, value: string) => (
        setBookFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    )

    const handleDescriptionChange = (field: keyof EditBookRequestDTO, value: string) => (
        setBookFormData((prev) => ({
            ...prev,
            [field]: [
                value
            ]
        }))
    )

    const handleAddAuthorEmpty = () => (
        setBookFormData((prev) => ({
            ...prev,
            authors: [
                ...prev.authors,
                ""
            ]
        }))
    )

    const handleEditAuthors = (index: number, value: string) => (
        setBookFormData((prev) => ({
            ...prev,
            authors: prev.authors.map((author, i) => i === index ? value : author)
        }))
    )

    const handleDeleteAuthor = (index: number) => (
        setBookFormData((prev) => ({
            ...prev,
            authors: prev.authors.filter((_, i) => i !== index)
        }))
    )

    const editBook = useMutation({
        mutationFn: (request: EditBookMutationRequest) => adminBooksService.editBook(request.id, request.playload)
    })

    return {
        bookFormData,
        handleDescriptionChange,
        handleStringChange,
        handleAddAuthorEmpty,
        handleEditAuthors,
        handleDeleteAuthor,
        originalBookData,
        editBook: editBook.mutateAsync
    }

}