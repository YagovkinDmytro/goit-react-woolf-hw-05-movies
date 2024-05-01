import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a887caee868ded8d4cab2157f0a0da74';

export const getMoviesTrendingAPI = async () => {
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

export const getMovieSearchAPI = async query => {
  const andPointDetails = '/search/movie?';
  const searchParams = new URLSearchParams({
    query,
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(
    `${BASE_URL}${andPointDetails}${searchParams}`
  );
  return data;
};

export const getMovieDetailsAPI = async query => {
  const andPointDetails = `/movie/${query}?`;
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(
    `${BASE_URL}${andPointDetails}${searchParams}`
  );
  return data;
};

export const getCastDetailsAPI = async query => {
  const andPointDetails = `/movie/${query}/credits?`;
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(
    `${BASE_URL}${andPointDetails}${searchParams}`
  );
  return data;
};

export const getReviewsDetailsAPI = async query => {
  const andPointDetails = `/movie/${query}/reviews?`;
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(
    `${BASE_URL}${andPointDetails}${searchParams}`
  );
  return data;
};
