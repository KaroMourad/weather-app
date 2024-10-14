import React from "react";
import { Coords } from "@/types/coords";
import { CurrentWeatherData } from "@/services/api/forecast/types";

export interface WeatherDisplayProps {
  data: CurrentWeatherData;
}

export interface WeatherSectionProps {}
