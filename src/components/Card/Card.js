import React from "react";

// styles
import "./Card.css";

const Card = ({ imgSrc, link = null, text, num }) => {
  return (
    <figure className="card" data-aos="zoom-in" data-aos-delay={num * 300}>
      <img src={imgSrc} alt={text} className="card__img" />
      <figcaption className="card__text">{text}</figcaption>
    </figure>
  );
};

export default Card;
