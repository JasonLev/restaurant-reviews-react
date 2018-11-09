import React, { Component } from 'react'
import Input from '../components/Input'

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
    this.setState({[event.target.id]: event.target.value})
  }
  handleCategoriesChange(){
    let content = this.categoryTextInput.value.trim()
    if (content.length) {
      let addedCategories = content.split(",").map(category => category.trim())
      let newCategories = [...this.state.categories, ...addedCategories]
      this.setState({
        categories: newCategories
      });
      this.categoryTextInput.value = ''
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
          <Input id={"name"}
                 placeholder="What name do you call the restaurant?"
                 handleRef={input => { this.firstTextInput = input; }}
                 label={"Restaurant Name:"}
                 required={true}
                 maxLength={50}
                 value={this.state.name}
                 onChange={this.handleInputChange} />
          <Input id={"location"}
                 placeholder="Where is this restaurant?"
                 label={"Location (optional):"}
                 maxLength={50}
                 value={this.state.location}
                 onChange={this.handleInputChange} />
          <Input id={"description"}
                 placeholder="How would you describe this restaurant?"
                 label={"Description (optional):"}
                 maxLength={50}
                 value={this.state.description}
                 onChange={this.handleInputChange} />
          <Input id={"image"}
                 placeholder="link to restaurant image?"
                 label={"Image Link Address (optional):"}
                 maxLength={250}
                 value={this.state.image}
                 onChange={this.handleInputChange} />
          <Input id={"website"}
                 placeholder="website address?"
                 label={"Website (optional):"}
                 maxLength={50}
                 value={this.state.website}
                 onChange={this.handleInputChange} />
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
