import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = (city) => {
    return dispatch => {
        dispatch(fetchWeatherStart())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pl&units=metric`)
        .then(response => {
            dispatch(fetchWeatherSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchWeatherFailure(error.message))
        })
    }
}


export const fetchWeatherStart = () => ({
    type: 'FETCH_WEATHER_START'
});
export const fetchWeatherSuccess = (weatherData) => ({
    type: 'FETCH_WEATHER_SUCCESS',
    payload: weatherData,
});
export const fetchWeatherFailure = (error) => ({
    type: 'FETCH_WEATHER_FAILURE',
    payload: error,
});