import { Sun } from "lucide-react";
import {
  WEATHER_ICONS_DAY_MAP,
  WEATHER_ICONS_NIGHT_MAP,
} from "@/lib/constants/weatherIcons";
import { WeatherIconProps } from "./WeatherIcon.types";

const WeatherIcon: React.FC<WeatherIconProps> = ({
  weathercode,
  className = "",
  is_day = true,
}) => {
  const ICONS_MAP = is_day ? WEATHER_ICONS_DAY_MAP : WEATHER_ICONS_NIGHT_MAP;
  const Component = ICONS_MAP[weathercode] || Sun;
  return <Component className={className} />;
};

WeatherIcon.displayName = "WeatherIcon";
export default WeatherIcon;
