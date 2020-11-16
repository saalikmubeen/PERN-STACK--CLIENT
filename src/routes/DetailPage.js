import React from 'react';
import Review from "../components/Review";
import AddReview from "../components/AddReview";

function DetailPage() {
  return (
    <div className="container">
        <Review/>
        <AddReview/>
    </div>
  );
}

export default DetailPage;
