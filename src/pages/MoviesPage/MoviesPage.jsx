import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <>
      <div>Movies</div>
      <Outlet />
    </>
  );
};

export default MoviesPage;
