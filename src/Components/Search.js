import React from 'react'
import '../styles/Search.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useState,useEffect} from 'react'

const data =require("../city.json")
function Search(props) {
  
 /* const initialState={
    "lat": 19.0144,
    "lon": 72.8479,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    current: {
        "dt": 1655312003,
        "sunrise": 1655253064,
        "sunset": 1655300825,
        temp: 29.99,
        "feels_like": 36.99,
        "pressure": 1006,
        "humidity": 79,
        "dew_point": 25.95,
        "uvi": 0,
        "clouds": 40,
        "visibility": 3000,
        "wind_speed": 4.63,
        "wind_deg": 230,
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50n"
            }
        ]
    },
    "minutely": [
        {
            "dt": 1655312040,
            "precipitation": 0
        },
        {
            "dt": 1655312100,
            "precipitation": 0
        },
        {
            "dt": 1655312160,
            "precipitation": 0
        },
        {
            "dt": 1655312220,
            "precipitation": 0
        },
        {
            "dt": 1655312280,
            "precipitation": 0
        },
        {
            "dt": 1655312340,
            "precipitation": 0
        },
        {
            "dt": 1655312400,
            "precipitation": 0
        },
        {
            "dt": 1655312460,
            "precipitation": 0
        },
        {
            "dt": 1655312520,
            "precipitation": 0
        },
        {
            "dt": 1655312580,
            "precipitation": 0
        },
        {
            "dt": 1655312640,
            "precipitation": 0
        },
        {
            "dt": 1655312700,
            "precipitation": 0
        },
        {
            "dt": 1655312760,
            "precipitation": 0
        },
        {
            "dt": 1655312820,
            "precipitation": 0
        },
        {
            "dt": 1655312880,
            "precipitation": 0
        },
        {
            "dt": 1655312940,
            "precipitation": 0
        },
        {
            "dt": 1655313000,
            "precipitation": 0
        },
        {
            "dt": 1655313060,
            "precipitation": 0
        },
        {
            "dt": 1655313120,
            "precipitation": 0
        },
        {
            "dt": 1655313180,
            "precipitation": 0
        },
        {
            "dt": 1655313240,
            "precipitation": 0
        },
        {
            "dt": 1655313300,
            "precipitation": 0
        },
        {
            "dt": 1655313360,
            "precipitation": 0
        },
        {
            "dt": 1655313420,
            "precipitation": 0
        },
        {
            "dt": 1655313480,
            "precipitation": 0
        },
        {
            "dt": 1655313540,
            "precipitation": 0
        },
        {
            "dt": 1655313600,
            "precipitation": 0
        },
        {
            "dt": 1655313660,
            "precipitation": 0
        },
        {
            "dt": 1655313720,
            "precipitation": 0
        },
        {
            "dt": 1655313780,
            "precipitation": 0
        },
        {
            "dt": 1655313840,
            "precipitation": 0
        },
        {
            "dt": 1655313900,
            "precipitation": 0
        },
        {
            "dt": 1655313960,
            "precipitation": 0
        },
        {
            "dt": 1655314020,
            "precipitation": 0
        },
        {
            "dt": 1655314080,
            "precipitation": 0
        },
        {
            "dt": 1655314140,
            "precipitation": 0
        },
        {
            "dt": 1655314200,
            "precipitation": 0
        },
        {
            "dt": 1655314260,
            "precipitation": 0
        },
        {
            "dt": 1655314320,
            "precipitation": 0
        },
        {
            "dt": 1655314380,
            "precipitation": 0
        },
        {
            "dt": 1655314440,
            "precipitation": 0
        },
        {
            "dt": 1655314500,
            "precipitation": 0
        },
        {
            "dt": 1655314560,
            "precipitation": 0
        },
        {
            "dt": 1655314620,
            "precipitation": 0
        },
        {
            "dt": 1655314680,
            "precipitation": 0
        },
        {
            "dt": 1655314740,
            "precipitation": 0
        },
        {
            "dt": 1655314800,
            "precipitation": 0
        },
        {
            "dt": 1655314860,
            "precipitation": 0
        },
        {
            "dt": 1655314920,
            "precipitation": 0
        },
        {
            "dt": 1655314980,
            "precipitation": 0
        },
        {
            "dt": 1655315040,
            "precipitation": 0
        },
        {
            "dt": 1655315100,
            "precipitation": 0
        },
        {
            "dt": 1655315160,
            "precipitation": 0
        },
        {
            "dt": 1655315220,
            "precipitation": 0
        },
        {
            "dt": 1655315280,
            "precipitation": 0
        },
        {
            "dt": 1655315340,
            "precipitation": 0
        },
        {
            "dt": 1655315400,
            "precipitation": 0
        },
        {
            "dt": 1655315460,
            "precipitation": 0
        },
        {
            "dt": 1655315520,
            "precipitation": 0
        },
        {
            "dt": 1655315580,
            "precipitation": 0
        },
        {
            "dt": 1655315640,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1655308800,
            "temp": 29.84,
            "feels_like": 36.38,
            "pressure": 1006,
            "humidity": 77,
            "dew_point": 25.37,
            "uvi": 0,
            "clouds": 45,
            "visibility": 10000,
            "wind_speed": 5.8,
            "wind_deg": 222,
            "wind_gust": 6.32,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.52
        },
        {
            "dt": 1655312400,
            "temp": 29.99,
            "feels_like": 36.99,
            "pressure": 1006,
            "humidity": 79,
            "dew_point": 25.95,
            "uvi": 0,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 5.17,
            "wind_deg": 219,
            "wind_gust": 5.65,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.63
        },
        {
            "dt": 1655316000,
            "temp": 29.78,
            "feels_like": 36.47,
            "pressure": 1006,
            "humidity": 78,
            "dew_point": 25.53,
            "uvi": 0,
            "clouds": 47,
            "visibility": 10000,
            "wind_speed": 5.08,
            "wind_deg": 218,
            "wind_gust": 5.6,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.63
        },
        {
            "dt": 1655319600,
            "temp": 29.45,
            "feels_like": 35.3,
            "pressure": 1006,
            "humidity": 77,
            "dew_point": 24.99,
            "uvi": 0,
            "clouds": 60,
            "visibility": 10000,
            "wind_speed": 4.75,
            "wind_deg": 218,
            "wind_gust": 5.27,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.6
        },
        {
            "dt": 1655323200,
            "temp": 28.8,
            "feels_like": 33.99,
            "pressure": 1006,
            "humidity": 79,
            "dew_point": 24.79,
            "uvi": 0,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 4.24,
            "wind_deg": 213,
            "wind_gust": 4.83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.85
            }
        },
        {
            "dt": 1655326800,
            "temp": 28.54,
            "feels_like": 32.94,
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 24.11,
            "uvi": 0,
            "clouds": 76,
            "visibility": 10000,
            "wind_speed": 4.03,
            "wind_deg": 214,
            "wind_gust": 4.6,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.49
            }
        },
        {
            "dt": 1655330400,
            "temp": 28.13,
            "feels_like": 31.95,
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 23.65,
            "uvi": 0,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 4.27,
            "wind_deg": 213,
            "wind_gust": 4.86,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.28
            }
        },
        {
            "dt": 1655334000,
            "temp": 28.06,
            "feels_like": 31.79,
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 23.72,
            "uvi": 0,
            "clouds": 74,
            "visibility": 10000,
            "wind_speed": 4.31,
            "wind_deg": 211,
            "wind_gust": 5,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.26
            }
        },
        {
            "dt": 1655337600,
            "temp": 27.84,
            "feels_like": 31.56,
            "pressure": 1005,
            "humidity": 79,
            "dew_point": 23.82,
            "uvi": 0,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 4.08,
            "wind_deg": 207,
            "wind_gust": 4.78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.6,
            "rain": {
                "1h": 0.53
            }
        },
        {
            "dt": 1655341200,
            "temp": 27.57,
            "feels_like": 31.05,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 23.81,
            "uvi": 0.11,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 3.88,
            "wind_deg": 200,
            "wind_gust": 4.62,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.72,
            "rain": {
                "1h": 1.16
            }
        },
        {
            "dt": 1655344800,
            "temp": 27.89,
            "feels_like": 31.54,
            "pressure": 1007,
            "humidity": 78,
            "dew_point": 23.71,
            "uvi": 0.79,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 4.12,
            "wind_deg": 200,
            "wind_gust": 4.66,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.68,
            "rain": {
                "1h": 0.9
            }
        },
        {
            "dt": 1655348400,
            "temp": 28.18,
            "feels_like": 31.91,
            "pressure": 1007,
            "humidity": 76,
            "dew_point": 23.64,
            "uvi": 2.47,
            "clouds": 94,
            "visibility": 10000,
            "wind_speed": 4.08,
            "wind_deg": 197,
            "wind_gust": 4.4,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.64,
            "rain": {
                "1h": 0.79
            }
        },
        {
            "dt": 1655352000,
            "temp": 28.57,
            "feels_like": 32.66,
            "pressure": 1007,
            "humidity": 75,
            "dew_point": 23.6,
            "uvi": 5.23,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 4.63,
            "wind_deg": 205,
            "wind_gust": 4.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.64,
            "rain": {
                "1h": 0.57
            }
        },
        {
            "dt": 1655355600,
            "temp": 29,
            "feels_like": 33.3,
            "pressure": 1007,
            "humidity": 73,
            "dew_point": 23.58,
            "uvi": 8.35,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 4.96,
            "wind_deg": 211,
            "wind_gust": 5.22,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.6
        },
        {
            "dt": 1655359200,
            "temp": 29.24,
            "feels_like": 33.66,
            "pressure": 1007,
            "humidity": 72,
            "dew_point": 23.75,
            "uvi": 10.91,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 5.09,
            "wind_deg": 218,
            "wind_gust": 5.47,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.56
        },
        {
            "dt": 1655362800,
            "temp": 29.51,
            "feels_like": 34.31,
            "pressure": 1006,
            "humidity": 72,
            "dew_point": 23.96,
            "uvi": 12.23,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 5.1,
            "wind_deg": 226,
            "wind_gust": 5.5,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.4
        },
        {
            "dt": 1655366400,
            "temp": 29.64,
            "feels_like": 34.86,
            "pressure": 1006,
            "humidity": 73,
            "dew_point": 24.21,
            "uvi": 11.6,
            "clouds": 68,
            "visibility": 10000,
            "wind_speed": 5.54,
            "wind_deg": 229,
            "wind_gust": 5.78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.48,
            "rain": {
                "1h": 0.16
            }
        },
        {
            "dt": 1655370000,
            "temp": 29.57,
            "feels_like": 34.68,
            "pressure": 1005,
            "humidity": 73,
            "dew_point": 24.33,
            "uvi": 9.41,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 5.52,
            "wind_deg": 235,
            "wind_gust": 5.86,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.52,
            "rain": {
                "1h": 0.29
            }
        },
        {
            "dt": 1655373600,
            "temp": 29.78,
            "feels_like": 35.21,
            "pressure": 1005,
            "humidity": 73,
            "dew_point": 24.34,
            "uvi": 6.33,
            "clouds": 45,
            "visibility": 10000,
            "wind_speed": 5.66,
            "wind_deg": 238,
            "wind_gust": 5.99,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.55,
            "rain": {
                "1h": 0.31
            }
        },
        {
            "dt": 1655377200,
            "temp": 29.73,
            "feels_like": 34.85,
            "pressure": 1005,
            "humidity": 72,
            "dew_point": 24.25,
            "uvi": 3.36,
            "clouds": 41,
            "visibility": 10000,
            "wind_speed": 5.94,
            "wind_deg": 235,
            "wind_gust": 6.44,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.59,
            "rain": {
                "1h": 0.18
            }
        },
        {
            "dt": 1655380800,
            "temp": 29.56,
            "feels_like": 34.66,
            "pressure": 1005,
            "humidity": 73,
            "dew_point": 24.2,
            "uvi": 1.25,
            "clouds": 39,
            "visibility": 10000,
            "wind_speed": 5.82,
            "wind_deg": 234,
            "wind_gust": 6.47,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.59,
            "rain": {
                "1h": 0.25
            }
        },
        {
            "dt": 1655384400,
            "temp": 29.27,
            "feels_like": 34.37,
            "pressure": 1005,
            "humidity": 75,
            "dew_point": 24.3,
            "uvi": 0.24,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 5.98,
            "wind_deg": 230,
            "wind_gust": 6.75,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.62,
            "rain": {
                "1h": 0.25
            }
        },
        {
            "dt": 1655388000,
            "temp": 28.95,
            "feels_like": 33.97,
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 24.51,
            "uvi": 0,
            "clouds": 78,
            "visibility": 10000,
            "wind_speed": 6.22,
            "wind_deg": 230,
            "wind_gust": 7.08,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.64,
            "rain": {
                "1h": 0.3
            }
        },
        {
            "dt": 1655391600,
            "temp": 28.64,
            "feels_like": 33.56,
            "pressure": 1006,
            "humidity": 79,
            "dew_point": 24.55,
            "uvi": 0,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 5.83,
            "wind_deg": 232,
            "wind_gust": 6.72,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.78,
            "rain": {
                "1h": 0.99
            }
        },
        {
            "dt": 1655395200,
            "temp": 28.66,
            "feels_like": 33.62,
            "pressure": 1006,
            "humidity": 79,
            "dew_point": 24.57,
            "uvi": 0,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 5.71,
            "wind_deg": 231,
            "wind_gust": 6.47,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.82,
            "rain": {
                "1h": 0.96
            }
        },
        {
            "dt": 1655398800,
            "temp": 28.68,
            "feels_like": 33.67,
            "pressure": 1007,
            "humidity": 79,
            "dew_point": 24.63,
            "uvi": 0,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 5.5,
            "wind_deg": 228,
            "wind_gust": 6.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.86,
            "rain": {
                "1h": 0.58
            }
        },
        {
            "dt": 1655402400,
            "temp": 28.51,
            "feels_like": 33.23,
            "pressure": 1007,
            "humidity": 79,
            "dew_point": 24.62,
            "uvi": 0,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 5.65,
            "wind_deg": 228,
            "wind_gust": 6.44,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.9,
            "rain": {
                "1h": 0.63
            }
        },
        {
            "dt": 1655406000,
            "temp": 28.35,
            "feels_like": 32.99,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 24.48,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.51,
            "wind_deg": 227,
            "wind_gust": 6.38,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.62
            }
        },
        {
            "dt": 1655409600,
            "temp": 28.23,
            "feels_like": 32.68,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 24.44,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.19,
            "wind_deg": 224,
            "wind_gust": 6.14,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.59
            }
        },
        {
            "dt": 1655413200,
            "temp": 27.97,
            "feels_like": 32.02,
            "pressure": 1005,
            "humidity": 80,
            "dew_point": 24.3,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.88,
            "wind_deg": 220,
            "wind_gust": 5.63,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.83
            }
        },
        {
            "dt": 1655416800,
            "temp": 27.69,
            "feels_like": 31.61,
            "pressure": 1005,
            "humidity": 82,
            "dew_point": 24.29,
            "uvi": 0,
            "clouds": 100,
            "visibility": 9263,
            "wind_speed": 4.84,
            "wind_deg": 217,
            "wind_gust": 5.67,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.84
            }
        },
        {
            "dt": 1655420400,
            "temp": 27.71,
            "feels_like": 31.66,
            "pressure": 1005,
            "humidity": 82,
            "dew_point": 24.28,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.15,
            "wind_deg": 213,
            "wind_gust": 6.05,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.71
            }
        },
        {
            "dt": 1655424000,
            "temp": 27.74,
            "feels_like": 31.74,
            "pressure": 1005,
            "humidity": 82,
            "dew_point": 24.32,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.43,
            "wind_deg": 208,
            "wind_gust": 6.3,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.52
            }
        },
        {
            "dt": 1655427600,
            "temp": 27.86,
            "feels_like": 31.9,
            "pressure": 1005,
            "humidity": 81,
            "dew_point": 24.28,
            "uvi": 0.11,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.37,
            "wind_deg": 203,
            "wind_gust": 6.24,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.67,
            "rain": {
                "1h": 0.49
            }
        },
        {
            "dt": 1655431200,
            "temp": 28.04,
            "feels_like": 32.2,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 24.34,
            "uvi": 0.8,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.46,
            "wind_deg": 198,
            "wind_gust": 6.2,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.7,
            "rain": {
                "1h": 0.33
            }
        },
        {
            "dt": 1655434800,
            "temp": 28.24,
            "feels_like": 32.54,
            "pressure": 1007,
            "humidity": 79,
            "dew_point": 24.21,
            "uvi": 2.5,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.39,
            "wind_deg": 194,
            "wind_gust": 5.95,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.72,
            "rain": {
                "1h": 0.5
            }
        },
        {
            "dt": 1655438400,
            "temp": 28.58,
            "feels_like": 33.04,
            "pressure": 1007,
            "humidity": 77,
            "dew_point": 24.14,
            "uvi": 5.31,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.27,
            "wind_deg": 198,
            "wind_gust": 5.79,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.72,
            "rain": {
                "1h": 0.43
            }
        },
        {
            "dt": 1655442000,
            "temp": 28.99,
            "feels_like": 33.67,
            "pressure": 1007,
            "humidity": 75,
            "dew_point": 24.1,
            "uvi": 8.48,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.54,
            "wind_deg": 203,
            "wind_gust": 5.93,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.68,
            "rain": {
                "1h": 0.1
            }
        },
        {
            "dt": 1655445600,
            "temp": 29.24,
            "feels_like": 34.08,
            "pressure": 1007,
            "humidity": 74,
            "dew_point": 24.13,
            "uvi": 11.06,
            "clouds": 94,
            "visibility": 10000,
            "wind_speed": 5.85,
            "wind_deg": 206,
            "wind_gust": 6.28,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.68
        },
        {
            "dt": 1655449200,
            "temp": 29.39,
            "feels_like": 34.24,
            "pressure": 1006,
            "humidity": 73,
            "dew_point": 24.01,
            "uvi": 12.43,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 6.12,
            "wind_deg": 212,
            "wind_gust": 6.58,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.36
        },
        {
            "dt": 1655452800,
            "temp": 29.51,
            "feels_like": 34.53,
            "pressure": 1005,
            "humidity": 73,
            "dew_point": 24.1,
            "uvi": 11.8,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 6.4,
            "wind_deg": 215,
            "wind_gust": 6.67,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.32
        },
        {
            "dt": 1655456400,
            "temp": 29.71,
            "feels_like": 35.04,
            "pressure": 1005,
            "humidity": 73,
            "dew_point": 24.28,
            "uvi": 9.57,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 6.61,
            "wind_deg": 214,
            "wind_gust": 6.91,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.22
        },
        {
            "dt": 1655460000,
            "temp": 29.8,
            "feels_like": 35.26,
            "pressure": 1004,
            "humidity": 73,
            "dew_point": 24.44,
            "uvi": 6.06,
            "clouds": 64,
            "visibility": 10000,
            "wind_speed": 6.8,
            "wind_deg": 217,
            "wind_gust": 7.07,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.15
        },
        {
            "dt": 1655463600,
            "temp": 29.78,
            "feels_like": 35.21,
            "pressure": 1004,
            "humidity": 73,
            "dew_point": 24.5,
            "uvi": 3.21,
            "clouds": 53,
            "visibility": 10000,
            "wind_speed": 6.81,
            "wind_deg": 213,
            "wind_gust": 7.11,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.19
        },
        {
            "dt": 1655467200,
            "temp": 29.56,
            "feels_like": 35.12,
            "pressure": 1004,
            "humidity": 75,
            "dew_point": 24.51,
            "uvi": 1.2,
            "clouds": 51,
            "visibility": 10000,
            "wind_speed": 6.76,
            "wind_deg": 211,
            "wind_gust": 7.08,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.28,
            "rain": {
                "1h": 0.1
            }
        },
        {
            "dt": 1655470800,
            "temp": 29.37,
            "feels_like": 34.85,
            "pressure": 1005,
            "humidity": 76,
            "dew_point": 24.58,
            "uvi": 0.25,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 6.8,
            "wind_deg": 209,
            "wind_gust": 7.42,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.36,
            "rain": {
                "1h": 0.16
            }
        },
        {
            "dt": 1655474400,
            "temp": 29.34,
            "feels_like": 34.77,
            "pressure": 1005,
            "humidity": 76,
            "dew_point": 24.61,
            "uvi": 0,
            "clouds": 42,
            "visibility": 10000,
            "wind_speed": 6.81,
            "wind_deg": 206,
            "wind_gust": 7.56,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.36
        },
        {
            "dt": 1655478000,
            "temp": 29.27,
            "feels_like": 34.59,
            "pressure": 1006,
            "humidity": 76,
            "dew_point": 24.56,
            "uvi": 0,
            "clouds": 45,
            "visibility": 10000,
            "wind_speed": 7.26,
            "wind_deg": 206,
            "wind_gust": 7.86,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.2
        }
    ],
    "daily": [
        {
            "dt": 1655274600,
            "sunrise": 1655253064,
            "sunset": 1655300825,
            "moonrise": 1655305260,
            "moonset": 1655254920,
            "moon_phase": 0.53,
            "temp": {
                "day": 30.21,
                "min": 28.82,
                "max": 30.59,
                "night": 29.78,
                "eve": 30.15,
                "morn": 28.82
            },
            "feels_like": {
                "day": 35.06,
                "night": 36.47,
                "eve": 35.16,
                "morn": 33.25
            },
            "pressure": 1007,
            "humidity": 68,
            "dew_point": 23.61,
            "wind_speed": 5.83,
            "wind_deg": 222,
            "wind_gust": 6.32,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 30,
            "pop": 0.66,
            "rain": 2.57,
            "uvi": 11.89
        },
        {
            "dt": 1655361000,
            "sunrise": 1655339472,
            "sunset": 1655387241,
            "moonrise": 1655395500,
            "moonset": 1655345400,
            "moon_phase": 0.57,
            "temp": {
                "day": 29.24,
                "min": 27.57,
                "max": 29.78,
                "night": 28.51,
                "eve": 29.56,
                "morn": 27.84
            },
            "feels_like": {
                "day": 33.66,
                "night": 33.23,
                "eve": 34.66,
                "morn": 31.56
            },
            "pressure": 1007,
            "humidity": 72,
            "dew_point": 23.75,
            "wind_speed": 6.22,
            "wind_deg": 230,
            "wind_gust": 7.08,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 95,
            "pop": 0.9,
            "rain": 10.73,
            "uvi": 12.23
        },
        {
            "dt": 1655447400,
            "sunrise": 1655425880,
            "sunset": 1655473657,
            "moonrise": 1655485260,
            "moonset": 1655435940,
            "moon_phase": 0.61,
            "temp": {
                "day": 29.24,
                "min": 27.69,
                "max": 29.8,
                "night": 28.68,
                "eve": 29.56,
                "morn": 27.74
            },
            "feels_like": {
                "day": 34.08,
                "night": 33.48,
                "eve": 35.12,
                "morn": 31.74
            },
            "pressure": 1007,
            "humidity": 74,
            "dew_point": 24.13,
            "wind_speed": 7.26,
            "wind_deg": 206,
            "wind_gust": 8.04,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 94,
            "pop": 0.94,
            "rain": 6.94,
            "uvi": 12.43
        },
        {
            "dt": 1655533800,
            "sunrise": 1655512290,
            "sunset": 1655560072,
            "moonrise": 1655574600,
            "moonset": 1655526300,
            "moon_phase": 0.65,
            "temp": {
                "day": 29.43,
                "min": 27.78,
                "max": 29.52,
                "night": 28.23,
                "eve": 29.33,
                "morn": 27.84
            },
            "feels_like": {
                "day": 34.56,
                "night": 32.85,
                "eve": 34.75,
                "morn": 31.7
            },
            "pressure": 1007,
            "humidity": 74,
            "dew_point": 24.31,
            "wind_speed": 7.63,
            "wind_deg": 217,
            "wind_gust": 8.24,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 29,
            "pop": 0.91,
            "rain": 10.16,
            "uvi": 12.53
        },
        {
            "dt": 1655620200,
            "sunrise": 1655598700,
            "sunset": 1655646486,
            "moonrise": 0,
            "moonset": 1655616420,
            "moon_phase": 0.68,
            "temp": {
                "day": 29.19,
                "min": 27.75,
                "max": 29.57,
                "night": 28.59,
                "eve": 29.34,
                "morn": 27.75
            },
            "feels_like": {
                "day": 34.17,
                "night": 32.7,
                "eve": 34.77,
                "morn": 31.76
            },
            "pressure": 1006,
            "humidity": 75,
            "dew_point": 24.45,
            "wind_speed": 6.61,
            "wind_deg": 213,
            "wind_gust": 7.12,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 70,
            "pop": 0.94,
            "rain": 12.88,
            "uvi": 12.39
        },
        {
            "dt": 1655706600,
            "sunrise": 1655685111,
            "sunset": 1655732899,
            "moonrise": 1655663580,
            "moonset": 1655706360,
            "moon_phase": 0.72,
            "temp": {
                "day": 28.12,
                "min": 26.81,
                "max": 28.12,
                "night": 26.83,
                "eve": 26.81,
                "morn": 27.44
            },
            "feels_like": {
                "day": 31.93,
                "night": 29.45,
                "eve": 29.66,
                "morn": 30.62
            },
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 23.55,
            "wind_speed": 6.18,
            "wind_deg": 203,
            "wind_gust": 7.22,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 91,
            "pop": 1,
            "rain": 29.16,
            "uvi": 13
        },
        {
            "dt": 1655793000,
            "sunrise": 1655771522,
            "sunset": 1655819312,
            "moonrise": 1655752260,
            "moonset": 1655796000,
            "moon_phase": 0.75,
            "temp": {
                "day": 28.33,
                "min": 27.14,
                "max": 28.33,
                "night": 27.94,
                "eve": 27.75,
                "morn": 27.14
            },
            "feels_like": {
                "day": 32.26,
                "night": 31.65,
                "eve": 31.62,
                "morn": 29.95
            },
            "pressure": 1003,
            "humidity": 76,
            "dew_point": 23.71,
            "wind_speed": 8.3,
            "wind_deg": 273,
            "wind_gust": 8.86,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 44,
            "pop": 1,
            "rain": 23.45,
            "uvi": 13
        },
        {
            "dt": 1655879400,
            "sunrise": 1655857935,
            "sunset": 1655905724,
            "moonrise": 1655840820,
            "moonset": 1655885520,
            "moon_phase": 0.79,
            "temp": {
                "day": 26.7,
                "min": 26.37,
                "max": 28.21,
                "night": 26.37,
                "eve": 28.16,
                "morn": 26.67
            },
            "feels_like": {
                "day": 29.32,
                "night": 26.37,
                "eve": 31.71,
                "morn": 29.33
            },
            "pressure": 1005,
            "humidity": 83,
            "dew_point": 23.63,
            "wind_speed": 5.04,
            "wind_deg": 220,
            "wind_gust": 5.38,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 18.88,
            "uvi": 13
        }
    ]
}*/
const initialState={
    "id": 1275339,
    "name": "Mumbai",
    "state": "",
    "country": "IN",
    "coord": {
        "lon": 72.847939,
        "lat": 19.01441
    }
}
  const [city, setcity] = useState(initialState)
  const handleOnSearch = (results) => {    
    setcity(results) 
    //console.log(results)
     //
  }
  const latlong=city.coord
  
  useEffect((e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlong.lat}&lon=${latlong.lon}&&units=metric&appid=67bafc99f877ecb61cbd4de9f37fad0b`).then((data)=>{
      data.json().then((e)=>{
        
       props.setData(e)
       
       props.setCity(city.name)
      })

    }).catch((e)=>{
      console.log(e)
    })
  },[city])
  const items=data
  return (
    <div className='SearchBar'>
      <ReactSearchAutocomplete
      placeholder='Search your place here'
      items={items}
      autoFocus
      fuseOptions={
        {keys:["name"]}
        
      }
      resultsStringKeyName={["name","country"]}

      //onSearch={handleOnSearch}
      onSelect={handleOnSearch}/>     
       
    </div>
  )
}

export default Search