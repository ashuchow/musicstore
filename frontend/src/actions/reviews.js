import React from "react";
import "../App.css";

const ReviewTile = ({ products }) => {
  return (
    <div>
      <div className="review-tile">
        {products.map((product) => (
          <div key={product._id}>
            {product.reviews.length === 0 ? (
              <div> No reviews! </div>
            ) : (
              product.reviews.map((review) => (
                <li key={review._id}>
                  {review.verified === "Y" ? (
                    <b>
                      {review.user}{" "}{" "}
                      says:
                    </b>
                  ) : (
                    <b> {review.user} says:</b>
                  )}{" "}
                  <p className="review">{review.body}</p>
                </li>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewTile;
