import React, {useContext} from 'react';
import {RestaurantContext} from "../contexts/RestaurantContext";

function RestaurantList() {
     var restaurants = useContext(RestaurantContext);
     console.log(restaurants)
    return (
        <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Restaurant</th>
              <th scope="col">Location</th>
              <th scope="col">Price Range</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <tr
                    key={restaurant.id}
                  >
                    <td>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    {/* <td>{"$".repeat(restaurant.price_range)}</td> */}
                    <td>{restaurant.price_range}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <td>mcdonalds</td>
              <td>New YOrk</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>mcdonalds</td>
              <td>New YOrk</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    )
}

export default RestaurantList;