import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './local/home'
import AllMovies from './local/allMovies'
import Movie from './local/movie'
import Header from './local/header'
import Footer from './local/footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allMovies" element={<AllMovies />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
