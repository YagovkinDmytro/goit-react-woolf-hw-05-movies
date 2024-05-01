import MoviesList from 'components/MoviesList/MoviesList';
import { getMoviesApi } from 'api/dataMovies';
import css from './Home.module.css';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getMoviesApi();
        const { results } = data;
        setMoviesData(results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrandingMovies();
  }, []);

  return (
    <div className={css['home-page']}>
      {isLoading && <Loader></Loader>}
      <h2 className={css['home-page-title']}>Trending today</h2>
      <MoviesList moviesData={moviesData} />
      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default HomePage;
