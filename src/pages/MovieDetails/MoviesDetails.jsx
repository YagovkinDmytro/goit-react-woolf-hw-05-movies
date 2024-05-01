import { getMovieDetailsAPI } from 'api/dataMovies';
import Loader from 'components/Loader/Loader';
import MoviesInfo from 'components/MoviesInfo/MoviesInfo';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMoviesDetails = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getMovieDetailsAPI(movieId);
        setMoviesData(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader></Loader>}
      <MoviesInfo moviesData={moviesData}></MoviesInfo>
      {errorMessage && <h1>{errorMessage}</h1>}
      <Outlet />
    </>
  );
};

export default MoviesDetails;
