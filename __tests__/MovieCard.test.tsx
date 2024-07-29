import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MovieCard from '../src/components/MovieCard';

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  poster_path: '/test-poster.jpg',
  release_date: '2024-01-01',
  overview: 'Test overview',
  vote_average: 7.5,
};

describe('MovieCard', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const {getByText, getByTestId} = render(
      <MovieCard movie={mockMovie} onPress={onPress} />,
    );

    expect(getByText('Test Movie')).toBeTruthy();
    expect(getByText('2024-01-01')).toBeTruthy();
    expect(getByTestId('movie-card')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <MovieCard movie={mockMovie} onPress={onPress} />,
    );

    fireEvent.press(getByTestId('movie-card'));
    expect(onPress).toHaveBeenCalledWith(mockMovie);
  });
});
