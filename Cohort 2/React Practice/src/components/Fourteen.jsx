import React, { useEffect, useState } from "react";

export default function Fourteen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=caed62335408c1a3dc7d821beabad742`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  });

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <h3>City: {weather.name}</h3>
          <h3>Country: {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>Conditions : {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed}</p>
          
          <p>Latitude: {weather.coord.lat}</p> <p>Longitude: {weather.coord.lon}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
