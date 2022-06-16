import React from 'react'
import '../../styles/dailyRow.css'
import imag from '../../assets/02d@2x.png'


function DailyRow(props) {
   
  return (
    <div className='daily-row'>
         <div className='week-day'>{props.day}</div>
        <div className='precipitation'>{props.precipitation}</div>
       <img src={imag} alt=''className='weather-img'/>
       
       <div className='min'>{props.min}</div>
       <div className='bar'></div>
       <div className='max'>{props.max}</div>
    </div>
  )
}

export default DailyRow     