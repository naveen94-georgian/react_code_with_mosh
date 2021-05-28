import React from "react";
import Pagination from "./common/pagination";

import MoviesTable from './moviesTable';
import { paginate } from "../utils/paginate";

const MovieGrid = (props) => {
  const {
    movies,
    sortColumn,
    pageSize,
    currentPage,
    onLikeToggle,
    onDeleteClicked,
    onPageChange,
    onSort,
  } = props;

  const { length: movieCount } = movies;

  const paginatedMovies = paginate(movies, currentPage, pageSize);

  if (movieCount === 0) return <p>No movies in the database.</p>;
  return (
    <React.Fragment>
      <p>Showing {movieCount} movies in the database.</p>
      <MoviesTable
        movies={paginatedMovies}
        sortColumn={sortColumn}
        onLikeToggle={(movie) => onLikeToggle(movie)}
        onDelete={(id) => onDeleteClicked(id)}
        onSort={(path) => onSort(path)}
      />
      <Pagination
        itemCount={movieCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={(page) => onPageChange(page)}
      />
    </React.Fragment>
  );
};
 
export default MovieGrid;
