import { Coords } from "@/types/coords";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useCoordsParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const updateCoordsParam = useCallback(
    (coords: Coords | null) => {
      if (coords) {
        searchParams.set("lat", coords.latitude.toString());
        searchParams.set("lon", coords.longitude.toString());
      } else {
        searchParams.delete("lat");
        searchParams.delete("lon");
      }
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const coordsParam = useMemo(() => {
    if (lat && lon) {
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      };
    }
    return null;
  }, [lat, lon]);

  return { coordsParam, updateCoordsParam };
};

export default useCoordsParam;
