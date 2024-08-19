// src/App.js
import React from 'react';
import WeatherApp from './components/WeatherApp';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
};

export default App;
// make some styling so that it looks better