import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MovieDetails/MoviesDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

export default App;
