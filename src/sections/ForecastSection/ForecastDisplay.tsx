import React from "react";
import { Card } from "@/components/ui/card";

import { ForecastDisplayProps } from "./ForecastSection.types";

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({
  temperature_2m_max,
  temperature_2m_min,
  time,
}) => {
  return (
    <div className="flex gap-4 w-full">
      {temperature_2m_max.map((tempMax: number, index: number) => {
        const day = new Date(time[index]).toLocaleDateString("en-US", {
          weekday: "long",
        });
        return (
          <Card key={index} className="flex flex-col p-4 bg-muted h-28 min-w-48">
            <p className="text-lg">{day}</p>
            <p>Max Temp: {tempMax}°C</p>
            <p>Min Temp: {temperature_2m_min[index]}°C</p>
          </Card>
        );
      })}
    </div>
  );
};

ForecastDisplay.displayName = "ForecastDisplay";
export default React.memo(ForecastDisplay);
