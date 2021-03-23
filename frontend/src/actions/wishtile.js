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
}) => {
  return products.map((product) => (
    <div>
      <CardGroup>
        <Card bg="dark" text="light">
          <div className="d-flex flex-column align-items-center text-center">
            <br />
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
              <Card.Text>Category: {product.category}</Card.Text>
              <Card.Title>Brand:</Card.Title>
              <Card.Text>{product.brand}</Card.Text>
              <Card.Title>Price:</Card.Title>
              <Card.Text>Rs. {product.price}</Card.Text>
            </Card.Body>
            </div>
            <center>
              <div style={{ width: "90%" }}>
                <Link to="/wishlist">
                  <Row>
                    <Col>
                      <button
                        className="cart-button"
                        onClick={() => moveToCart(product._id)}
                      >
                        Move to Cart
                      </button>
                    </Col>
                    <Col>
                      <button
                        className="cart-button"
                        onClick={() => removeFromWishlist(product._id)}
                      >
                        Remove from Wishlist
                      </button>
                    </Col>
                    <Col>
                      <button
                        className="cart-button"
                        onClick={() => buyProduct(product._id)}
                      >
                        Buy Now!
                      </button>
                    </Col>
                  </Row>
                </Link>
              </div>
            </center>
          
        </Card>
      </CardGroup>
      <br />
    </div>
  ));
};

export default WishTile;
