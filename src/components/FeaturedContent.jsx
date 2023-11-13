import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ movies }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.coverImage} alt={movie.title} />
          </div>
        ))}
    </Slider>
  );
};

const FeaturedContent = ({
  backgroundImage,
  title,
  description,
  buttonText,
  movies,
}) => {
  return (
    <div className="featured-content" style={{ background: backgroundImage }}>
      <img className="featured-title" src={title} alt="" />
      <p className="featured-desc">{description}</p>
      <button className="featured-button">{buttonText}</button>
      <button className="featured-button-info">More Info</button>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default FeaturedContent;
