import React, { Component } from "react";
import "./App.css";
import MovieGrid from "./components/movie-grid";
import ListGroup from "./components/common/list-group";

import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import _ from "lodash";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All Genre",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDeleteClicked(id) {
    const movies = this.state.movies;
    let movieInDb = movies.find((m) => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    this.setState({ movies });
  }

  handleLikeToggle(movie) {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  handleGenreSelected(genre) {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort(sortColumn) {
    this.setState({ sortColumn });
  }

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre !== "All Genre"
        ? allMovies.filter((movie) => movie.genre.name === selectedGenre)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    return (
      <main className="pt-3 container">
        <div className="row">
          <div className="col-md-2">
            <ListGroup
              genres={genres}
              selectedGenre={selectedGenre}
              onItemSelected={(genre) => this.handleGenreSelected(genre)}
            />
          </div>
          <div className="col-md-10">
            <MovieGrid
              movies={sorted}
              pageSize={pageSize}
              currentPage={currentPage}
              onDeleteClicked={(id) => this.handleDeleteClicked(id)}
              onLikeToggle={(movie) => this.handleLikeToggle(movie)}
              onPageChange={(page) => this.handlePageChange(page)}
              onSort={(path) => this.handleSort(path)}
              sortColumn={sortColumn}
            ></MovieGrid>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
