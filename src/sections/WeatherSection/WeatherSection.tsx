import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import { Skeleton } from "@/components/ui/skeleton";
import { WeatherSectionProps } from "./WeatherSection.types";
import { useFetchWeather } from "./hooks";
import { ErrorBoundary } from "@/components";

const WeatherSection: React.FC<WeatherSectionProps> = ({ coords }) => {
  const { data, isLoading, error } = useFetchWeather(coords);
  return (
    <ErrorBoundary>
      <section className="mt-4 min-h-36">
        {isLoading ? (
          <Skeleton className="h-full min-h-36 w-64" />
        ) : error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          !!data && <WeatherDisplay data={data} />
        )}
      </section>
    </ErrorBoundary>
  );
};

WeatherSection.displayName = "WeatherSection";
export default React.memo(WeatherSection);
