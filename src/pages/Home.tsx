import React, { useCallback } from "react";
import { useGetCoords } from "@/hooks";
import { Loading } from "@/components";
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
  const { coords, setCoords } = useGetCoords();

  const onCitySelect = useCallback((city: CitySuggestion) => {
    setCoords({ latitude: city.latitude, longitude: city.longitude });
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full h-full min-h-dvh max-w-7xl mx-auto">
      {coords ? (
        <>
          <SearchCitySection onCitySelect={onCitySelect} />
          <AddressSection coords={coords} />
          <WeatherSection coords={coords} />
          <ForecastSection coords={coords} />
        </>
      ) : (
        <Loading text="Loading weather data" />
      )}
    </div>
  );
}

export default Home;
