import React, { useCallback, useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { useCoords, useDebouncedValue } from "@/hooks";
import { CitySuggestion } from "@/services/api/geocoding/types";
import { SearchCitySectionProps } from "./SearchCitySection.types";
import { useFetchCitySuggestions } from "./hooks";
import SearchCityDisplay from "./SearchCityDisplay";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components";

const SearchCitySection: React.FC<SearchCitySectionProps> = () => {
  const { coords, updateCoords, setCurrentLocation, currentLocationError } =
    useCoords();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const debouncedValue = useDebouncedValue(searchKeyword, 300);
  const { data, isLoading, isPending } =
    useFetchCitySuggestions(debouncedValue);

  const citySuggestionsMap = useMemo(() => {
    return (data || []).reduce((acc, item) => {
      acc[`${item.id}-${item.name}-${item.country}`] = item;
      return acc;
    }, {} as Record<string, CitySuggestion>);
  }, [data]);

  const items = useMemo(() => {
    return Object.entries(citySuggestionsMap).map(([value, item]) => ({
      value,
      label: `${item.name}, ${item.country}`,
    }));
  }, [citySuggestionsMap]);

  const onSelectedValueChange = useCallback(
    (value: string) => {
      setSelectedCity(value);
      const item = items.find((item) => item.value === value);
      if (item) {
        const city = citySuggestionsMap[value];
        updateCoords({ latitude: city.latitude, longitude: city.longitude });
      }
    },
    [items, citySuggestionsMap]
  );

  const onSetCurrenLocation = () => {
    setSelectedCity("");
    setSearchKeyword("");
    setCurrentLocation();
  };

  return (
    <ErrorBoundary>
      <section className="flex flex-col">
        <div className="flex">
          {!currentLocationError && (
            <Button
              variant="outline"
              size="icon"
              className="mr-2"
              onClick={onSetCurrenLocation}
              title="Use current location"
              aria-label="Use current location"
            >
              <MapPin className="absolute h-4 w-4" />
            </Button>
          )}
          <SearchCityDisplay
            selectedCity={selectedCity}
            onSelectedValueChange={onSelectedValueChange}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            items={items}
            isLoading={isPending || isLoading}
          />
        </div>
        {!coords && !isPending && !isLoading && (
          <div className="mt-2">
            {currentLocationError && (
              <p className="text-muted-foreground">
                {currentLocationError.message}. Enable location services, to
                automatically detect your location and weather.
              </p>
            )}
            <p>Or you can search for a city manually.</p>
          </div>
        )}
      </section>
    </ErrorBoundary>
  );
};

SearchCitySection.displayName = "SearchCitySection";
export default React.memo(SearchCitySection);
