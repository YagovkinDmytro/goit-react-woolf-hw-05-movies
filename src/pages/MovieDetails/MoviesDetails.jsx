import { NavLink } from 'react-router-dom';

const MoviesDetails = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <h2></h2>
        <p></p>
        <h3></h3>
        <p></p>
        <h4></h4>
        <p></p>
      </div>
      <div>
        <h5>
          <ul>
            <li>
              <NavLink to="/movies/:movieId/cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
            </li>
          </ul>
        </h5>
      </div>
    </>
  );
};

export default MoviesDetails;
