import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  const [searchParams, setSearchParams] = useState('');

  const handleSubmitForm = evt => {
    evt.preventDefault();
    handleSubmit(searchParams);
    resetForm();
  };

  const handleChange = evt => {
    setSearchParams(evt.target.value);
  };

  const resetForm = () => {
    setSearchParams('');
  };
  return (
    <div>
      <form className={css['search-form']} onSubmit={handleSubmitForm}>
        <input
          value={searchParams}
          onChange={evt => handleChange(evt)}
          className={css['search-imput']}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <button type="submit" className={css['search-button-submit']}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
