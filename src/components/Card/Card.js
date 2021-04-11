import React from "react";

// styles
import "./Card.css";

const Card = ({ imgSrc, link = null, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={text} className="card__img" />
      <p className="card__text">{text}</p>
    </div>
  );
};

export default Card;
