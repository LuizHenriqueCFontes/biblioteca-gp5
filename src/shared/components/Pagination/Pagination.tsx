import ResponsePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

interface Pagination {
    page: number,
    totalPages: number,
    onPageChange: (page: number) => void,
    startsAt?: 0 | 1

}

export default function Pagination(props: Pagination) {
    if(props.totalPages <= 1) {
        return null
    }

    return(
        <ResponsePagination current={props.startsAt === 0 ? props.page + 1 : props.page}
        total={props.totalPages} 
        onPageChange={props.startsAt === 0 ? (selectedPage) => props.onPageChange(selectedPage - 1) : props.onPageChange}
        maxWidth={300}
        />
    );

}