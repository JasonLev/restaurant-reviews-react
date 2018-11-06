import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      rating: 20,
      content: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  handleNameChange(event){
    this.setState({name: event.target.value})
  }
  handleRatingChange(event){
    this.setState({rating: parseInt(event.target.value)*20})
  }
  handleContentChange(event){
    this.setState({content: event.target.value})
  }
  submitHandler(e){
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      rating: 20,
      content: ''
    });
    // document.getElementById(`star-${this.state.rating/20}`).setAttribute("checked", false);
  }
  render() {
    return (
      <div className="mbl">
        <h1>Review Form</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text"
                   id="name"
                   placeholder="Put your name here."
                   onChange={this.handleNameChange}
                   value={this.state.name}/>
          </div>
          <div>
            <fieldset className="fieldset" onChange={this.handleRatingChange}>
              <legend>Rating:</legend>
              <input className="star"
                     id="star-1"
                     type="radio"
                     name="star"
                     defaultChecked
                     value="1"/>
              <label htmlFor="star-1">1</label>
              <input className="star"
                     id="star-2"
                     type="radio"
                     name="star"
                     value="2"/>
              <label htmlFor="star-2">2</label>
              <input className="star"
                     id="star-3"
                     type="radio"
                     name="star"
                     value="3"/>
              <label htmlFor="star-3">3</label>
              <input className="star"
                     id="star-4"
                     type="radio"
                     name="star"
                     value="4"/>
              <label htmlFor="star-4">4</label>
              <input className="star"
                     id="star-5"
                     type="radio"
                     name="star"
                     value="5"/>
              <label htmlFor="star-5">5</label>
            </fieldset>
          </div>
          <label htmlFor="content">Content:</label>
          <textarea id="content"
                    name="content"
                    placeholder="Leave your review here"
                    onChange={this.handleContentChange}
                    value={this.state.content}/>
          <button type="submit" className="button large success">Submit</button>
        </form>
      </div>
    )
  }
}


export default ReviewForm
