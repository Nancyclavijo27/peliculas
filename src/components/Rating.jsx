import { useEffect, useState } from "react";
import "./Rating.css";

const Rating = ({ ratingOrigin, changeRating }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    changeRating(value*2)
  };
  const addRatingOrigin = function () {
    // console.log(ratingOrigin)
    let result = Math.floor(ratingOrigin/2)
    // console.log(result)
    setRating(result)
  };

  useEffect(() => {
    addRatingOrigin();
  }, []);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <span className={ratingValue <= rating ? "filled" : ""}>
              &#9733;
            </span>
            {/* &#9733; es un carácter especial que representa una estrella */}
          </label>
        );
      })}
    </div>
  );
};

export default Rating;