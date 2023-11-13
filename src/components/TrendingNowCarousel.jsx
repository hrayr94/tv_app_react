import React, { useState } from "react";

const TrendingNowCarousel = ({ movies, onItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    onItemClick(movies[index]);
  };

  return (
    <div>
      {movies.slice(0, 8).map((movie, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          <img src={movie.CoverImage} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default TrendingNowCarousel;
