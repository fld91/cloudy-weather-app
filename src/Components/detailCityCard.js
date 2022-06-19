import React from 'react'
import profile from '../assets/profile.jpeg'
import '../styles/detailCityCard.css'
import imag from '../assets/icons8-search-ios-glyph-16.png'
import ChanceOfRain from '../charts/ChanceOfRain'
import {useState,useEffect} from 'react'
function ConvertToDayDate(a)
{

}
function Cal_OrderOfDay(day){
  //calculate order of day like today or tommorow  or day
  


}

function DetailCityCard(wData) {
  const [Temp, setTemp] = useState(28.6)
  const [feels_like,setFeelLike]=useState(25)
  const date=String( "Sat,"  + "Aug")
  
  const [sunsetTime, setSunset] = useState(8)
  const [cityName, setcityName] = useState("New Delhi")
  useEffect(() => {
   
  setTemp(Math.floor(wData.data.current.temp))
  setFeelLike(Math.floor(wData.data.current.feels_like))
  setcityName(wData.cityName)
  const time=new Date(wData.data.current.sunset*1000)
  const hm=time.getHours() + "." +time.getMinutes()
  setSunset(hm)
  },)
  
  return (
    <div >
        <div className='topbar'>
          <div className='notify'>
            <span>Notifications</span> 
          <div className='notify-box'>4</div></div>          
          <img src={profile} width="80 px"alt='' id='profile'></img>
        </div>
        <div className='middle'>
          <div className='toptile'>          
              <img src={imag} alt="" id='weather-img'></img>            
           <div>
              <p className='today'>Today</p>
              <div className='date'>{date}</div>
            </div>
          </div>
          <div className='temp'>
            <div className='temperature'>
              {Temp}
            </div>
           <span className='degcel'>&#8451;</span>
          </div>
          <span className='cityname' >{cityName}</span>
          <span className='btm'>Feels like {feels_like}  &#183; Sunset {sunsetTime} </span>
        </div>
        <div className='bottom'>
<p className='btm-title-text'>Chance of rain</p>
<ChanceOfRain />

        </div>
    </div>
  )
}

export default DetailCityCard