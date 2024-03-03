
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './weatherActions';

function Weather() {
    const [city, setCity] = useState('');
    const weather = useSelector(state => state.weather.weather);
    const isFetching = useSelector(state => state.weather.isFetching);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Wpisz miasto' />
            <button type='submit'>Szukaj</button>
        </form>
    {isFetching && <div>ładuje...</div> }
    {weather && (
        <div>
            <h3>{weather.name}</h3>
            <p>Temperatura: {weather.main.temp} C</p>
        </div>
    )}
    </div>
)}
            

export default Weather;