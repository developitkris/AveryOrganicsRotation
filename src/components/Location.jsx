import React from 'react'
import PropTypes from 'prop-types'

function Location(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
      <hr/>
    </div>
  )
}
Location.prototype = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: ProtoType.string
}

export default Location
