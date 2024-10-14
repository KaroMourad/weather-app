import React from "react";
import { ErrorBoundary, Loading } from "@/components";
import { SearchCitySection } from "@/sections/SearchCitySection";

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
  return (
    <ErrorBoundary>
      <div className="flex flex-col flex-1 w-full h-full max-w-7xl mx-auto">
        <React.Suspense fallback={<Loading />}>
          <SearchCitySection />
          <AddressSection />
          <WeatherSection />
          <ForecastSection />
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default Home;
