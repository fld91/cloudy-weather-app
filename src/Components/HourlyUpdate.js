import React from 'react'

const style={container:{backgroundColor:"rgb(100,200,250)"}}
function HourlyUpdate(props) {
  return (
    <div className='container' style={style.container}>
      <h2>Hourly Update</h2>
      <div>Time {props.time}</div>
      <div>Feels like {props.feelsLike}</div>
           <div>Max Temp {props.maxTemp}</div> 
           <div>Min Temp {props.minTemp}</div>
    </div>
  )
}

export default HourlyUpdate


