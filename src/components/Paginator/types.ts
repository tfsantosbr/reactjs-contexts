export interface PaginatorContextProps {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    onPageChange: (page: number) => void
}