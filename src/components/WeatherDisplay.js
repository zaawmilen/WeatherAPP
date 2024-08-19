// src/components/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  return (
    <div className="WeatherDisplay">
      <h2>Current Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <h3>5-Day Forecast</h3>
      <div>
        {forecastData.list.slice(0, 5).map((forecast, index) => (
          <div key={index}>
            <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>Temperature: {forecast.main.temp} °C</p>
            <p>Condition: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
