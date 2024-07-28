import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';
import useMovies from '../hooks/useMovies';
import {Movie} from '../types/movie';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {movies, isLoading, error, loadMore, search, retry} = useMovies();

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    search(text);
  };

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate('MovieDetails', {movie});
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} />
      {error ? (
        <ErrorMessage
          message="Error when fetching data about movie"
          onRetry={retry}
        />
      ) : (
        <MovieList
          movies={movies}
          onLoadMore={loadMore}
          onMoviePress={handleMoviePress}
          isLoading={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
