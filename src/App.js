import React, { useEffect, useState } from 'react';
import {getWeatherData} from './Weatherapi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

export default function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pune");

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    } catch(error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
      <div className='app'>
        <div className='card'>
          <h2 className='heading'> Weather App </h2>
          <div className='searcher'>
            <input type='search' onChange={(e) => setCity(e.target.value)} placeholder='Enter city name'/>
            <button className="btn btn-primary btn-md" onClick={()=>{getData()}}>Search</button>
          </div>
        </div>
        {weatherdata !== null ? (
          <div className='main'>
          <h3>Live weather forecast:</h3>
          <h2>{weatherdata.weather[0].main}</h2>
          <div className='temp'>
            <h2>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h2>
          </div>
          <div className='location'>
            <h3> {weatherdata.name} | {weatherdata.sys.country}</h3>
          </div>
          <div className='range'>
            <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C</h6>
          </div>
        </div>
        ) : null}
      </div>
    </>
  )
}