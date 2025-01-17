import { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [inputValue, setInputValue] = useState("Toronto");

  const [searchQuery, setSearchQuery] = useState(inputValue);

  const api = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${api}`;

  const { weatherData, getWeatherData, error, loading } = useWeatherData(url);

  const getSearchValidation = () => {
    if (inputValue.trim() === "") {
      alert("Enter a city name");
      return;
    }
    setSearchQuery(inputValue);
    getWeatherData();
  };

  console.log(weatherData);

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="w-[500px] h-96 bg-black bg-opacity-50  rounded-xl">
        <div className="py-8 px-8 flex flex-col gap-3.5">
          <div className="flex justify-center  gap-0.5">
            <input
              className="bg-black text-white w-full px-4 py-2 rounded-l-2xl outline-none cursor-pointer"
              type="text"
              placeholder="Enter the city"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              className="text-white bg-black pr-5 rounded-r-2xl pl-2 cursor-pointer hover:bg-opacity-70 
          
          "
              onClick={getSearchValidation}
            >
              <FontAwesomeIcon icon={faSearch} size="1x" />
            </button>
          </div>

          {error ? (
            <h1 className="text-red-500 text-3xl font-medium">{error}</h1>
          ) : loading ? (
            <h1 className="text-white text-3xl font-medium">Loading...</h1>
          ) : weatherData ? (
            <>
              <h1 className="text-white text-3xl font-medium">
                Weather in {weatherData.name}
              </h1>
              <h1 className="text-white text-5xl font-medium">
                {(weatherData.main.temp - 273.15).toFixed(2)} &deg;C
              </h1>
            </>
          ) : (
            <h1 className="text-white text-3xl font-medium">
              Information not available
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
