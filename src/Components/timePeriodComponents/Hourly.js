import React from 'react'
import {userContext} from '../../App'
import { useContext } from 'react'

function Hourly(props) {
  const first = useContext(userContext)
  return (
    <div>{console.log(first.lat)}



    </div>
  )
}

export default Hourly