import React from "react";

const MovieListItem = ({ imgSrc, title, description, buttonText }) => {
  return (
    <div className="movie-list-item">
      <img className="movie-list-item-img" src={imgSrc} alt="" />
      <span className="movie-list-item-title">{title}</span>
      <p className="movie-list-item-desc">{description}</p>
      <button className="movie-list-item-button">{buttonText}</button>
    </div>
  );
};

export default MovieListItem;
