import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "@/services/api";
import { CurrentWeatherData } from "@/services/api/forecast/types";
import { Coords } from "@/types/coords";

const MINUTE = 1000 * 60;

/**
 * Fetch the current weather based on the coordinates.
 * @param coords The coordinates to fetch the weather for
 * @param refetchInterval The interval to refetch the data
 * @returns The current weather data
 */
const useFetchWeather = (
  coords: Coords | null,
  refetchInterval: number = MINUTE
) => {
  const { latitude, longitude } = coords || {};
  return useQuery<CurrentWeatherData>({
    queryKey: ["currentWeather", latitude, longitude],
    queryFn: () => {
      if (!latitude || !longitude)
        return Promise.reject(new Error("No address available"));

      return fetchWeather(latitude, longitude);
    },
    enabled: !!latitude && !!longitude,
    refetchInterval,
  });
};

export default useFetchWeather;
