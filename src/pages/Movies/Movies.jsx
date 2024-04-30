import SearchForm from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useState('');

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  console.log(searchParams);
  return (
    <>
      <SearchForm handleSubmit={handleSubmit}></SearchForm>
      <Outlet />
    </>
  );
};

export default MoviesPage;
