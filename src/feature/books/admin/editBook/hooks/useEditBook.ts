import { useEffect, useState } from "react";
import type { EditBookRequestDTO } from "../types/editBookRequestDTO";
import type { BookDetailsResponseDTO } from "../../../types/response/bookDetailsResponseDTO";

export function useEditBooks(book?: BookDetailsResponseDTO) {
    const [bookFormData, setBookFormData] = useState<EditBookRequestDTO>({title: "", authors: [], description: []});

    useEffect(() => {
        if(!book) return;

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

    const handleArrayChange = (field: keyof EditBookRequestDTO, value: string) => (
        setBookFormData((prev) => ({
            ...prev,
            [field]: [
                ...(prev[field] as string[]),
                value
            ]
        }))
    )

    return {
        bookFormData,
        setBookFormData,
        handleArrayChange,
        handleStringChange
    }

}