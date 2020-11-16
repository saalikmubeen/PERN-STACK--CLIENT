import React, {useEffect, useState} from 'react';
import Review from "../components/Review";
import AddReview from "../components/AddReview";
import Restaurant from "../apis/restaurant";
import RatingStar from "../components/RatingStar";


function DetailPage(props) {
     var [restaurant, setRestaurant] = useState({});
     var [reviews, setReviews] = useState([]);
     var [ratings, setRatings] = useState({});
     var [toggle, setToggle] = useState(true);

    useEffect(() => {
      async function fetchRestaurant(){
        var res = await Restaurant.get(`/${props.match.params.id}`);
         
        setRestaurant(res.data.data.restaurants);
        setReviews(res.data.data.reviews);
        setRatings(res.data.data.ratings);
      }

      fetchRestaurant();
    }, [toggle])

    async function addReview(reviewObj){
       var res = await Restaurant.post(`/${props.match.params.id}/reviews`, reviewObj);

       setReviews([...reviews, res.data.data.review]);
       setToggle(!toggle)
    }
     
  return (
    <div className="container">
        <div className="text-center mb-5">
        <h1 className="font-weight-light display-1">
          {restaurant.name}
        </h1>
         <RatingStar rating={ratings && ratings.avg_rating}/>
         <span className="ml-1 text-warning">({ratings && (ratings.avg_rating)})</span>
        </div>
        <Review reviews={reviews}/>
        <AddReview addReview={addReview}/>
    </div>
  );
}

export default DetailPage;