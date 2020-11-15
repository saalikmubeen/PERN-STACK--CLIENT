import React, {createContext, useReducer, useEffect} from "react";
import restaurantReducer from "../reducers/restaurantReducer";
import Restaurant from "../apis/restaurant";


var defaultRestaurants = [
    {
        "id": "1",
        "name": "mcdonalds",
        "location": "usa",
        "price_range": 33
    },
    {
        "id": "2",
        "name": "pizza hut",
        "location": "vegas",
        "price_range": 46
    },
    {
        "id": "4",
        "name": "kfc",
        "location": "los angeles",
        "price_range": 95
    }
]

export var RestaurantContext = createContext();

export function RestaurantContextProvider(props){
     var [state, dispatch] = useReducer(restaurantReducer, defaultRestaurants);

     useEffect(() => {
        async function fetchRestaurants(){
            var res = await Restaurant.get("/");
            dispatch({
                type: "SET_RESTAURANTS",
                restaurants: res.data.data.restaurants
            })
        }

        fetchRestaurants(); 

     }, [])

    return (
        <RestaurantContext.Provider value={{restaurants: state, dispatch}}>
            {props.children}
        </RestaurantContext.Provider>
    )
};