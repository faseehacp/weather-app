import React, { useState, FC } from 'react';
import './App.css';
import Axios from "axios";
import CityComponent from "./componets/CityComponent";
import WeatherComponent from "./componets/WeatherInfoComponent";

const App: FC = () => {
  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState<any>();
  const [forecast, setForecast] = useState<any>();

  const fetchWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ad32731e1c6832151f16b20d94b34c8`,
    );
    setWeather(response.data);
    const forecastData = await Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=3ad32731e1c6832151f16b20d94b34c8`,
    );
    setForecast(forecastData.data);
  };

  return (
    <div className='container'>
      <span className='appLabel'>Weather App</span>
      {city && weather && forecast ? (
        <WeatherComponent weather={weather} forecast={forecast} />
      ) : (
        <CityComponent updateCity={setCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
