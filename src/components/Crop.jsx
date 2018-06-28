import React from 'react'
import PropTypes from 'prop-types'

function Crop(props){
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
Crop.prototype = {
  selectedMonth: PropTypes.string.isRequired,
  cropNames: PropTypes.arrayOf(PropTypes.string)
}

export default Crop
