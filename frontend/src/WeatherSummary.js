import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from './api';

function WeatherSummary() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherData().then(data => setWeatherData(data));
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Weather Summary</h2>
      {/* Map through the weatherData to display the summaries */}
      {weatherData.map((data, index) => (
        <div key={index}>
          <h3>{data.main}</h3>
          <p>Temperature: {data.temp} °C</p>
          <p>Feels Like: {data.feels_like} °C</p>
          <p>Time: {new Date(data.dt * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherSummary;
