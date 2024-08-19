// src/components/WeatherChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';


const WeatherChart = ({ forecastData }) => {
  const data = {
    labels: forecastData.list.map(item => item.dt_txt),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastData.list.map(item => item.main.temp),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'hour',
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherChart;
