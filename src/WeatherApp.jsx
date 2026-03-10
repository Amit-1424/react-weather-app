import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import "./WeatherApp.css"
export default function WeatherApp(){


    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        country: "IN",
        temp: 26.02,
        feelsLike: 26.02,
        tempMin: 26.02,
        tempMax: 26.02,
        humidity: 14,
        pressure: 1013,
        weather: "Clouds",
        description: "few clouds",
        windSpeed: 1.84
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div className="WeatherApp">
            <h2 >search real time weather information</h2>
            <SearchBox updateInfo = {updateInfo} ></SearchBox>
            <InfoBox weatherInfo = {weatherInfo} ></InfoBox>
        </div>
    )
}