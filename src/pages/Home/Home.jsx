import MoviesList from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const HomePage = () => {
  return (
    <div className={css['home-page']}>
      <h2 className={css['home-page-title']}>Trending today</h2>
      <MoviesList />
    </div>
  );
};

export default HomePage;
