import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
