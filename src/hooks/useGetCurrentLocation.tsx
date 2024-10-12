import { useEffect, useState } from "react";
import { Coords } from "@/types/coords";

/**
 * Custom hook that gets the current location coordinates.
 * @returns {Object} - The current coordinates and error message.
 *
 * @example
 * const { currentCoords, error } = useGetCurrentLocation();
 */
const useGetCurrentLocation = () => {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  return { currentCoords: coords, error };
};

export default useGetCurrentLocation;
