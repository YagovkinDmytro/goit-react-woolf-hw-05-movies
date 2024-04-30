import MoviesList from 'components/MoviesList/MoviesList';
import { getMoviesApi } from 'api/dataMovies';
import css from './Home.module.css';
import { useEffect, useState } from 'react';

const HomePage = () => {
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
    <div className={css['home-page']}>
      <h2 className={css['home-page-title']}>Trending today</h2>
      <MoviesList moviesData={moviesData} />
      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default HomePage;
