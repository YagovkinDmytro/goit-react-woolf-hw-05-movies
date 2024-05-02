import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Home from 'pages/Home/Home';
import Loader from './Loader/Loader';
import { lazy, Suspense } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MoviesDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
