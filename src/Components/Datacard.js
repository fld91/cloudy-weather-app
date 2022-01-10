import React from 'react'

function Datacard(props) {
    return (
        <div className="Card">
            <div><h1>{props.city}</h1> </div> 
           <div>Feels like {props.feelsLike}</div>
           <div>Max Temp {props.maxTemp}</div> 
           <div>Min Temp {props.minTemp}</div> 
           
            
        </div>
    )
}

export default Datacard
