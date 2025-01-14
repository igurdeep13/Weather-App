import { useState, useEffect } from "react";

function useWeatherData(url) {
  const [weatherData, setWeatherData] = useState("");

  const getWeatherData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [url]);
  return { weatherData, getWeatherData };
}

export default useWeatherData;
