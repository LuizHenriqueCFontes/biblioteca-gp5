import { useNavigate } from "react-router-dom";

export function useHomeUser() {

    const navigate = useNavigate();

    const handleBookSearchCategory = (idsCategories: string) =>(
        navigate("/search/books", {
            state: {
                categories: [idsCategories]
            }
        })
    );

    return{
        handleBookSearchCategory
    }
}