import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState, useSyncExternalStore } from 'react';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherData =  async () => {
        let response = await fetch (
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();

        let result = {
            city: jsonResponse.name,
            country: jsonResponse.sys.country,
            temp: jsonResponse.main.temp,
            feelsLike: jsonResponse.main.feels_like,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            weather: jsonResponse.weather[0].main,
            description: jsonResponse.weather[0].description,
            windSpeed: jsonResponse.wind.speed,
        };

        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log({city})
        setCity("");
        let result = await getWeatherData();
        updateInfo(result);

    }

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="Search City" variant="outlined"  value={city}  onChange={handleChange} required/>
                <br /><br />
                <Button type='submit' variant="contained">search</Button>
            </form>
        </div>
    )
}