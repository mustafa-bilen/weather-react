import React from "react";

const WeatherDetails = ({ title, data, unit }) => {
  return (
    <p className="text-sm">
      {title}:{"  "}
      <span className="font-semibold">
        {data}
        {unit}
      </span>
    </p>
  );
};

export default WeatherDetails;
