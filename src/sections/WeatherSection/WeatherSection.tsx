import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import { Skeleton } from "@/components/ui/skeleton";
import { WeatherSectionProps } from "./WeatherSection.types";
import { useFetchWeather } from "./hooks";

const WeatherSection: React.FC<WeatherSectionProps> = ({ coords }) => {
  const { data, isLoading, error } = useFetchWeather(coords);
  return (
    <section className="py-4 min-h-36">
      {isLoading ? (
        <Skeleton className="h-full w-full" />
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        !!data && (
          <WeatherDisplay
            temperature={data.temperature}
            winddirection={data.winddirection}
            windspeed={data.windspeed}
            weathercode={data.weathercode}
            is_day={data.is_day}
          />
        )
      )}
    </section>
  );
};

WeatherSection.displayName = "WeatherSection";
export default React.memo(WeatherSection);
