function restaurantReducer(state, action){
    switch(action.type){
        case "SET_RESTAURANTS":
            return [...action.restaurants]
        case "ADD_RESTAURANT":
            return [...state, action.restaurant];
        case "UPDATE_RESTAURANT":
            return state.map((restaurant) => restaurant.id === action.id ? {...restaurant, ...action.restaurantUpdates} : restaurant);
        case "DELETE_RESTAURANT":
            return state.filter((restaurant) => restaurant.id !== action.id);
        default:
            return state
    }

}

export default restaurantReducer;