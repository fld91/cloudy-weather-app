import React from 'react'
import { useState,useEffect } from 'react'
import '../../styles/dailyRow.css'
import d1 from '../../assets/1d.png'
import d2 from '../../assets/2d.png'
import d3 from '../../assets/3d.png'
import d4 from '../../assets/4d.png'
import d9 from '../../assets/9d.png'
import d10 from '../../assets/10d.png'
import d11 from '../../assets/11d.png'
import d13 from '../../assets/13d.png'





function DailyRow(props) {
 
 const [imggg, setimg] = useState(d2) 


 useEffect(() => {
  switch(props?.imgg)
  {
    case "1d":
      setimg(d1)
      break;
    case "2d":
      setimg(d2)
      break;
      case "3d":
      setimg(d3)
      break;
      case "4d":
      setimg(d4)
      break;
      case "9d":
      setimg(d9)
      break;
      case "10d":
      setimg(d10)
      break;
      case "11d":
      setimg(d11)
      break;
      case "13d":
      setimg(d13)
      break;
    default:setimg(d2)
  }
  
 
   
 }, [props])
 

   
  return (
    <div className='daily-row'>
         <div className='week-day'>{props.day}</div>
        <div className='precipitation'>{props.precipitation}</div>
       <img src={imggg} alt=''className='weather-img'/>       
       <div className='min'>{props.min}</div>
       <div className='bar'></div>
       <div className='max'>{props.max}</div>
    </div>
  )
}

export default DailyRow     