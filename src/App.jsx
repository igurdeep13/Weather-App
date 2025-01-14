import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(import.meta.env.VITE_OPENWEATHER_API_KEY);

  return <>Hello world</>;
}

export default App;
