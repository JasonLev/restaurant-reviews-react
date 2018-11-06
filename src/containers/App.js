import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
  }
  restaurantClick(event) {
    this.setState({selectedId: parseInt(event.currentTarget.id)})
  }
  render() {
    let restaurantComponents = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick} />
      )
    })
    let relevantReviews = this.state.reviews.filter(review => {
      return this.state.selectedId === review.restaurant_id
    })
    return(
      <div>
        <div className="row">
          <h1>Restaurant Reviews</h1>
        </div>
        <div className="row">
          <div className="small-4 columns">
            <h2>Restaurant List</h2>
            {restaurantComponents}
          </div>
          <div className="small-7 small-offset-1 columns">
            <h2>Reviews for {this.state.restaurants[this.state.selectedId].name}</h2>
            <Reviews data={relevantReviews} />
            <ReviewForm restaurant_id={this.state.selectedId} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
