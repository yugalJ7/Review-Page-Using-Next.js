import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [stars, setStars] = useState(5);
  return (
    <>
      {[...Array(stars)].map((star, index) => {
        let currentRating = index + 1;
        return (
          <span key={index}>
            <GoStarFill
              fill={currentRating <= (hover || rating) ? "#FFCC33" : "#DCDCDC"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(currentRating)}
              size={45}
            />
          </span>
        );
      })}
    </>
  );
};

export default StarRating;
