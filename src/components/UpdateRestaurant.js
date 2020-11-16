import React, {useContext, useState} from 'react';
import {RestaurantContext} from "../contexts/RestaurantContext";
import {withRouter} from "react-router-dom";
import Restaurant from "../apis/restaurant";

function UpdateRestaurant(props) {
  var {restaurants, dispatch} = useContext(RestaurantContext);
  var restaurant = restaurants.find((restaurant) => restaurant.id === props.match.params.id);

  var [name, setName] = useState(restaurant.name);
  var [location, setLocation] = useState(restaurant.location);
  var [price, setPrice] = useState(restaurant.price_range);


  async function handleSubmit(e){
    e.preventDefault();

    var res = await Restaurant.put(`/${restaurant.id}`, {name, location, price_range: price});

     dispatch({
       type: "UPDATE_RESTAURANT",
       id: restaurant.id,
       restaurantUpdates: {...res.data.data.restaurants}
     })

     props.history.push("/");
  }
  

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              className="form-control"
              type="text"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              id="location"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price_range">Price Range</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id="price_range"
              className="form-control"
              type="number"
              min="0"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    )
}

export default withRouter(UpdateRestaurant);
