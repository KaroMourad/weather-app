import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "@/services/api";
import { CurrentWeatherData } from "@/services/api/forecast/types";
import { Coords } from "@/types/coords";

const useFetchWeather = (coords: Coords | null) => {
  const { latitude, longitude } = coords || {};
  const { data, isLoading, error } = useQuery<CurrentWeatherData>({
    queryKey: ["currentWeather", latitude, longitude],
    queryFn: () => {
      if (!latitude || !longitude)
        return Promise.reject(new Error("No address available"));

      return fetchWeather(latitude, longitude);
    },
    enabled: !!latitude && !!longitude,
  });

  return { data, isLoading, error };
};

export default useFetchWeather;
