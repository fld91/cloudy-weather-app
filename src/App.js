
import { useState, useEffect } from 'react';
import './App.css';
import CityWeatherCard from './Components/CityWeatherCard';
import CurrWeather from './Components/CurrWeather';
import DetailCityCard from './Components/detailCityCard';
import Favorite from './Components/Favorite';
import FavoriteContainer from './Components/FavoriteContainer';
import HourlyUpdate from './Components/HourlyUpdate';
import Search from './Components/Search';
import TitleLogo from './Components/TitleLogo';

function App() { 
  return (
      <div className="App"> 
      <div className='left'>
      <Search/>
      <TitleLogo/>
      <FavoriteContainer/>
      <CityWeatherCard/> 
      
      </div>   
      <div 
      className='right'>
        <DetailCityCard/>
        </div>    
     
      
      </div>
   
  );
}

export default App;
