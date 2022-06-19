import React from 'react'
import Favorite from './Favorite'
import '../styles/favoriteContainer.css'
import {useEffect,useState} from 'react'

function FavoriteContainer(props) {
  const [cities, setCities] = useState([])
  function check(city){
  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    if(city==element)
    return true
    
  }
  return false
  }
  function handleFavorite(e){ 
    if(check(props.city))
    {
      alert("Already in favorites")
    }
    else{
     setCities([...cities,props.city])  
    }
    
  }
  return (
    <div className='favoriteContainer'>
      { 
        cities.map((city,index) => {         
          return <Favorite cityName={city} key={city} />
        })
      }
      <button className='favPlace'
      onClick={handleFavorite}>
        <div style={{fontSize: "40px" ,alignContent:"center"} }>+</div>Add your Favourite

        </button>
      </div>
        )
}

export default FavoriteContainer