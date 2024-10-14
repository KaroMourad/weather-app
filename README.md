# Weather App

## Overview
This repository contains a weather dashboard application built using React and TypeScript. The app integrates with the Open-Meteo API to provide current weather data and a 5-day forecast for any city. Additionally, the app detects the user's current location and displays the weather of that location by default until the user searches for a different city.

## Features
1. **Search Functionality**: Users can search for any city to display its current weather and forecast.
2. **Current Weather**: Displays the current weather conditions (temperature, wind, etc.).
3. **5-Day Forecast**: A detailed 5-day weather forecast displayed as a list or cards.
4. **Geolocation Integration**: Automatically detects the user’s current location and shows its weather data.
5. **Geocoding Integration**: Uses the Open-Meteo Geocoding API to convert a city name to latitude and longitude.
6. **Error Handling**: Provides user-friendly error messages for invalid city names, geolocation issues, and network errors.
7. **Loading States**: Includes loading indicators during data fetching to enhance user experience.
8. **Persist Coordinates in URL**: The latitude and longitude of the selected location are persisted in the URL, allowing for shareable links.

## Technologies Used
- **Vite**: Fast build tool and development server for modern web projects.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for better code quality and developer experience.
- **shadcn/ui**: UI components library for consistent design and styling.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Query**: Manages server-side state, caching, and synchronizing weather data with API calls efficiently.
- **pnpm**: Fast, disk space-efficient package manager for managing dependencies.

## API Integration

1. **Current Weather API**  
   URL: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true`
   Parameters:
   - `latitude`: Latitude of the location.
   - `longitude`: Longitude of the location.
   - `current_weather`: Set to `true` to return current weather data.
   
   Example for London:  
   `https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true`

2. **5-Day Forecast API**  
   URL: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
   Parameters:
   - `latitude`: Latitude of the location.
   - `longitude`: Longitude of the location.
   - `daily`: Specify the weather data you want to return.
   - `timezone`: Set to `auto` to adjust for the local time zone.
   
   Example for London:  
   `https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&daily=temperature_2m_max,temperature_2m_min&timezone=auto`

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KaroMourad/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   Ensure `pnpm` is installed globally on your machine. Then, run:
   ```bash
   pnpm install
   ```

3. **Start the Application**:
   To start the development server, use:
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:5173/`.

4. **API Key**:  
   No API key is required for the Open-Meteo API.

## State Management
State management is handled using **React Query** and React’s built-in hooks (`useState`, `useEffect`). The current weather data and 5-day forecast are fetched asynchronously and stored in the state. The app also synchronizes the coordinates with the search query parameters in the URL for easier navigation and bookmarking.

## Geolocation & URL Persistence
The app automatically detects the user's current location on page load using the browser's geolocation feature. If geolocation is allowed, the app shows the weather of the user’s current location. The coordinates (latitude and longitude) are then persisted in the URL search parameters. When a user searches for another city, the app updates the URL with the new location’s coordinates. This enables easy sharing of the current weather and forecast with a shareable URL.

## Performance Optimization
The app leverages:
- **React Query** to handle data fetching, caching, and synchronizing the state efficiently.
- **Memoization** to avoid unnecessary re-fetching and re-rendering of weather data.
- **Loading Indicators** to enhance user experience during API calls.

## Error Handling
User-friendly error messages are shown in case of invalid city names, geolocation permission issues, or network problems.

## Future Improvements
- **Offline Mode**: Use local storage or service workers to cache weather data for offline access.
- **Unit Testing**: Add Jest or other testing frameworks for unit testing components.
- **Advanced UI Enhancements**: Further improve card design and animations for the forecast.

## Links
- **Live Demo**: https://weather-app-gilt-five-82.vercel.app

## License
This project is licensed under the MIT License.