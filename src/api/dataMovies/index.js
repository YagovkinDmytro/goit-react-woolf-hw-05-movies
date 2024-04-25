import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?';
const API_KEY = 'a887caee868ded8d4cab2157f0a0da74';

export const getMoviesApi = async () => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${searchParams}`);
  return data;
};
