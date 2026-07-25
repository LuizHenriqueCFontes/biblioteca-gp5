import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth";

export function useHomeUser() {

    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

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

    const handleLoan = () => (
        isAuthenticated ? navigate("/loan") : navigate("auth/login")
    )

    return{
        handleBookSearchCategory,

        handleBookDetails,

        handleExploreBooks,

        handleLoan
    }
}