import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./InfoBox.css";

export default function InfoBox(){

    let result = {
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
    }

    return (
        <div className="infoBox">

            <Card className="weatherCard">

                <CardContent>

                    <div className="header">

                        <Typography variant="h4" className="city">
                            {result.city}
                        </Typography>

                        <Typography className="country">
                            {result.country}
                        </Typography>

                        <Typography className="description">
                            {result.weather} • {result.description}
                        </Typography>

                    </div>

                    <div className="temperature">

                        <h1>{result.temp}°C</h1>
                        <p>Feels like {result.feelsLike}°C</p>

                    </div>

                    <Divider style={{margin:"20px 0"}} />

                    <div className="details">

                        <div className="detailItem">
                            <span>Min Temp</span>
                            <b>{result.tempMin}°C</b>
                        </div>

                        <div className="detailItem">
                            <span>Max Temp</span>
                            <b>{result.tempMax}°C</b>
                        </div>

                        <div className="detailItem">
                            <span>Humidity</span>
                            <b>{result.humidity}%</b>
                        </div>

                        <div className="detailItem">
                            <span>Pressure</span>
                            <b>{result.pressure} hPa</b>
                        </div>

                        <div className="detailItem">
                            <span>Wind Speed</span>
                            <b>{result.windSpeed} m/s</b>
                        </div>

                    </div>

                </CardContent>

            </Card>

        </div>
    )
}