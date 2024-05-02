import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ moviesData }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesData.map(({ id, title }) => (
          <li className={css['moviesList-item']} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
