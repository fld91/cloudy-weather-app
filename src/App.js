
import { useState, useEffect } from 'react';
import './App.css';
import CurrWeather from './Components/CurrWeather';
import HourlyUpdate from './Components/HourlyUpdate';






function App() {

  
  
  
  return (
    <div className="App">
     <CurrWeather/>
     
      <div>
       <HourlyUpdate/>
        </div>


    </div>
  );
}

export default App;
