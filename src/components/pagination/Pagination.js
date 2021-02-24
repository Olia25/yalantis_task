import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, setPage, selectedPage }) => {
  return (
    <div>
      <ReactPaginate
        containerClassName="pagination"
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={setPage}
        initialPage={selectedPage > 0 ? selectedPage - 1 : selectedPage}
      />
    </div>
  );
};

export default Pagination;
