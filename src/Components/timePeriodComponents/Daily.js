import React from 'react'
import '../../styles/DailyContainer.css'

const data=[{
  day:"Monday",
  preci:"54",
}]

function Daily(props) {
  return (
    <div className='dailyContainer'>
        <table>
          <thead>
        <tr>
            <th>Day</th>
            <th>Precipitation</th>
            <th>e</th>
            <th>r</th>
            <th>t</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>4</td>
        </tr>
        </tbody>   
            
        </table>
        
    </div>
  )
}

export default Daily