import { WeatherCode } from "@/lib/constants/weatherIcons";

export interface WeatherIconProps {
  weathercode: WeatherCode;
  className?: string;
  is_day?: boolean;
}
