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
} from "react-bootstrap";

const ProductTile = ({ product }) => {
  return (
    <div>
      <CardGroup>
        <Card border="dark" bg="lightsalmon" style={{ width: "18px" }}>
          <div className="d-flex flex-column align-items-center text-center">
            <img
              className="float right"
              src={product.imageurl}
              alt=""
              className="img-fluid rounded shadow-sm"
            ></img>
          </div>
          <center>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>CATEGORY: {product.category}</Card.Text>

              <Card.Text>BRAND: {product.brand}</Card.Text>

              <Card.Text>PRICE: Rs. {product.price}</Card.Text>
            </Card.Body>
          </center>
          <Card.Footer>
            <Link to={"/product/" + product._id}>
              <Button variant="danger">View Product</Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default ProductTile;
