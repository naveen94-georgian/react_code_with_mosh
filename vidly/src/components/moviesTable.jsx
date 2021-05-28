import Like from "./common/like-component";
import React, { Component } from "react";
import Table from "./common/table";

const MoviesTable = ({ movies, onLikeToggle, onDelete, onSort, sortColumn }) => {
  const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like
            onLikeToggle={() => onLikeToggle(movie)}
            liked={movie.liked}
          ></Like>
        ),
      },
      {
        key: "delete",
        content: movie => (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(movie._id)}
          >
            Delete
          </button>
        ),
      },
    ];
  return ( <Table
        columns={columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={(sortColumn) => onSort(sortColumn)}
      ></Table> );
}
 
export default MoviesTable;