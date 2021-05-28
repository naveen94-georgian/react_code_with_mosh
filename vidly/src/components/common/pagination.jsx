import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount+1)
  if(pages === 1) return null;
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={currentPage === page ? "page-item active": "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
