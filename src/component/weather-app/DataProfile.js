import React from "react";

function DataProfile({ weather }) {
  const cityName = weather.city.name;
  const countryName = weather.city.country;
  const population = weather.city.population;
  const minTemp = (weather.list[0].main.temp_min - 273.15).toFixed();
  const maxTemp = (weather.list[0].main.temp_max - 273.15).toFixed();
  const weatherDesc = weather.list[0].weather[0].description;
  const weatherMain = weather.list[0].weather[0].main;
  const location = `${weather.city.coord.lat}, ${weather.city.coord.lon}`;

  return (
    <div>
      <div className="list">
        <p>
          {cityName} {countryName}
        </p>
        <p>Population :{population}</p>
        <p>MaxTemp : {maxTemp} °C</p>
        <p>MinTemp: {minTemp} °C</p>
        <p>Description: {weatherDesc}</p>
        <p>WeatherMain:{weatherMain}</p>
        <p>location: {location}</p>
      </div>
    </div>
  );
}

export default DataProfile;
