import React from 'react'

function Datacard(props) {
    return (
        <div className="Card">
            <div><h1>{props.city}</h1> </div> 
           <div>Feels like {props.feelsLike}</div>
           <div> Temp {props.Temp}</div> 
           <div>Weather {props.wType}</div> 
           
            
        </div>
    )
}

export default Datacard
