import { useEffect, useState } from "react";
import { Coords } from "@/types/coords";
import { useGetCurrentLocation } from ".";
import useCoordsParam from "./useCoordsParam";

const useCoords = () => {
  const { currentCoords, currentLocationError } = useGetCurrentLocation();
  const { coordsParam, updateCoordsParam } = useCoordsParam();

  const [coords, setCoords] = useState<Coords | null>(null);

  // Sync initial location (currentCoords) with state and query params
  useEffect(() => {
    if (currentCoords && !coordsParam) {
      setCoords(currentCoords);
      updateCoordsParam(currentCoords);
    }
  }, [currentCoords, coordsParam]);

  // Update state and search params when new coordinates are set
  const updateCoords = (newCoords: Coords | null) => {
    setCoords(newCoords);
    updateCoordsParam(newCoords);
  };

  // Set current location as the current coordinates
  const setCurrentLocation = () => {
    updateCoords(currentCoords);
  };

  // Listen specifically for lat/lon changes in the URL
  useEffect(() => {
    if (coordsParam) {
      setCoords(coordsParam);
    } else {
      setCoords(null);
    }
  }, [coordsParam]);

  return { coords, updateCoords, setCurrentLocation, currentLocationError };
};

export default useCoords;
