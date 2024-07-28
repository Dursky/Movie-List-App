import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetails'
>;

interface MovieDetailsScreenProps {
  route: MovieDetailsScreenRouteProp;
}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({route}) => {
  const {movie} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>
          Release Date: {movie.release_date}
        </Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average}/10</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetailsScreen;
