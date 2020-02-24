import React, { Component } from "react";
import "./Movie.css";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";

const TimeOut = {
  id: 1,
  title: "Time Out",
  rating: 4,
  image:
    "https://i.pinimg.com/originals/8a/4b/21/8a4b21990ec65e1bec96465325f6db10.jpg",
  year: 2011
};

const onePiece = {
  id: 2,
  title: "One Piece",
  rating: 5,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoUkyGfMabfdOC-vCGrNUOIjlybSuUeljxmea8uIljqT_ts-9W",
  year: 1999
};
const xMan = {
  id: 3,
  title: "X Man",
  rating: 2,

  year: 2013
};

const moviesToDisplay = [TimeOut, onePiece, xMan];

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 0,
      movies: moviesToDisplay,
      titleFilter: ""
    };
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
      //movies: [...this.state.movies, newMovie]
    });
  }

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  }

  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRating => {
              this.setState({
                minRatingFilter: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-main">
          <MovieList
            movies={this.getVisibleMovies()}
            onAddMovie={newMovie => this.addNewMovie(newMovie)}
          />
        </main>
      </div>
    );
  }
}
export default MovieApp;
