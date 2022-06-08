import React from 'react'
import '../styles/favorite.css'
import cityImage from '../assets/images.jpeg'

function Favorite(props) {
  return (
    
      <div className='favPlace'>
        {/* <div className='img'></div> */}
        <img className='img1' src={cityImage} alt=""/>
        <div className='cityName'>{props.cityName}</div>
      </div>
   
  )
}

export default Favorite