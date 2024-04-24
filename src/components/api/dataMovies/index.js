import axios from 'axios';

export const getMoviesApi = async (searchValue, page) => {
  'https://api.themoviedb.org/3/movie/11?api_key=a887caee868ded8d4cab2157f0a0da74';
  '/trending/get-trending';
  const BASE_URL = 'https://api.themoviedb.org/';
  const API_KEY = 'a887caee868ded8d4cab2157f0a0da74';
  const params = new URLSearchParams({
    // q: searchValue,
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: true,
    // page: page,
    // per_page: 12,
    // key: API_KEY,
  });

  const { data } = await axios.get(`${BASE_URL}${params}`);
  return data;
};
