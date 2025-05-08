
import "./App.css";

import React, { useState } from "react";

function Card({ number, name, image }) {
  const [flipped, setFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <strong style={{ fontSize: "4rem" }}>{number}</strong>
        </div>
        <div className="card-back">
          {image && !imageError ? (
            <img src={image} alt={name} onError={handleImageError} />
          ) : (
            <strong>{name}</strong>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
