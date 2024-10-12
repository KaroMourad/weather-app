import React from "react";
import { Coords } from "@/types/coords";
import { CurrentWeatherData } from "@/services/api/forecast/types";

export interface WeatherDisplayProps extends CurrentWeatherData {}

export interface WeatherSectionProps {
  coords: Coords | null;
}
