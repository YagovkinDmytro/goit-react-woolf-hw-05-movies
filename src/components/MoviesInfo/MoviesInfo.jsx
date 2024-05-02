import { useRef } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

const MoviesInfo = ({ moviesData }) => {
  const { title, vote_average, poster_path, overview, genres } = moviesData;
  const { movieId } = useParams();
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');

  return (
    <>
      <div>
        <Link to={goBack.current}>Go back</Link>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <h2>{title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        {overview !== '' ? <p>{overview}</p> : <p>N/A</p>}
        <h4>Genres</h4>
        <div>
          {genres && genres.length > 0 ? (
            genres.map(({ id, name }) => <p key={id}>{name}</p>)
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
      <div>
        <h5>Aditional information</h5>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoviesInfo;
