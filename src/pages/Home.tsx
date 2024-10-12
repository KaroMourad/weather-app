import React, { useCallback } from "react";
import { useGetCoords } from "@/hooks";
import { ErrorBoundary, Loading } from "@/components";
import { CitySuggestion } from "@/services/api/geocoding/types";

const SearchCitySection = React.lazy(
  () => import("@/sections/SearchCitySection/SearchCitySection")
);
const WeatherSection = React.lazy(
  () => import("@/sections/WeatherSection/WeatherSection")
);
const ForecastSection = React.lazy(
  () => import("@/sections/ForecastSection/ForecastSection")
);
const AddressSection = React.lazy(
  () => import("@/sections/AddressSection/AddressSection")
);

function Home() {
  const { coords, setCoords, setCurrentCoords } = useGetCoords();

  const onCitySelect = useCallback((city: CitySuggestion) => {
    setCoords({ latitude: city.latitude, longitude: city.longitude });
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex flex-col flex-1 w-full h-full min-h-dvh max-w-7xl mx-auto">
        {coords ? (
          <>
            <SearchCitySection
              onCitySelect={onCitySelect}
              onSetCurrentCoords={setCurrentCoords}
            />
            <AddressSection coords={coords} />
            <WeatherSection coords={coords} />
            <ForecastSection coords={coords} />
          </>
        ) : (
          <Loading text="Loading weather data" />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default Home;
