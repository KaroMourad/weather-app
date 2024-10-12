import React from "react";
import { ForecastSectionProps } from "./ForecastSection.types";
import ForecastDisplay from "./ForecastDisplay";
import { useFetchForecastWeather } from "./hooks";
import ForecastSkeleton from "./ForecastSkeleton";

const ForecastSection: React.FC<ForecastSectionProps> = ({ coords }) => {
  const { data, isLoading, error } = useFetchForecastWeather(coords);
  return (
    <section className="py-4 overflow-auto">
      {isLoading ? (
        <ForecastSkeleton />
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        !!data && (
          <ForecastDisplay
            temperature_2m_max={data.temperature_2m_max}
            temperature_2m_min={data.temperature_2m_min}
            time={data.time}
          />
        )
      )}
    </section>
  );
};

ForecastSection.displayName = "ForecastSection";
export default React.memo(ForecastSection);
