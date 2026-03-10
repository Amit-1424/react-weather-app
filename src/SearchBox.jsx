import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState, useSyncExternalStore } from 'react';


export default function SearchBox(){

    let [city, setCity] = useState("");
    
    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log({city})
        setCity("");

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