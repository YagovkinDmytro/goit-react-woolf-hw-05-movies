import css from './Movies.module.css';

const MoviesPage = () => {
  return (
    <>
      <div>
        <form className={css['search-form']}>
          <input
            className={css['search-imput']}
            name="search"
            type="text"
            autoComplete="off"
            placeholder="Search movies"
          />
          <button type="submit" className={css['search-button-submit']}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default MoviesPage;
