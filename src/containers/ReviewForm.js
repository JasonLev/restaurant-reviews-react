import React, { Component } from 'react'
import Ratings from '../components/Ratings'
import Input from '../components/Input'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      rating: 20,
      content: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  handleInputChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  handleRatingChange(event){
    this.setState({rating: parseInt(event.target.value)*20})
  }
  submitHandler(e){
    e.preventDefault()
    if (this.state.name.length && this.state.content) {
      this.props.onSubmit(this.state)
      this.setState({
        name: '',
        rating: 20,
        content: ''
      });
    } else {
      alert("You can't submit the form just yet.  No empty form fields!")
    }
  }
  render() {
    return (
      <div className="mbl">
        <h1>Review Form</h1>
        <h3>Add new review for {this.props.name}:</h3>
        <form onSubmit={this.submitHandler}>
          <Input id={"name"}
                 placeholder="Put your name here."
                 handleRef={input => { this.firstTextInput = input; }}
                 label={"Reviewer Name:"}
                 required={true}
                 maxLength={50}
                 value={this.state.name}
                 onChange={this.handleInputChange} />
          <fieldset className="fieldset" onChange={this.handleRatingChange}>
            <legend>Rating:</legend>
            <Ratings defaultSelect={this.state.rating} />
          </fieldset>
          <label htmlFor="content">Content:</label>
          <textarea id="content"
                    name="content"
                    required
                    maxLength="200"
                    placeholder="Leave your review here"
                    onChange={this.handleInputChange}
                    value={this.state.content}/>
          <button type="submit" className="button large success">Submit</button>
        </form>
      </div>
    )
  }
}


export default ReviewForm
