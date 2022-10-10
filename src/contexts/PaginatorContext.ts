import { createContext } from "react";

export interface PaginatorContextProps {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    onPageChange: (page: number) => void
}

export const PaginatorContext = createContext({} as PaginatorContextProps);
