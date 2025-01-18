import { useState, useEffect } from "react";

function useWeatherData(url) {
  const [weatherData, setWeatherData] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    //SetLoading means the process of fetching has started!
    setLoading(true);

    //Clear out all previous errors

    setError(null);

    try {
      const response = await fetch(url);

      //throw =>  throw keyword stop the execution of the code and pass the control to the nearst catch block
      if (!response.ok) {
        throw new Error("City not found...");
      }

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
