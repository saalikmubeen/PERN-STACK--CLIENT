import React from 'react';
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

function HomePage() {
  return (
    <div className="container">
         <Header/>
         <AddRestaurant/>
         <RestaurantList/>
    </div>
  );
}


export default HomePage;