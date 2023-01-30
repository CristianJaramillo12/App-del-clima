import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const succes = position => {

      const ob = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }

      setCoords(ob)
    }

    navigator.geolocation.getCurrentPosition(succes)

  },[])



  useEffect(() => {
    if(coords){
      const APIkey = 'ac8c5b93ffdd3f9306256a6db8e7f87c'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`
      
      axios.get(url)
        .then(res => {
          setWeather(res.data)
            const ob = {
              celsius: (res.data.main.temp - 273.15).toFixed(1),
              farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
            }
            setTemperature(ob)
        })
        .catch(err => console.log(err))
        .finally(() => {setIsLoading(false)})
    }
  },[coords])



  return (
    <div className="App">
      {
        isLoading ?
          <h1>Loading...</h1>
        :
          <WeatherCard 
            weatherInfo={weather} 
            temperature={temperature}
          />
      }
      
    </div>
  )
}

export default App
