import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img
        className="movieCard__poster"
        src={movie.image}
        alt={movie.title}
      />
      <div className="movieCard__info">
        <h4>{movie.title}</h4>
      </div>
    </div>
  );
}

export default MovieCard;