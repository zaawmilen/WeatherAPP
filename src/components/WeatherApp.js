// src/components/WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    // const apiKey = 'c7a45256abdeb647f14c7bc72734323b';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7a45256abdeb647f14c7bc72734323b&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c7a45256abdeb647f14c7bc72734323b&units=metric`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const forecastResponse = await axios.get(forecastUrl);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setError(null);
    } catch (err) {
      setError('City not found');
    }
  };

  return (
    <div>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />}
    </div>
  );
};

export default WeatherApp;
