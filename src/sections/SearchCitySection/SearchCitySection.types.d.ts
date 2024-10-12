import { CitySuggestion } from "@/services/api/geocoding/types";

export interface SearchCitySectionProps {
  onCitySelect: (city: CitySuggestion) => void;
}

export interface SearchCityDisplayProps {
  selectedCity: string;
  onSelectedValueChange: (value: string) => void;
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  items: { value: string; label: string }[];
  isLoading: boolean;
}
