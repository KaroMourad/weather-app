import { CitySuggestion } from "@/services/api/geocoding/types";

export interface SearchCitySectionProps {}

export interface SearchCityDisplayProps {
  selectedCity: string;
  onSelectedValueChange: (value: string) => void;
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  items: { value: string; label: string }[];
  isLoading: boolean;
}
