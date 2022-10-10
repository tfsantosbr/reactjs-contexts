import { useState } from 'react';
import { Paginator } from '../components/Paginator';
import { PaginatorContext } from '../contexts/PaginatorContext';

export function UserList() {
  const [currentPage, setCurrentPage] = useState(1);

  function pageChangeHandler(page: number) {
    setCurrentPage(page);
  }

  return (
    <>
      <h1>User List</h1>

      <PaginatorContext.Provider
        value={{
          currentPage,
          totalRecords: 25,
          pageSize: 10,
          onPageChange: pageChangeHandler,
        }}
      >
        <div>
          Current Page is: <strong>{currentPage}</strong>
        </div>
        <Paginator />
      </PaginatorContext.Provider>
    </>
  );
}
