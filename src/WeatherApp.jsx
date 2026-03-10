import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import "./WeatherApp.css"
export default function WeatherApp(){


    const [weatherInfo,setWeatherInfo] = useState(null)

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div className="WeatherApp">
            <h2 >search real time weather information</h2>
            
            <SearchBox updateInfo = {updateInfo} ></SearchBox>
            {weatherInfo && <InfoBox weatherInfo={weatherInfo} />}
            {!weatherInfo && <p>Search for a city to see weather information</p>}
        </div>
    )
}