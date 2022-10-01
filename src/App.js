import { Navbar, Input } from "./components/index";
import React, { useState } from "react";
function App() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API}`;

  return (
    <div>
      <Navbar />
      <Input />
    </div>
  );
}

export default App;
