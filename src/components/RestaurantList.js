import React, {useContext} from 'react';
import {withRouter} from "react-router-dom";
import {RestaurantContext} from "../contexts/RestaurantContext";
import Restaurant from "../apis/restaurant";

function RestaurantList(props) {
     var {restaurants, dispatch} = useContext(RestaurantContext);

     async function handleDelete(e, id){
        e.stopPropagation();
         
        await Restaurant.delete(`/${id}`);

        dispatch({
          type: "DELETE_RESTAURANT",
          id: id
        })
     }

     function handleUpdate(e, id){
        e.stopPropagation();
        props.history.push(`/restaurants/${id}/update`)
     }

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
                    onClick={() => props.history.push(`/restaurants/${restaurant.id}`)}
                    key={restaurant.id}
                  >
                    <td>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    <td>$ {restaurant.price_range}</td>
                    <td>
                      <button
                        onClick={(e) => handleUpdate(e, restaurant.id)}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(e, restaurant.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    )
}

export default withRouter(RestaurantList);