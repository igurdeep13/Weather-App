import { useState, useEffect } from "react";

function useWeatherData(url) {
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      // if (!response.ok) {
      //   throw new Error("City not found");
      // }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [url]);
  return { weatherData, getWeatherData, error, loading };
}

export default useWeatherData;