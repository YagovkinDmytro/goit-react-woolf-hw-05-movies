import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={css['navigation']}>
        <ul className={css['navigation-list']}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
