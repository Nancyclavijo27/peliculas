import React from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards({ movies }) {
  // console.log(movies)
  return (
    <div className="cards">
      {movies && movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}