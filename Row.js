import React from 'react';
import './Row.css';
import MovieCard from './MovieCard';

function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
