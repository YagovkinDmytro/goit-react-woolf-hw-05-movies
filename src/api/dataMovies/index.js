import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a887caee868ded8d4cab2157f0a0da74';

export const getMoviesApi = async () => {
  const andPointTrending = '/trending/movie/day?';
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(
    `${BASE_URL}${andPointTrending}${searchParams}`
  );
  return data;
};

// export const getMovieDetails = async () => {
//   const andPointDetails = `/movie/${movie_id}?`;
//   const searchParams = new URLSearchParams({
//     language: 'en-US',
//     api_key: API_KEY,
//   });
//   const { data } = await axios.get(
//     `${BASE_URL}${andPointDetails}${searchParams}`
//   );
//   return data;
// };
