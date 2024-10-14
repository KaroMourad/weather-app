import React from "react";
import { ForecastSectionProps } from "./ForecastSection.types";
import ForecastDisplay from "./ForecastDisplay";
import { useFetchForecastWeather } from "./hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "@/components";
import { useCoordsParam } from "@/hooks";

const FORECAST_DAYS = 5;

const ForecastSection: React.FC<ForecastSectionProps> = () => {
  const { coordsParam } = useCoordsParam();
  const { data, isLoading, error } = useFetchForecastWeather(
    coordsParam,
    FORECAST_DAYS
  );
  return coordsParam ? (
    <ErrorBoundary>
      <section className="mt-4 flex flex-col flex-1">
        <h2 className="text-lg mb-2">{FORECAST_DAYS} Day Forecast</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 w-full">
            {Array.from({ length: FORECAST_DAYS }).map((_, index) => (
              <Skeleton
                key={index}
                className="min-h-28 min-w-full md:min-w-52"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          !!data && <ForecastDisplay data={data} />
        )}
      </section>
    </ErrorBoundary>
  ) : null;
};

ForecastSection.displayName = "ForecastSection";
export default React.memo(ForecastSection);
