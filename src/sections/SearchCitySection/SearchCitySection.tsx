import React, { useCallback, useMemo, useState } from "react";
import { useDebouncedValue } from "@/hooks";
import { CitySuggestion } from "@/services/api/geocoding/types";
import { SearchCitySectionProps } from "./SearchCitySection.types";
import { useFetchCitySuggestions } from "./hooks";
import SearchCityDisplay from "./SearchCityDisplay";

const SearchCitySection: React.FC<SearchCitySectionProps> = ({
  onCitySelect,
}) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const debouncedValue = useDebouncedValue(searchKeyword, 500);
  const { data, isLoading } = useFetchCitySuggestions(debouncedValue);

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
        onCitySelect(city);
      }
    },
    [onCitySelect, items, citySuggestionsMap]
  );

  return (
    <section className="py-4">
      <SearchCityDisplay
        selectedCity={selectedCity}
        onSelectedValueChange={onSelectedValueChange}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        items={items}
        isLoading={isLoading}
      />
    </section>
  );
};

SearchCitySection.displayName = "SearchCitySection";
export default React.memo(SearchCitySection);
