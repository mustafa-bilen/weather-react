import React from "react";
import { WeatherDetails } from "./index";
import { DateTime } from "luxon";

const WeatherData = ({ WeatherData }) => {
  const iconUrlCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  return (
    <div className="max-w-screen-md mx-auto ">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex">
          <p className="font-semibold">
            <span className="text-2xl">{WeatherData.name}</span>,{" "}
            <span className="text-xl">{WeatherData.sys.country}</span>
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <p className="text-xl">{WeatherData.weather[0].main}</p>
            <img
              src={iconUrlCode(WeatherData.weather[0].icon)}
              alt="weather_icon"
              className="h-[5-rem]"
            />
            <p>{(((WeatherData.main.temp - 32) * 5) / 9).toFixed(0)}°</p>
            <div className="flex flex-col items-center mt-2 gap-[.2rem]">
              {/*  */}
              <WeatherDetails
                title="Real Fell"
                data={(((WeatherData.main.temp - 32) * 5) / 9).toFixed(0)}
                unit="°"
              />
              <WeatherDetails
                title="Humidity"
                data={WeatherData.main.humidity}
                unit="%"
              />
              <WeatherDetails
                title="Wind"
                data={WeatherData.wind.speed}
                unit="km/h"
              />
              {/*  */}
            </div>
            <div className="mt-3 flex gap-3">
              <WeatherDetails
                title="Rise"
                data={formatToLocalTime(
                  WeatherData.sys.sunrise,
                  WeatherData.timeZone,
                  "hh:mm a"
                )}
              />
              <WeatherDetails
                title="Set"
                data={formatToLocalTime(
                  WeatherData.sys.sunset,
                  WeatherData.timeZone,
                  "hh:mm a"
                )}
              />
              <WeatherDetails
                title="High"
                data={(((WeatherData.main.temp_max - 32) * 5) / 9).toFixed(0)}
                unit="°"
              />
              <WeatherDetails
                title="Low"
                data={(((WeatherData.main.temp_min - 32) * 5) / 9).toFixed(0)}
                unit="°"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
