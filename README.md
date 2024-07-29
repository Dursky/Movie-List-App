# Movie App

Movie App is a mobile application built using React Native and TypeScript, utilizing The Movie Database (TMDB) API to display information about movies.

## Features

- Browse popular movies
- Search for movies
- View movie details
- Infinite scrolling / load more movies

## Requirements

- Node.js (version 12 or newer)
- npm (usually installed with Node.js)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Project Setup

1. Clone the repository:

```
   git clone https://github.com/Dursky/Movie-List-App
   cd Movie-List-App
```

2. Install dependencies:
   npm install
3. Obtain TMDB API key:

- Visit [TMDB](https://www.themoviedb.org/) and create an account
- Go to account settings and generate a new API key

4. Create a `.env` file in the project root and add your API key:
   TMDB_API_KEY=your_api_key_here
5. Install pods for iOS:
   cd ios && pod install && cd ..

## Running the App

### Android

1. Start an Android emulator or connect a device with USB debugging enabled
2. Run the app:
   `npx react-native run-android`

### iOS

1. Start an iOS simulator or connect an iOS device
2. Run the app:
   `npx react-native run-ios`

## Project Structure

```
movie-app/
├── src/
│ ├── api/
│ ├── components/
│ ├── navigation/
│ ├── screens/
│ ├── types/
│ ├── hooks/
│ └── utils/
├── App.tsx
├── .env
└── package.json
```

## Testing

To run tests:
`npm test`
