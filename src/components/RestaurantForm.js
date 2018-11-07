import React, { Component } from 'react'

class RestaurantForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      description: '',
      categories: [],
      image: '',
      website: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCategoriesChange = this.handleCategoriesChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  componentDidMount() {
    this.firstTextInput.focus();
  }
  handleInputChange(event){
    let content = event.target.value
    if (content.length) {
      this.setState({[event.target.id]: content})
    }
  }
  handleCategoriesChange(event){
    let content = event.target.value
    if (content.length) {
      this.setState({content: content.trim()})
    }
  }
  submitHandler(e){
    e.preventDefault()
    if (this.state.name.length) {
      this.props.onSubmit(this.state)
      this.setState({
        name: '',
        location: '',
        description: '',
        categories: [],
        image: '',
        website: ''
      });
    } else {
      alert("You can't submit the form just yet.  No empty form fields!")
    }
  }
  render() {
    return (
      <div className="mbl">
        <h1>Restaurant Form</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Restaurant Name:</label>
            <input type="text"
                   id="name"
                   ref={(input) => { this.firstTextInput = input; }}
                   required
                   maxLength="50"
                   placeholder="What name do you call the restaurant?"
                   onChange={this.handleInputChange}
                   value={this.state.name}/>
          </div>
          <button type="submit" className="button large success">Submit</button>
        </form>
      </div>
    )
  }
}


export default RestaurantForm
