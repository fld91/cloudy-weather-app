import React from 'react'
import profile from '../assets/profile.jpeg'
import '../styles/detailCityCard.css'
import imag from '../assets/icons8-search-ios-glyph-16.png'
import ChanceOfRain from '../charts/ChanceOfRain'
function DetailCityCard(props,a) {
  const temp=28
  const d=new Date();
  const date=String( "Sat," + d.getDate() + "Aug")
  const feelslike=32;
  const sunsetTime=20.15
  const cityName="Berlin, Germany" 
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
              {temp}
            </div>
           <span className='degcel'>&#8451;</span>
          </div>
          <span className='cityname' >{cityName}</span>
          <span className='btm'>Feels like {feelslike}  &#183; Sunset {sunsetTime} </span>
        </div>
        <div className='bottom'>
<p className='btm-title-text'>Chance of rain</p>
<ChanceOfRain/>

        </div>
    </div>
  )
}

export default DetailCityCard