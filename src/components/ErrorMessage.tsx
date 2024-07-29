import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, onRetry}) => {
  return (
    <View
      style={styles.container}
      testID="retry-button"
      accessibilityLabel="Retry button">
      <Text style={styles.errorText}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText} testID="retry-text">
            Try Again
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffeeee',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default ErrorMessage;
