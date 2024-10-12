import { DailyForecastData } from "@/services/api/forecast/types";
import { Coords } from "@/types/coords";

export interface ForecastDisplayProps extends DailyForecastData {}

export interface ForecastSectionProps {
  coords: Coords | null;
}
