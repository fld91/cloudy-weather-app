import React from 'react'
import profile from '../assets/profile.jpeg'
import '../styles/detailCityCard.css'
import imag from '../assets/icons8-search-ios-glyph-16.png'
function DetailCityCard() {
  const temp=28
  const d=new Date();
  const date=String( "Sat," + d.getDate() + "Aug")
  const feelslike=32;
  const sunsetTime=20.15
  return (
    <div >
        <div className='topbar'>
          <p className='notify'>Notifications
          <div className='notify-box'>4</div></p>
          <p>Places</p>
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
          <span></span>
          <span className='btm'>Feels like {feelslike}  &#183; Sunset {sunsetTime} </span>
        </div>
        <div className='bottom'>


        </div>
    </div>
  )
}

export default DetailCityCard