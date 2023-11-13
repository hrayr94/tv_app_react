import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import FeaturedContent from "./components/FeaturedContent";
import MovieList from "./components/MovieList";
import TrendingNowCarousel from "./components/TrendingNowCarousel"; // Import the TrendingNowCarousel component
import f1 from "./assets/f1.png";
import ft1 from "./assets/ft1.png";
import data from "../data.json";
import Carousel from "./components/Carousel";

const App = () => {
  const { Featured, TendingNow } = data;

  const [trendingNowData, setTrendingNowData] = useState(TendingNow);
  const [featuredContentData, setFeaturedContentData] = useState({
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('${f1}')`,
    title: ft1,
    description: Featured.Description,
    buttonText: "▶ Play",
    category: Featured.Category,
    releaseYear: Featured.ReleaseYear,
    mpaRating: Featured.MpaRating,
    videoUrl: Featured.VideoUrl,
  });

  const handleTrendingItemClick = (movie) => {
    // Update the featured content data
    setFeaturedContentData({
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('${movie.CoverImage}')`,
      title: movie.Title,
      description: movie.Description,
      buttonText: "▶ Play",
      category: movie.Category,
      releaseYear: movie.ReleaseYear,
      mpaRating: movie.MpaRating,
      videoUrl: movie.VideoUrl,
    });

    // Save movie ID in session storage
    sessionStorage.setItem("lastClickedMovieId", movie.Id);
  };

  const newReleasesData = [
    {
      title: "NEW RELEASES",
      items: [
        {
          imgSrc: "img/1.jpeg",
          title: "New Movie 1",
          description: "Lorem ipsum...",
          buttonText: "Play",
        },
        // Add other new release items as needed
      ],
    },
    // Add other MovieList data as needed
  ];

  useEffect(() => {
    // Sort trendingNowData based on last clicked (seen) videos
    const lastClickedMovieId = sessionStorage.getItem("lastClickedMovieId");
    if (lastClickedMovieId) {
      const sortedData = [...trendingNowData].sort((a, b) => {
        if (a.Id === lastClickedMovieId) return -1;
        if (b.Id === lastClickedMovieId) return 1;
        return 0;
      });
      setTrendingNowData(sortedData);
    }
  }, [trendingNowData]);

  return (
    <div>
      <Sidebar />
      <div className="container">
        <div className="content-container">
          <FeaturedContent {...featuredContentData} />
          <TrendingNowCarousel
            movies={trendingNowData}
            onItemClick={handleTrendingItemClick}
          />
          <MovieList title="NEW RELEASES" items={newReleasesData[0].items} />
        </div>
      </div>
    </div>
  );
};

export default App;
