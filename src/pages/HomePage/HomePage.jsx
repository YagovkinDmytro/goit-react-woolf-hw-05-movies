import { useEffect, useState } from 'react';
import { getMoviesApi } from 'api/dataMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        setErrorMessage('');
        const data = await getMoviesApi();
        const { results } = data;
        setMovieData(results);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getTrandingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movieData={movieData}></MoviesList>
      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default HomePage;
