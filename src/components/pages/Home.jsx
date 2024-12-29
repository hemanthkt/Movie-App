import React, { useState } from "react";
import MovieCard from "../MovieCard";
import "../../css/Home.css";
function Home() {
  const movies = [
    { id: 1, title: "john Wick", release_date: "2020" },
    { id: 2, title: "john Wick", release_date: "2020" },
    { id: 3, title: "john Wick", release_date: "2020" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handelSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("----");
  };
  return (
    <div className="home">
      <form onSubmit={handelSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            )
        )}
      </div>
    </div>
  );
}

export default Home;
