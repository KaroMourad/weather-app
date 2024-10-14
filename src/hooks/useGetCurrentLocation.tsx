import { useEffect, useState } from "react";
import { Coords } from "@/types/coords";

/**
 * Custom hook that gets the current location coordinates.
 * @returns {Object} - The current coordinates and error message.
 *
 * @example
 * const { currentCoords, currentLocationError } = useGetCurrentLocation();
 */
const useGetCurrentLocation = () => {
  const [currentCoords, setCurrentCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(new Error("Geolocation is not supported."));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error: GeolocationPositionError) => {
        setError(new Error(error.message));
      }
    );
  }, []);

  return { currentCoords, setCurrentCoords, currentLocationError: error };
};

export default useGetCurrentLocation;
