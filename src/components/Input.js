import React from 'react'

const Input = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label} (optional):</label>
    <input type="text"
           id={props.id}
           maxLength={props.maxLength}
           placeholder={props.placeholder}
           onChange={props.onChange}
           value={props.value} />
  </div>
)

export default Input
