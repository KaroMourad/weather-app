import React from "react";
import { Card } from "@/components/ui/card";

import { ForecastDisplayProps } from "./ForecastSection.types";
import { WeatherIcon } from "@/components";
import { Sunrise, Sunset } from "lucide-react";

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ data }) => {
  const {
    time,
    temperature_2m_max,
    temperature_2m_min,
    weather_code,
    sunrise,
    sunset,
  } = data;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 w-full">
      {temperature_2m_max.map((tempMax: number, index: number) => {
        const day = new Date(time[index]).toLocaleDateString("en-US", {
          weekday: "long",
        });
        const weathercode = weather_code[index];
        const sunRise = new Date(sunrise[index]).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        const sunSet = new Date(sunset[index]).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <Card
            key={index}
            className="flex flex-col p-4 min-h-28 min-w-full md:min-w-52 justify-between"
          >
            <div className="flex justify-between">
              <span className="text-md">{index === 0 ? "Today" : day}</span>
              <WeatherIcon
                weathercode={weathercode}
                is_day={true}
                className="w-8 h-8"
              />
            </div>
            <div className="flex items-center text-foreground whitespace-nowrap">
              <span className="mr-2">{temperature_2m_min[index]}°C</span>-
              <span className="ml-2">{tempMax}°C</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap mt-2">
              <Sunrise size={16} className="mr-2" />
              <span className="mr-2">{sunRise}</span>-
              <Sunset size={16} className="ml-2" />
              <span className="ml-2">{sunSet}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

ForecastDisplay.displayName = "ForecastDisplay";
export default React.memo(ForecastDisplay);
