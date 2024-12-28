import React, { useState } from "react";
import MovieCard from "../MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "john Wick", release_date: "2020" },
    { id: 2, title: "john Wick", release_date: "2020" },
    { id: 3, title: "john Wick", release_date: "2020" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handelSearch = () => {
    alert(searchQuery);
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
        <button type="submit" className="search-button"></button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
