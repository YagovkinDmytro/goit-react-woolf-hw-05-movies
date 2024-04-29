import { NavLink } from 'react-router-dom';

const MoviesDetails = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <h2>Title 1</h2>
        <p>text</p>
        <h3>Title 2</h3>
        <p>text</p>
        <h4>Title 4</h4>
        <p>text</p>
      </div>
      <div>
        <h5>Title 5</h5>
        <ul>
          <li>
            <NavLink to="/movies/:movieId/cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoviesDetails;
