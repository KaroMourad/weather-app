import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "@/services/api";
import { DailyForecastData } from "@/services/api/forecast/types";
import { Coords } from "@/types/coords";

const useFetchForecastWeather = (coords: Coords | null) => {
  const { latitude, longitude } = coords || {};
  const { data, isLoading, error } = useQuery<DailyForecastData>({
    queryKey: ["forecast", longitude, latitude],
    queryFn: () => {
      if (!latitude || !longitude) {
        return Promise.reject(new Error("No city selected"));
      }
      return fetchForecast(latitude, longitude);
    },
    enabled: !!latitude && !!longitude,
  });

  return { data, isLoading, error };
};

export default useFetchForecastWeather;
