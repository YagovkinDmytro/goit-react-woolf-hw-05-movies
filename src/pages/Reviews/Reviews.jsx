import { getReviewsDetailsAPI } from 'api/dataMovies';
import Loader from 'components/Loader/Loader';
import ReviewsInfo from 'components/ReviewsInfo/ReviewsInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getReviewsDetails = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const data = await getReviewsDetailsAPI(movieId);
        setReviewsData(data.results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader></Loader>}
      <ReviewsInfo reviewsData={reviewsData} />
      {errorMessage && <h1>{errorMessage}</h1>}
    </>
  );
};

export default Reviews;
