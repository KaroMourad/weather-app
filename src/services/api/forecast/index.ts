import { CurrentWeatherData, DailyForecastData } from "./types";

const BASE_API_URL = "https://api.open-meteo.com/v1";
const FORECAST_API_URL = `${BASE_API_URL}/forecast`;

/**
 * Fetch current weather data from the API
 * @param latitude
 * @param longitude
 * @returns object containing current weather details
 * @throws An error if the request fails or no results are found
 */
export const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<CurrentWeatherData> => {
  try {
    const res = await fetch(
      `${FORECAST_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const data = await res.json();
    if (!data.current_weather) {
      throw new Error("No weather data found");
    }
    return data.current_weather;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

/**
 * Fetch forecast data from the API
 * @param latitude
 * @param longitude
 * @returns object containing forecast details
 * @throws An error if the request fails or no results are found
 */
export const fetchForecast = async (
  latitude: number,
  longitude: number
): Promise<DailyForecastData> => {
  try {
    const res = await fetch(
      `${FORECAST_API_URL}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const data = await res.json();
    if (!data.daily) {
      throw new Error("No forecast data found");
    }
    return data.daily;
  } catch (error) {
    throw new Error("Failed to fetch forecast data");
  }
};
