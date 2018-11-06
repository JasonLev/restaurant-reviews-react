import React from 'react'

const Restaurant = (props) => (
  <div className={ props.isSelected ? "row selected" : "row"}
       id={props.data.id}
       onClick={props.handleClick}>
    <div className="small-5 columns">
      <img src={props.data.image} alt={props.data.name} />
    </div>
    <div className="small-7 columns">
      <h3 >
        {props.data.name}
      </h3>
      <p>{props.data.location}</p>
    </div>
  </div>
)

export default Restaurant
