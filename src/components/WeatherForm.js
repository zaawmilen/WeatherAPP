// src/components/WeatherForm.js
import React, { useState } from 'react';

const WeatherForm = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <div className='Submit__button'></div>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
