import React from 'react'

const Rating = (props) => (
  <label htmlFor={`star-${props.data}`} className={props.checked/20 >= props.data ? "fill" : "unfill"}>
    <input className="star"
           id={`star-${props.data}`}
           type="radio"
           name="star"
           checked={props.checked === 20}
           value={props.data}/>
  </label>
)

const Ratings = (props) => {
  let ratings = []
  for (let i = 5; i > 1; i--) {
    ratings.push(<Rating key={`rating-${i}`} data={i} checked={props.defaultSelect} />);
  }
  ratings.push(<Rating key="rating-0" data={1} checked={props.defaultSelect} />);
  return <div className="rating">{ratings}</div>
}

export default Ratings
