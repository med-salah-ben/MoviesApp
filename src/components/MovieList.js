import React from "react";

import MovieCard from "./MovieCard";
import { Button } from "react-bootstrap";

function MovieList({ movies = [], onAddMovie = () => {} }) {
  return (
    <div className="movie-list">
      {movies.map(el => (
        <MovieCard key={el.id} movie={el} />
      ))}
      <div
        onClick={() =>
          onAddMovie({
            id: Math.random,

            title: prompt("movie title:"),
            rating: Number(prompt("movie rating:")),
            year: Number(prompt("movie year:"))
          })
        }
        className="new-movie-card"
      >
        <Button> +</Button>
      </div>
    </div>
  );
}
export default MovieList;
