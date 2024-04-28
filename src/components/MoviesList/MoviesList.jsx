import { useEffect, useState } from 'react';
import { getMoviesApi } from 'api/dataMovies';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        setErrorMessage('');
        const data = await getMoviesApi();
        const { results } = data;
        setMoviesData(results);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getTrandingMovies();
  }, []);

  console.log(moviesData);

  return (
    <div>
      <ul>
        {moviesData.map(({ id, title }) => (
          <li className={css['moviesList-item']} key={id}>
            <Link to="/movies/:movieId">{title}</Link>
          </li>
        ))}
      </ul>
      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default MoviesList;
