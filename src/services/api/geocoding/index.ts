import { CitySuggestion } from "./types";

const GEOCODING_API_URL = "https://geocoding-api.open-meteo.com/v1";
const SEARCH_URL = `${GEOCODING_API_URL}/search`;

/**
 * Fetch city suggestions based on the search keyword
 * @param city  The city name to search for suggestions
 * @returns An array of city suggestions
 * @throws An error if the request fails or no results are found
 */
export const fetchCitySuggestions = async (
  city: string
): Promise<CitySuggestion[]> => {
  try {
    const response = await fetch(`${SEARCH_URL}?name=${city}&count=3`);
    const data = await response.json();
    if (!data.results) {
      throw new Error("No results found");
    }
    return data.results;
  } catch (error) {
    throw new Error("Failed to fetch city suggestions");
  }
};
