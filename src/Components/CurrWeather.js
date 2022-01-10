import React from 'react'
import { useState, useEffect } from 'react';
import Datacard from './Datacard.js';
let initialState = {
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
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
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
    "name": "Mountain View",
    "cod": 200
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

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=67bafc99f877ecb61cbd4de9f37fad0b`)
            .then(response => response.json())
            .then(_data => {
                setData(_data)
                console.log("useefect", data)
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
                city={data.name}
                feelsLike={data.main.feels_like}
                maxTemp={data.main.temp_max}
                minTemp={data.main.temp_min}

            />
            <Datacard

                city={ownData.name}
                feelsLike={ownData.main.feels_like}
                maxTemp={ownData.main.temp_max}
                minTemp={ownData.main.temp_min}

            />
        </div>
    )
}

export default CurrWeather
