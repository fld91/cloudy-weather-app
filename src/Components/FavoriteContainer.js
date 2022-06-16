import React from 'react'
import Favorite from './Favorite'
import '../styles/favoriteContainer.css'


const cities = ["Nagpur", "Indore", "chandigarh", "Mysore"]
function FavoriteContainer() {
  function handleFavorite(e){
    console.log(e)
    cities.push(e);

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