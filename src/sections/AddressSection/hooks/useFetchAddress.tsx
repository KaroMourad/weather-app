import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "@/services/api";
import { Coords } from "@/types/coords";
import { AddressData } from "@/services/api/reverse-geocoding/types";

/**
 * Fetch address from coordinates using reverse geocoding
 * @param coords
 * @returns object containing address details
 * @throws An error if the request fails or no results are found
 */
const useFetchAddress = (coords: Coords | null) => {
  return useQuery<AddressData, Error>({
    queryKey: ["address", coords],
    queryFn: () => {
      if (!coords) return Promise.reject(new Error("No coordinates available"));
      return fetchAddress(coords.latitude, coords.longitude);
    },
    enabled: !!coords,
  });
};

export default useFetchAddress;
