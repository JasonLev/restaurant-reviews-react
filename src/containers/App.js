import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import RestaurantForm from '../components/RestaurantForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id,
      showRestaurantForm: false
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this)
    this.handleRestaurantSubmit = this.handleRestaurantSubmit.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  restaurantClick(event) {
    this.setState({
      selectedId: parseInt(event.currentTarget.id),
      showRestaurantForm: false
    })
  }
  handleReviewSubmit(formState){
    formState.restaurant_id = this.state.selectedId
    this.setState({
      reviews: [...this.state.reviews, formState]
    });
  }
  handleRestaurantSubmit(formState){
    formState.id = this.state.restaurants.length
    this.setState({
      restaurants: [...this.state.restaurants, formState]
    });
  }
  changeView(){
    this.setState({
      showRestaurantForm: true
    });
  }
  renderReviewsPanel(){
    let relevantReviews = this.state.reviews.filter(review => {
      return this.state.selectedId === review.restaurant_id
    })
    return(
      <div>
        <h2>Reviews for {this.state.restaurants[this.state.selectedId].name}</h2>
        <Reviews data={relevantReviews} />
        <ReviewForm onSubmit={this.handleReviewSubmit} />
      </div>
    )
  }
  renderRestaurantForm(){
    return (
      <RestaurantForm onSubmit={this.handleRestaurantSubmit} />
    )
  }
  render() {
    let restaurantComponents = this.state.restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id}
                    data={restaurant}
                    isSelected={this.state.selectedId === restaurant.id}
                    handleClick={this.restaurantClick} />
      )
    })
    return(
      <div>
        <header className="row">
          <h1 id="headerTitle">Restaurant Reviews</h1>
        </header>
        <main>
          <div className="row">
            <div className="small-4 columns">
              <h2>Restaurant List</h2>
              {restaurantComponents}
              <button className="button success large" onClick={this.changeView}>Add New Restaurant</button>
            </div>
            <div className="small-7 small-offset-1 columns">
              {this.state.showRestaurantForm ? this.renderRestaurantForm() : this.renderReviewsPanel()}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
