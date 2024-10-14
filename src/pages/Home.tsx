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
  const { coords, setCoords, setCurrentCoords, error } = useGetCoords();

  const onCitySelect = useCallback((city: CitySuggestion) => {
    setCoords({ latitude: city.latitude, longitude: city.longitude });
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex flex-col flex-1 w-full h-full max-w-7xl mx-auto">
        <React.Suspense fallback={<Loading />}>
          {error ? (
            <div className="text-red-500 text-center">
              {error.message}
              <p>
                To enable location services, please check your browser settings
                and allow access.
              </p>
            </div>
          ) : (
            <>
              <SearchCitySection
                onCitySelect={onCitySelect}
                onSetCurrentCoords={setCurrentCoords}
              />
              <AddressSection coords={coords} />
              <WeatherSection coords={coords} />
              <ForecastSection coords={coords} />
            </>
          )}
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default Home;
