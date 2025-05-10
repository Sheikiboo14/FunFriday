import "./App.css";
import React, { useState } from "react";

function Card({ number, name, image, disableFlip = false }) {
  const [flipped, setFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (!disableFlip) {
      setFlipped(!flipped);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      {!disableFlip ? (
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
      ) : (
        <div className="card no-flip">
          {image && !imageError && (
            <img src={image} alt="non-flip-card" onError={handleImageError} />
          )}
        </div>
      )}
    </div>
  );
}



export default Card;
