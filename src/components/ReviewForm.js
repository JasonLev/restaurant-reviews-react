import React, { Component } from 'react'

class ReviewForm extends Component {

  render() {
    return (
<div>
  <h1>Review Form</h1>
  <form>
    <input type="hidden" id={this.props.restaurant_id}/>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name"/>
    </div>

    <div>
      <p>Rating:</p>
        <input className="star star-1" id="star-5" type="radio" name="star"/>
        <label className="star star-1" htmlFor="star-5"></label>
        <input className="star star-2" id="star-4" type="radio" name="star"/>
        <label className="star star-2" htmlFor="star-4"></label>
        <input className="star star-3" id="star-3" type="radio" name="star"/>
        <label className="star star-3" htmlFor="star-3"></label>
        <input className="star star-4" id="star-2" type="radio" name="star"/>
        <label className="star star-4" htmlFor="star-2"></label>
        <input className="star star-5" id="star-1" type="radio" name="star"/>
        <label className="star star-5" htmlFor="star-1"></label>
    </div>
    <label>Text:</label>
    <textarea/>
    <button type="submit">Submit</button>
  </form>
</div>
    )
  }
}


export default ReviewForm
