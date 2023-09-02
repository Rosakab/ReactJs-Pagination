import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <ul className="flex justify-center items-center">
      {pageNumbers.map((pgNumber) => (
        <li key={pgNumber}>
          <button
            className={`border-b-4  mx-2  px-3 py-2 rounded  my-4 bg-gray-300 
               ${currentPage === pgNumber ? "bg-rose-500" : ""}`}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
