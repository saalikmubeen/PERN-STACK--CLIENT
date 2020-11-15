import React, {createContext, useReducer} from "react";
import restaurantReducer from "../reducers/restaurantReducer";


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
    },
    {
        "id": "7",
        "name": "amigos",
        "location": "dargah",
        "price_range": 73
    }
]

export var RestaurantContext = createContext();

export function RestaurantContextProvider(props){
     var [state, dispatch] = useReducer(restaurantReducer, defaultRestaurants);
    return (
        <RestaurantContext.Provider value={{restaurants: state, dispatch}}>
            {props.children}
        </RestaurantContext.Provider>
    )
};