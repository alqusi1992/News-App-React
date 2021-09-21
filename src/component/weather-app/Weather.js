import React, { useState } from "react";
import DataProfile from "./DataProfile";
import { Link } from "react-router-dom";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

  const getWeatherData = async (e) => {
    e.preventDefault();
    setQuery("");
    validation();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query},&appid=${API_KEY}`
      );
      const weatherData = await response.json();
      setWeather(weatherData);
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  const validation = () => {
    if (query === "" || query.length < 1) {
      alert("Should Enter at least 1 character");
    }
  };

  const backLinkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="weather-app">
      <main>
        <form onSubmit={getWeatherData}>
          <input
            className="input__weather"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

          {weather.cod === "200" ? (
            <DataProfile weather={weather} />
          ) : (
            <h3 className="enter__city"> Please Enter City Name </h3>
          )}
          <button className="btn">Search</button>
        </form>
      </main>
      <h4 className="back__home">
        <Link to="/" style={backLinkStyle}>
          {" "}
          Back To Home Page
        </Link>
      </h4>
    </div>
  );
};

export default Weather;
