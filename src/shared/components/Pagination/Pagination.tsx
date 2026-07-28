import ResponsePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

interface Pagination {
    page: number,
    totalPages: number,
    onPageChange: (page: number) => void 

}

export default function Pagination(props: Pagination) {
    if(props.totalPages <= 1) {
        return null
    }

    return(
        <ResponsePagination current={props.page}
        total={props.totalPages} 
        onPageChange={props.onPageChange}
        maxWidth={500}
        />
    );

}