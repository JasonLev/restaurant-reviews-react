import React from 'react'

const Rating = (props) => (

  <span className="mbl">
    <input className="star"
           id={`star-${props.data}`}
           type="radio"
           name="star"
           checked={props.checked}
           value={props.data}/>
    <label htmlFor={`star-${props.data}`}>{props.data}</label>
  </span>
)

const Ratings = (props) => {
  let ratings = []
  ratings.push(<Rating key="rating-0" data={1} checked={props.defaultSelect === 20} />);
  for (let i = 2; i < 6; i++) {
    ratings.push(<Rating key={`rating-${i}`} data={i} />);
  }
  return <div>{ratings}</div>
}

export default Ratings
