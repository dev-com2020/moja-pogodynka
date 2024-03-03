import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {
  // potrzebujemy miasto i pogoda{}
  const [pogoda, setPogoda] = useState({});
  const [miasto, setMiasto] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${miasto}&appid=${API_KEY}&lang=pl&units=metric`

  const szukajPogody = () => {
    axios.get(url)
      .then(response => {
        setPogoda(response.data)
      })
      .catch(error => {
        console.error('Nie można uzyskać danych pogodowych', error);
      })
  }

  return (
    <div className="App">
      <input type='text' value={miasto} onChange={(e) => setMiasto(e.target.value)}
        placeholder='Wpisz miasto' />
      <button onClick={szukajPogody}>Szukaj</button>
      {pogoda.main && (
        <div>
          <h2>Pogoda w mieście {pogoda.name}</h2>
          <p>Temperatura: {pogoda.main.temp} C</p>
          <p>Warunki: {pogoda.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
