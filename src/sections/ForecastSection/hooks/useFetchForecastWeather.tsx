import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "@/services/api";
import { DailyForecastData } from "@/services/api/forecast/types";
import { Coords } from "@/types/coords";

/**
 * Fetch the forecast weather data for the given coordinates
 * @param coords The coordinates to fetch the forecast for
 * @param forecastDays The number of days to fetch the forecast for
 * @returns The forecast weather data
 */
const useFetchForecastWeather = (
  coords: Coords | null,
  forecastDays: number
) => {
  const { latitude, longitude } = coords || {};
  return useQuery<DailyForecastData>({
    queryKey: ["forecast", longitude, latitude, forecastDays],
    queryFn: () => {
      if (!latitude || !longitude) {
        return Promise.reject(new Error("No city selected"));
      }
      return fetchForecast(latitude, longitude, forecastDays);
    },
    enabled: !!latitude && !!longitude,
  });
};

export default useFetchForecastWeather;
