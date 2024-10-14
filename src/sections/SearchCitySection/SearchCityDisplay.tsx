import React from "react";
import { AutoComplete } from "@/components/ui/autocomplete";
import { SearchCityDisplayProps } from "./SearchCitySection.types";

const SearchCityDisplay: React.FC<SearchCityDisplayProps> = ({
  selectedCity,
  onSelectedValueChange,
  searchKeyword,
  setSearchKeyword,
  items,
  isLoading,
}) => {
  return (
    <AutoComplete
      selectedValue={selectedCity}
      onSelectedValueChange={onSelectedValueChange}
      searchValue={searchKeyword}
      onSearchValueChange={setSearchKeyword}
      items={items}
      isLoading={isLoading}
      emptyMessage="No cities found."
      placeholder="Search for a city or place..."
      className="w-64"
    />
  );
};

SearchCityDisplay.displayName = "SearchCityDisplay";
export default React.memo(SearchCityDisplay);
