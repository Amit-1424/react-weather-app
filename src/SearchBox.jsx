import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherData =  async () => {
        let response = await fetch (
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();

        if(jsonResponse.cod !== 200){
            alert("City not found");
            return;
        }

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
        setLoading(true);

        let result = await getWeatherData();

        if(result){
            updateInfo(result);
        }

        setLoading(false);
        setCity("");
    }

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="Search City" variant="outlined"  value={city}  onChange={handleChange} required/>
                <br /><br />
            <Button type="submit" variant="contained" disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </Button>
            </form>
        </div>
    )
}