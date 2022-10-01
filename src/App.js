import { Navbar, Input } from "./components/index";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("Ankara");

  const WEATHER_API = process.env.REACT_APP_WEATHER_API;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API}`;

  const getInfo = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((ERR) => console.log(ERR));
  };

  return (
    <div>
      <Navbar />
      <Input getLocation={setLocation} getInfos={getInfo} />
    </div>
  );
}

export default App;
