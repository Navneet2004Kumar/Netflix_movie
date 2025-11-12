import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";
import { movies } from "./data/Movies";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner movie={movies.trending[0]} />
      <Row title="Trending Now" movies={movies.trending} />
      <Row title="Most Popular" movies={movies.mostPopular} />
      <Row title="Action" movies={movies.action} />
      <Row title="Comedy" movies={movies.comedy} />
      <Row title="Romance" movies={movies.romance} />
      <Row title="Thriller" movies={movies.thriller} />
      <Footer />
    </div>
  );
}

export default App;


