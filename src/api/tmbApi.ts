import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import {API_KEY} from '@env';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page: number = 1) => {
  const response = await api.get('/movie/popular', {params: {page}});
  return response.data;
};

export const searchMovies = async (query: string, page: number = 1) => {
  const response = await api.get('/search/movie', {params: {query, page}});
  return response.data;
};

export const getMovieDetails = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};
