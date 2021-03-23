import React from "react";
import "../App.css";
import {
  Button,
  Card,
  CardDeck,
  CardGroup,
  CardImg,
  Breadcrumb,
  Table,
  Row,
  Col,
  Container,
} from "react-bootstrap";

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
               <ul >
                  <li key={review._id} >
                  {review.verified === "Y" ? (
                    <b>
                      {review.user}{" "}{" "}
                      :
                    </b>
                  ) : (
                    <b> {review.user}:</b>
                  )}{" "}
                  <p className="review">{review.body}</p>
                </li>
                </ul>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewTile;
