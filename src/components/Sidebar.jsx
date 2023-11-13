import React from "react";
import iconSearch from "../assets/icons/icon_search.png";
import iconHome from "../assets/icons/icon_home.png";
import iconTVShows from "../assets/icons/icon_tv_shows.png";
import iconMovies from "../assets/icons/icon_movies.png";
import iconGenres from "../assets/icons/icon_genres.png";
import iconWatchLater from "../assets/icons/icon_watch_later.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={iconSearch} alt="Search" className="left-menu-icon" />
      <img src={iconHome} alt="Home" className="left-menu-icon" />
      <img src={iconTVShows} alt="TV Shows" className="left-menu-icon" />
      <img src={iconMovies} alt="Movies" className="left-menu-icon" />
      <img src={iconGenres} alt="Genres" className="left-menu-icon" />
      <img src={iconWatchLater} alt="Watch Later" className="left-menu-icon" />
    </div>
  );
};

export default Sidebar;
