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
  handleCategoriesChange(){
    let content = this.categoryTextInput.value.trim()
    if (content.length) {
      let addedCategories = content.split(",").map(category => category.trim())
      let newCategories = [...this.state.categories, ...addedCategories]
      this.setState({
        categories: newCategories
      });
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
    let currentCategories = this.state.categories.map((category, i) => <span key={i} className="tag">{category}</span>)
    return (
      <div className="mbl pos-rel">
        <button className="close-button" aria-label="Close alert" type="button" onClick={this.props.onHide}>
          <span aria-hidden="true">&times;</span>
        </button>
        <h1>Restaurant Form</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Restaurant Name:</label>
            <input type="text"
                   id="name"
                   ref={input => { this.firstTextInput = input; }}
                   required
                   maxLength="50"
                   placeholder="What name do you call the restaurant?"
                   onChange={this.handleInputChange}
                   value={this.state.name}/>
          </div>
          <div>
            <label htmlFor="location">Location (optional):</label>
            <input type="text"
                   id="location"
                   maxLength="50"
                   placeholder="Where is this restaurant?"
                   onChange={this.handleInputChange}
                   value={this.state.location}/>
          </div>
          <div>
            <label htmlFor="description">Description (optional):</label>
            <input type="text"
                   id="description"
                   maxLength="50"
                   placeholder="How would you describe this restaurant?"
                   onChange={this.handleInputChange}
                   value={this.state.description}/>
          </div>
          <div>
            <label htmlFor="image">Image Link Address (optional):</label>
            <input type="text"
                   id="image"
                   maxLength="250"
                   placeholder="link to restaurant image?"
                   onChange={this.handleInputChange}
                   value={this.state.image}/>
          </div>
          <div>
            <label htmlFor="website">Website (optional):</label>
            <input type="text"
                   id="website"
                   maxLength="50"
                   placeholder="website address?"
                   onChange={this.handleInputChange}
                   value={this.state.website}/>
          </div>
          <div className="input-group">
            <span htmlFor="category" className="input-group-label">Tags/Categories (optional):</span>
            <input type="text"
                   id="category"
                   className="input-group-field"
                   ref={input => { this.categoryTextInput = input; }}
                   maxLength="50"
                   placeholder="i.e.: bar, Italian, Mexican"/>
            <div className="input-group-button primary">
              <input type="button"
                     className="button"
                     value="Add"
                     onClick={this.handleCategoriesChange}/>
            </div>
          </div>
          <div className="mbl">{currentCategories}</div>
          <button type="submit" className="button large success">Submit</button>
        </form>
      </div>
    )
  }
}


export default RestaurantForm
