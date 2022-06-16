import React from 'react'
import '../styles/Search.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useState,useEffect} from 'react'

const data =require("../city.json")
function Search(props) {
  const initialState={
    "id": 1275339,
    "name": "Mumbai",
    "state": "",
    "country": "IN",
    "coord": {
        "lon": 72.847939,
        "lat": 19.01441
    }
}

  const [city, setcity] = useState(initialState)
  const handleOnSearch = (results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setcity(results)
       
  }
  const latlong=city.coord
  
  useEffect((e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlong.lat}&lon=${latlong.lon}&&units=metric&appid=67bafc99f877ecb61cbd4de9f37fad0b`).then((data)=>{
      data.json().then((e)=>{
       props.setData(e)
      })

    }).catch((e)=>{
      console.log(e)
    })
  },[city])
  const items=data
  return (
    <div className='SearchBar'>
      <ReactSearchAutocomplete
      placeholder='Search your place here'
      items={items}
      autoFocus
      fuseOptions={
        {keys:["name"]}
        
      }
      resultsStringKeyName={["name","country"]}

      //onSearch={handleOnSearch}
      onSelect={handleOnSearch}/>     
       
    </div>
  )
}

export default Search