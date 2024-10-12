import { WeatherCode } from "@/lib/constants/weatherIcons";

export interface CurrentWeatherData {
  temperature: number;
  winddirection: number;
  windspeed: number;
  weathercode: WeatherCode;
  is_day: 1 | 0; // 1 if the current time step has daylight, 0 at night.
}

export interface DailyForecastData {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
}
