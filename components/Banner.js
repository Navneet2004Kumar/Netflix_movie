
import React from 'react';
import './Banner.css';
import Stranger from '../images/stranger.png'; 

function Banner({ movie }) {
  if (!movie) return null;


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${Stranger})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '448px', 
        minHeight: '448px',
      }}
    >
      <div className="banner__contents">
        {/* Movie Title */}
        <h1 className="banner__title">{movie.title || movie.name}</h1>

        {/* Buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* Movie Description */}
        <h1 className="banner__description">
          {truncate(movie.description, 150)}
        </h1>
      </div>

      {/* Fade effect at bottom */}
      <div className="banner--fadeBottom" />
    </header>
  );
}


export default Banner;
