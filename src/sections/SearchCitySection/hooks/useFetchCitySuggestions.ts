import { fetchCitySuggestions } from "@/services/api";
import { CitySuggestion } from "@/services/api/geocoding/types";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetch city suggestions based on the search keyword
 * @param value  The city name to search for suggestions
 * @returns An array of city suggestions
 */
const useFetchCitySuggestions = (value: string) => {
  return useQuery<CitySuggestion[]>({
    queryKey: ["citySuggestions", value],
    queryFn: () => fetchCitySuggestions(value),
    enabled: value.length > 2,
  });
};

export default useFetchCitySuggestions;
