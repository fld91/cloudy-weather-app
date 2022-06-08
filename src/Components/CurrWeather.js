import React from 'react'
import { useState, useEffect } from 'react';
import Datacard from './Datacard.js';
import HourlyUpdate from './HourlyUpdate.js';
let initialState = {
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -21600,
    "current": {
      "dt": 1618317040,
      "sunrise": 1618282134,
      "sunset": 1618333901,
      "temp": 284.07,
      "feels_like": 282.84,
      "pressure": 1019,
      "humidity": 62,
      "dew_point": 277.08,
      "uvi": 0.89,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 6,
      "wind_deg": 300,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
    },
    "hourly": [
        {
          "dt": 1618315200,
          "temp": 282.58,
          "feels_like": 280.4,
          "pressure": 1019,
          "humidity": 68,
          "dew_point": 276.98,
          "uvi": 1.4,
          "clouds": 19,
          "visibility": 306,
          "wind_speed": 4.12,
          "wind_deg": 296,
          "wind_gust": 7.33,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        }, {
            "dt": 1618318800,
            "temp": 28.58,
            "feels_like": 280.4,
            "pressure": 1019,
            "humidity": 68,
            "dew_point": 276.98,
            "uvi": 1.4,
            "clouds": 19,
            "visibility": 306,
            "wind_speed": 4.12,
            "wind_deg": 296,
            "wind_gust": 7.33,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "pop": 0
          }],
    }
let notFound = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": "Not found",
        "temp_min": "Not found",
        "temp_max": "Not found",
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Not found",
    "cod": 200
}

function CurrWeather() {
    const [data, setData] = useState(initialState);
    const [city, setCity] = useState('London');
    const [temp, setTemp] = useState(false)
    const [ownData, setOwnData] = useState(initialState)
    const [latlong,setlatlong]=useState({lat:33,lon:-94})

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=67bafc99f877ecb61cbd4de9f37fad0b`)
        .then(res=>res.json())
        .then(e=>{
            let obj={
                lat:e[0].lat,
                lon:e[0].lon
            }
            console.log("obj",obj)
            setlatlong(obj)
            })
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlong.lat}&lon=${latlong.lon}&exclude=daily&units=metric&appid=67bafc99f877ecb61cbd4de9f37fad0b`)
            .then(response => response.json())
            .then(_data => {
                console.log(latlong)
                setData(_data)
                console.log("useefect", _data)
            }).catch(e => {
                console.log(e)
                setData(notFound)
            })
    }, [temp])


    function showPosition(position) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=67bafc99f877ecb61cbd4de9f37fad0b`)
            .then(response => response.json())
            .then(_data1 => {
                setOwnData(_data1)
                console.log(_data1)
            })
    }
    return (
        <div>
            <h1>Cloudy </h1>
            <h3>A weather App</h3>
            <input placeholder='Enter City Name'
                onChange={e => {
                    setCity(e.target.value)
                }}
                value={city} />

            <button onClick={() => {
                setTemp(!temp)
            }}>Search</button>
            <br />
            OR
            <br />
            <button onClick={
                () => {
                    console.log(navigator.geolocation)
                    navigator.geolocation.getCurrentPosition(showPosition)
                }
            }>Weather for your location</button>
            <Datacard
                 city={city}
                 feelsLike={data.current.feels_like}
                 Temp={data.current.temp}
                 wType={data.current.weather[0].main}

            />
            <HourlyUpdate hData={data.hourly}/>
            {/* <Datacard

                city={ownData.name}
                feelsLike={ownData.main.feels_like}
                maxTemp={ownData.main.temp_max}
                minTemp={ownData.main.temp_min}

            /> */}
        </div>
    )
}

export default CurrWeather
