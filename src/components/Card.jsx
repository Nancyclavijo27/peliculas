import React, { useState } from "react";
import "./Card.css";
import { Link } from 'react-router-dom'
import Rating from "./Rating";

export default function Card({ movie }) {
  // console.log(movie)

  const [rating,setRating] = useState(movie.vote_average)

  function changeRating(newRating){
    setRating(newRating)
  }

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-img" />
      <div className="card-info">
        <Link className="linki" to={`/detail/${movie.id}/${rating}`}>
          <h2 className="card-title">{movie.title.slice(0,18)}</h2>
        </Link>
        <p className="card-release">{movie.release_date}</p>
        <p className="card-rating">{rating}/10</p>
        <Rating ratingOrigin={rating} changeRating={changeRating}></Rating>
      </div>
    </div>
  );
}

/*
EXTRA:
Pasar por segundo params el rating new para que el componente 
Detail lo pueda usar y actualizar cuando este sea cambiado
*/