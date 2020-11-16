import React, {useState} from 'react'

function AddReview(props) {
     var [author, setAuthor] = useState("");
     var [rating, setRating] = useState();
     var [review, setReview] = useState("");


     function handleSubmit(e){
        e.preventDefault();

        props.addReview({author, rating, review});
     }
    return (
        <div className="mb-2">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled value="Rating">Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
    )
}

export default AddReview;