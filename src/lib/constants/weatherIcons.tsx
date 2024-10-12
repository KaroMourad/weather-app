import {
  Sun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudSnow,
  CloudRain,
  CloudLightning,
  CloudHail,
  CloudMoon,
  CloudMoonRain,
  CloudSun,
  CloudSunRain,
  Cloudy,
} from "lucide-react";

// Day weather icons mapping
export const WEATHER_ICONS_DAY_MAP = {
  0: Sun, // Clear sky
  1: CloudSun, // Mainly clear
  2: Cloud, // Partly cloudy
  3: Cloudy, // Overcast
  45: CloudFog, // Fog
  48: CloudFog, // Depositing rime fog
  51: CloudDrizzle, // Drizzle: Light intensity
  53: CloudDrizzle, // Drizzle: Moderate intensity
  55: CloudDrizzle, // Drizzle: Dense intensity
  56: CloudDrizzle, // Freezing drizzle
  57: CloudDrizzle, // Freezing drizzle
  61: CloudRain, // Rain: Slight intensity
  63: CloudRain, // Rain: Moderate intensity
  65: CloudRain, // Rain: Heavy intensity
  66: CloudRain, // Freezing Rain
  67: CloudRain, // Freezing Rain
  71: CloudSnow, // Snow fall: Slight intensity
  73: CloudSnow, // Snow fall: Moderate intensity
  75: CloudSnow, // Snow fall: Heavy intensity
  77: CloudSnow, // Snow grains
  80: CloudRain, // Rain showers: Slight intensity
  81: CloudRain, // Rain showers: Moderate intensity
  82: CloudSunRain, // Rain showers: Violent intensity
  85: CloudSnow, // Snow showers: Slight intensity
  86: CloudSnow, // Snow showers: Heavy intensity
  95: CloudLightning, // Thunderstorm: Slight or moderate
  96: CloudHail, // Thunderstorm with slight hail
  99: CloudHail, // Thunderstorm with heavy hail
};

// Night weather icons mapping (use similar mappings with night icons)
export const WEATHER_ICONS_NIGHT_MAP = {
  0: CloudMoon, // Clear sky
  1: CloudMoon, // Mainly clear
  2: CloudMoon, // Partly cloudy
  3: Cloudy, // Overcast
  45: CloudFog, // Fog
  48: CloudFog, // Depositing rime fog
  51: CloudDrizzle, // Drizzle: Light intensity
  53: CloudDrizzle, // Drizzle: Moderate intensity
  55: CloudDrizzle, // Drizzle: Dense intensity
  56: CloudDrizzle, // Freezing drizzle
  57: CloudDrizzle, // Freezing drizzle
  61: CloudRain, // Rain: Slight intensity
  63: CloudRain, // Rain: Moderate intensity
  65: CloudRain, // Rain: Heavy intensity
  66: CloudRain, // Freezing Rain
  67: CloudRain, // Freezing Rain
  71: CloudSnow, // Snow fall: Slight intensity
  73: CloudSnow, // Snow fall: Moderate intensity
  75: CloudSnow, // Snow fall: Heavy intensity
  77: CloudSnow, // Snow grains
  80: CloudRain, // Rain showers: Slight intensity
  81: CloudRain, // Rain showers: Moderate intensity
  82: CloudMoonRain, // Rain showers: Violent intensity
  85: CloudSnow, // Snow showers: Slight intensity
  86: CloudSnow, // Snow showers: Heavy intensity
  95: CloudLightning, // Thunderstorm: Slight or moderate
  96: CloudHail, // Thunderstorm with slight hail
  99: CloudHail, // Thunderstorm with heavy hail
};

type WeatherCodeDay = keyof typeof WEATHER_ICONS_DAY_MAP;
type WeatherCodeNight = keyof typeof WEATHER_ICONS_NIGHT_MAP;
export type WeatherCode = WeatherCodeDay | WeatherCodeNight;
