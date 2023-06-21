import { useState } from "react";
import "./Carousel.css";

import { Link } from "react-router-dom";

const Carousel = ({ popular_movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(popular_movies)

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? popular_movies.length - 5 : currentIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(
      currentIndex === popular_movies.length - 5 ? 0 : currentIndex + 1
    );
  };
  
  const movies = popular_movies || []; // add this line to avoid undefined popular_movies
  
  const slicedMovies = movies.slice(currentIndex, currentIndex + 5); // access the sliced Movies from movies instead of popular_movies
  return (
    <div className="carousel">
      <div className="carousel__cards">
        {slicedMovies &&
          slicedMovies.map((movie) => (
            <div key={movie.id} className="carousel__card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Link className="linki" to={`/detail/${movie.id}/${movie.vote_average}`}>
                <h3>{movie.title.slice(0, 22)}</h3>
              </Link>

              <p>{movie.overview.slice(0, 30) + " . . ."}</p>
            </div>
          ))}
      </div>
      <div className="carousel__controls">
        <button onClick={handlePrev}>&#8249;</button>
        <button onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;