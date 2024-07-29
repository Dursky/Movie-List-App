import React from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {Movie} from '../types/movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  onLoadMore: () => void;
  onMoviePress: (movie: Movie) => void;
  isLoading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  onLoadMore,
  onMoviePress,
  isLoading,
}) => {
  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }
    return (
      <ActivityIndicator style={styles.loader} testID="loading-indicator" />
    );
  };

  return (
    <FlatList
      testID="movie-list"
      data={movies}
      renderItem={({item}) => <MovieCard movie={item} onPress={onMoviePress} />}
      keyExtractor={item => item.id.toString()}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 20,
  },
});

export default MovieList;
