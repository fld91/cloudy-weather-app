import React from 'react'
import Favorite from './Favorite'
import '../styles/favoriteContainer.css'


const cities=["Nagpur","Indore","chandigarh","Mysore"]
function FavoriteContainer() {
  return (
    <div className='favoriteContainer'>
        {
            cities.map((city)=>{
               return <Favorite cityName={city} key={city}/>
            })
        }
        </div>
  )
}

export default FavoriteContainer