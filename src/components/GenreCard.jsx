import React from 'react';
import { showGenreColors } from '../utils';

function GenreCard({ children }) {
  const genre = children; 

  return (
    <div
      className='genre-tile'
      style={{
        color: showGenreColors?.[genre]?.color || 'black',
        background: showGenreColors?.[genre]?.background || '#e6e2e2ff',
      }}
    >
      <p>{genre}</p>
    </div>
  );
}

export default GenreCard;
