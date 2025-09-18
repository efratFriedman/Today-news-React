import { useEffect, useState } from "react";
import './css/WeatherWidget.css';

const cities = [
    { name: "Tel Aviv", id: "293397" },
    { name: "New York", id: "5128581" },
    { name: "London", id: "2643743" },
    { name: "Tokyo", id: "1850147" },
    { name: "Paris", id: "2988507" },
    { name: "Berlin", id: "2950159" },
];

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

        Promise.all(
            cities.map(city =>
                fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=${apiKey}`)
                    .then(res => res.json())
            )
        )
            .then(data => {
                setWeatherData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="weather-loading">Loading weather...</p>;
    if (!weatherData.length) return <p className="weather-error">Weather data unavailable</p>;

    return (
        <div className="weather-widget">
            <h4 className="widget-title">Current Weather</h4>
            <div className="weather-row">
                {weatherData.map((w, index) => (
                    <div key={index} className="weather-city-card">
                        <div className="city-name">{w.name}</div>
                        <img
                            className="weather-icon"
                            src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
                            alt={w.weather[0].description}
                        />
                        <div className="temperature">{Math.round(w.main.temp)}°C</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherWidget;