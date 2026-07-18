import { useNavigate } from "react-router-dom";

export function useHomeUser() {

    const navigate = useNavigate();

    const handleBookSearchCategory = (idsCategories: string) => (
        navigate("/search/books", {
            state: {
                categories: [idsCategories]
            }
        })
    );

    const handleBookDetails = (idBook: string) => (
        navigate(`/book/${idBook}`)
    );

    const handleExploreBooks = () => (
        navigate("/search/books")
    );

    return{
        handleBookSearchCategory,

        handleBookDetails,

        handleExploreBooks
    }
}