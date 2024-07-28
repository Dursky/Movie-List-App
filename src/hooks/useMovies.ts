import {useState, useCallback} from 'react';
import {useInfiniteQuery} from 'react-query';
import {getPopularMovies, searchMovies} from '../api/tmbApi';
import {Movie} from '../types/movie';

const useMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularMoviesQuery = useInfiniteQuery(
    'popularMovies',
    ({pageParam = 1}) => getPopularMovies(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    },
  );

  const searchMoviesQuery = useInfiniteQuery(
    ['searchMovies', searchQuery],
    ({pageParam = 1}) => searchMovies(searchQuery, pageParam),
    {
      enabled: !!searchQuery,
      getNextPageParam: lastPage =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    },
  );

  const movies: Movie[] = searchQuery
    ? searchMoviesQuery.data?.pages.flatMap(page => page.results) || []
    : popularMoviesQuery.data?.pages.flatMap(page => page.results) || [];

  const isLoading = searchQuery
    ? searchMoviesQuery.isLoading
    : popularMoviesQuery.isLoading;

  const loadMore = useCallback(() => {
    if (searchQuery) {
      searchMoviesQuery.fetchNextPage();
    } else {
      popularMoviesQuery.fetchNextPage();
    }
  }, [searchQuery, searchMoviesQuery, popularMoviesQuery]);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {movies, isLoading, loadMore, search};
};

export default useMovies;
