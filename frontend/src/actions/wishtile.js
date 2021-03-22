import React, { Component } from "react";
import { Link } from "react-router-dom";
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

const WishTile = ({
  products,
  moveToCart,
  removeFromWishlist,
  buyProduct,
  buyAllProducts,
}) => {
  return products.map((product) => (
    <div>
      <CardGroup>
        <Card bg="dark" text="light">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              className="float right"
              src={product.imageurl}
              alt=""
              className="img-fluid rounded shadow-sm"
            ></img>
          </div>
          <div class="col-sm-6">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.category}</Card.Text>
              <Card.Title>Brand:</Card.Title>
              <Card.Text>{product.brand}</Card.Text>
              <Card.Title>Price:</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>

            <Link to="/payment">
              <Button variant="danger">Buy Now</Button>
            </Link>
            <Link to="/wishlist">
              <Row>
                <button
                  className="cart-button"
                  onClick={() => moveToCart(product._id)}
                >
                  Move to Cart
                </button>
                <button
                  className="cart-button"
                  onClick={() => removeFromWishlist(product._id)}
                >
                  Remove from Wishlist
                </button>
                <button
                  className="cart-button"
                  onClick={() => buyProduct(product._id)}
                >
                  Buy Now!
                </button>
                <button
                  className="cart-button"
                  onClick={() => buyAllProducts(product._id)}
                >
                  Buy All Now!
                </button>
              </Row>
            </Link>
          </div>
        </Card>
      </CardGroup>
      <br />
    </div>
  ));
};

export default WishTile;
