import { fetchCitySuggestions } from "@/services/api";
import { CitySuggestion } from "@/services/api/geocoding/types";
import { useQuery } from "@tanstack/react-query";

const useFetchCitySuggestions = (value: string) => {
  const { data, isLoading, error } = useQuery<CitySuggestion[]>({
    queryKey: ["citySuggestions", value],
    queryFn: () => fetchCitySuggestions(value),
    enabled: value.length > 2,
  });

  return { data, isLoading, error };
};

export default useFetchCitySuggestions;