import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ rowsPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / rowsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination justify-content-center pagination-sm'>
        {pageNumbers.map(num => (
          <li key={num} className='page-item'>
            <a onClick={() => paginate(num)} href='!#' className='page-link'>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Pagination;
