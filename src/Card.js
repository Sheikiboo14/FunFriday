import React, { useState } from "react";
import "./App.css";

function Card({ number, name, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  console.log("Image Path:", image); // Debug log

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <strong style={{ fontSize: "4rem" }}>{number}</strong>
          {/* <p>{name}</p> */}
        </div>
        <div className="card-back">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
