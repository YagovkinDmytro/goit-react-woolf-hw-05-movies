import { getCastDetailsAPI } from 'api/dataMovies';
import CastInfo from 'components/CastInfo/CastInfo';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getCastDetails = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getCastDetailsAPI(movieId);
        setCastData(data.cast);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader></Loader>}
      <CastInfo castData={castData}></CastInfo>
      {errorMessage && <h1>{errorMessage}</h1>}
    </>
  );
};

export default Cast;
