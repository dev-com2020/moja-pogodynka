function WeatherDisplay({pogoda}){
    return (
        <div>
        {pogoda.main && (
            <div>
              <h2>Pogoda w mieście {pogoda.name}</h2>
              <p>Temperatura: {pogoda.main.temp} C</p>
              <p>Warunki: {pogoda.weather[0].description}</p>
            </div>
          )}
          </div>
    )
}

export default WeatherDisplay;