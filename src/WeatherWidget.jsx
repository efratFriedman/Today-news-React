import { useEffect, useState } from "react";
// import './WeatherWidget.css';

const cities = [
    { name: "Tel Aviv", id: "293397" },
    { name: "New York", id: "5128581" },
    { name: "London", id: "2643743" },
    { name: "Tokyo", id: "1850147" },
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

    if (loading) return <p>Loading weather...</p>;
    if (!weatherData.length) return <p>Weather data unavailable</p>;

    return (
        <div className="weather-widget">
            <h4>World Weather</h4>
            {weatherData.map((w, index) => (
                <p key={index}>
                    {w.name}: {Math.round(w.main?.temp)}°C, {w.weather?.[0]?.description}
                </p>
            ))}
        </div>
    );
};

export default WeatherWidget;
