export const fetchWeatherData = async () => {
    const response = await fetch('/api/weather/current');
    const data = await response.json();
    return data;
  };
  