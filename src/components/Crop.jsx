import React from 'react'
import PropTypes from 'prop-types'

function Crops(props){
  return (
    <div>
      <h3>{props.selectedMonth}</h3>
      <ul>
        <li>{props.cropNames}</li>
      </ul>
      <hr/>
    </div>
  )
}
Crops.prototype = {
  selectedMonth: PropTypes.string.isRequired,
  cropNames: PropTypes.arrayOf(PropTypes.string)
}

export default Crops
