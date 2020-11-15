import React, {useContext, useState} from 'react';
import {RestaurantContext} from "../contexts/RestaurantContext";

function AddRestaurant() {
  var [name, setName] = useState("");
  var [location, setLocation] = useState("");
  var [price, setPrice] = useState('');

  var {dispatch} = useContext(RestaurantContext);

  function handleSubmit(e){
       e.preventDefault();

       dispatch({
         type: "ADD_RESTAURANT",
         restaurant: {name, location, price_range: price}
       })

  }


  return (
    <div className="mb-4">
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"
            placeholder="location"
          />
        </div>
        <div className="col">
        <input
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            type="number"
            placeholder="price"
            min="0"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </form>
  </div>
  );
}

export default AddRestaurant;
