// import { useEffect, useState } from 'react';
// import { getMoviesApi } from 'api/dataMovies';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ moviesData, idMovie }) => {
  return (
    <div>
      <ul>
        {moviesData.map(({ id, title }) => (
          <li className={css['moviesList-item']} key={id}>
            <Link to="/movies/:movieId">{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
