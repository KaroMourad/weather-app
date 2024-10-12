import { Coords } from "@/types/coords";
import { useEffect, useState } from "react";
import { useGetCurrentLocation } from ".";

/**
 * Custom hook that gets the coordinates from the current location or the user input.
 * @returns {Object} - The coordinates and a function to set the coordinates.
 * 
 * @example
 * const { coords, setCoords } = useGetCoords();
 */
const useGetCoords = () => {
  const [coords, setCoords] = useState<Coords | null>(null);

  const { currentCoords } = useGetCurrentLocation();

  useEffect(() => {
    if (currentCoords) {
      setCoords(currentCoords);
    }
  }, [currentCoords]);

  return { coords, setCoords };
};

export default useGetCoords;
