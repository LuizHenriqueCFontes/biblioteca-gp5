import ResponsePagination from "react-responsive-pagination";

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
        <ResponsePagination current={props.page + 1}
        total={props.totalPages} 
        onPageChange={(selectedPage) => props.onPageChange(selectedPage - 1)}
        />
    );

}