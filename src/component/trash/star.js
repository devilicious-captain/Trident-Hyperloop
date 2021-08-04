import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star() {
  const [star, setStar] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="stars">
      {[...Array(5)].map((stars, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setStar(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || star) ? "#ffc107" : "#e4e5e9"}
              // size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <span
        style={{
          textAlign: "center",
          marginLeft: "5px",
        }}
      >
        {star ? `${star} star` : null}
      </span>
    </div>
  );
}

export default Star;
