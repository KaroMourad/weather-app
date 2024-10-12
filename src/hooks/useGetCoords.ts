import { Coords } from "@/types/coords";
import { useEffect, useState } from "react";
import { useGetCurrentLocation } from ".";

/**
 * Custom hook that gets the coordinates from the current location or the user input.
 * @returns {Object} - The coordinates and a function to set the coordinates.
 * 
 * @example
 * const { coords, setCoords, setCurrentCoords } = useGetCoords();
 */
const useGetCoords = () => {
  const [coords, setCoords] = useState<Coords | null>(null);

  const { currentCoords } = useGetCurrentLocation();

  useEffect(() => {
    if (currentCoords) {
      setCoords(currentCoords);
    }
  }, [currentCoords]);

  const setCurrentCoords = () => {
    setCoords(currentCoords);
  };

  return { coords, setCoords, setCurrentCoords };
};

export default useGetCoords;
