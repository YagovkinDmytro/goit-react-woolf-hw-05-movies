import { getMovieDetails } from 'api/dataMovies';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getSearchMovies = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getMovieDetails(query);
        const { results } = data;
        setMoviesData(results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovies();
  }, [searchParams, query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      {isLoading && <Loader></Loader>}
      <SearchForm handleSubmit={handleSubmit}></SearchForm>
      {query && <MoviesList moviesData={moviesData}></MoviesList>}
      {errorMessage && <h1>{errorMessage}</h1>}
      <Outlet />
    </>
  );
};

export default MoviesPage;
