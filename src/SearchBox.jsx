import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState, useSyncExternalStore } from 'react';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export default function SearchBox(){

    let [city, setCity] = useState("");
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherData =  async () => {
        let response = await fetch (
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse)
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log({city})
        setCity("");
        getWeatherData();
    }

    return (
        <div className="searchBox">
            <h2>search for the weather</h2><br />
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="Search City" variant="outlined"  value={city}  onChange={handleChange} required/>
                <br /><br />
                <Button type='submit' variant="contained">search</Button>
            </form>
        </div>
    )
}