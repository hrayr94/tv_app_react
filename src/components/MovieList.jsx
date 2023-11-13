// function MovieList({ title }) {
//   return (
//     <div className={`movie-list-container`}>
//       <h1 className={`movie-list-title`}>{title}</h1>
//       <div className={`movie-list-wrapper`}>
//         {/* Your movie list content here */}
//       </div>
//     </div>
//   );
// }

// export default MovieList;

import React, { useState } from "react";
import "../Carousel.css";

const MovieList = () => {
  const [clickCounter, setClickCounter] = useState(0);

  const handleArrowClick = (i) => {
    const movieList = document.querySelectorAll(".movie-list")[i];
    const itemNumber = movieList.querySelectorAll("img").length;
    const ratio = Math.floor(window.innerWidth / 270);

    setClickCounter((prevCounter) => {
      if (itemNumber - (4 + prevCounter) + (4 - ratio) >= 0) {
        movieList.style.transform = `translateX(${
          movieList.style.transform
            ? parseInt(movieList.style.transform.replace("px", ""), 10) - 300
            : 0
        }px)`;
        return prevCounter + 1;
      } else {
        movieList.style.transform = "translateX(0)";
        return 0;
      }
    });
  };

  return (
    <>
      <div className="movie-list-container">
        <h1 className="movie-list-title">Trending Now</h1>
        <div className="movie-list-wrapper">
          <div className="movie-list">
            {/* Add your movie list items here */}
          </div>
          <i
            className="fas fa-chevron-right arrow"
            onClick={() => handleArrowClick(0)}
          ></i>
        </div>
      </div>
      {/* Add more carousel sections as needed */}
    </>
  );
};

export default MovieList;
