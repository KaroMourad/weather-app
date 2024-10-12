import { AddressData } from "./types";

// use the following URL for reverse geocoding API
const REVERSE_URL = `https://nominatim.openstreetmap.org/reverse`;

/**
 * Fetch address from coordinates using reverse geocoding
 * @param latitude
 * @param longitude
 * @returns object containing address details
 * @throws An error if the request fails or no results are found
 */
export const fetchAddress = async (
  latitude: number,
  longitude: number
): Promise<AddressData> => {
  try {
    const response = await fetch(
      `${REVERSE_URL}?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
    );
    const data = await response.json();
    if (!data.address) {
      throw new Error("No address data found");
    }
    return {
      display_name: data.display_name,
      country: data.address.country,
      city: data.address.city,
    };
  } catch (error) {
    throw new Error("Failed to fetch address data");
  }
};
