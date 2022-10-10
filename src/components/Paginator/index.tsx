import { useContext } from 'react';
import { PaginatorContext } from './context';

export function Paginator() {
  const { currentPage, pageSize, totalRecords, onPageChange } =
    useContext(PaginatorContext);

  const totalPageItems = [];
  const totalPages = Math.ceil(totalRecords / pageSize);

  for (let index = 1; index <= totalPages; index++) {
    totalPageItems.push(index);
  }

  return (
    <div>
      {totalPageItems.map((item, index) => {
        return (
          <span key={index}>
            <button onClick={() => onPageChange(item)}>
              {currentPage == item ? <strong>{item}</strong> : item}
            </button>
          </span>
        );
      })}
    </div>
  );
}
