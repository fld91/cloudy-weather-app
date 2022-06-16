import React from 'react'
import '../../styles/DailyContainer.css'
import DailyRow from './DailyRow'


function calculateDay(timestamp){
  console.log(timestamp)
  const date=new Date(timestamp*1000);  
  const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]  
  return days[date.getDay()]

}

function Daily(props) {
  const dailyData=props.data.daily;
  
  return (
    <div className='dailyContainer'> 
   { 
      dailyData.map((dayWeather)=>{
      const day=calculateDay(dayWeather.dt)
      console.log(day)
    return <DailyRow day={day} precipitation={dayWeather.dew_point} min={dayWeather.temp.min} max={dayWeather.temp.max}/>
   })}     
      
    </div>
  )
}

export default Daily