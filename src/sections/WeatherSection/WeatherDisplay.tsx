import React from "react";
import { WeatherDisplayProps } from "./WeatherSection.types";
import { Card } from "@/components/ui/card";
import { WeatherIcon } from "@/components";

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const { temperature, winddirection, windspeed, weathercode, is_day } = data;
  return (
    <Card className="p-4 h-full min-w-64 inline-flex flex-col">
      <div className="flex justify-between">
        <WeatherIcon
          weathercode={weathercode}
          is_day={!!is_day}
          className="w-12 h-12"
        />
        <span className="text-2xl ml-2">{temperature}°C</span>
      </div>
      <div className="mt-4">
        <p className="text-muted-foreground flex justify-between">
          Wind direction <span className="text-foreground">{winddirection} °</span>
        </p>
        <p className="mt-1 text-muted-foreground flex justify-between">
          Wind speed <span className="text-foreground">{windspeed} km/h</span>
        </p>
      </div>
    </Card>
  );
};
WeatherDisplay.displayName = "WeatherDisplay";
export default React.memo(WeatherDisplay);
