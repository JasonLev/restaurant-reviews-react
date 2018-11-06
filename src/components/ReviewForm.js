import React, { Component } from 'react'
import Ratings from './Ratings'

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
    this.setState({name: event.target.value.trim()})
  }
  handleRatingChange(event){
    this.setState({rating: parseInt(event.target.value)*20})
  }
  handleContentChange(event){
    let content = event.target.value
    if (content.length) {
      this.setState({content: content.trim()})
    }
  }
  submitHandler(e){
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      rating: 20,
      content: ''
    });
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
              <Ratings defaultSelect={this.state.rating} />
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
