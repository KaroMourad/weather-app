import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "@/services/api";
import { Coords } from "@/types/coords";
import { AddressData } from "@/services/api/reverse-geocoding/types";

const useFetchAddress = (coords: Coords | null) => {
  const { data, isLoading, error } = useQuery<AddressData, Error>({
    queryKey: ["address", coords],
    queryFn: () => {
      if (!coords) return Promise.reject(new Error("No coordinates available"));
      return fetchAddress(coords.latitude, coords.longitude);
    },
    enabled: !!coords,
  });

  return { address: data, isLoading, error };
};

export default useFetchAddress;
