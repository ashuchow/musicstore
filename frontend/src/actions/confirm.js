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

const ConfTile= ({ products }) => {
  
    return products.map((product) => (
      <div>
  <CardGroup>
  <Card border="dark" style={{ width: '18px' }}>
  <div className="d-flex flex-column align-items-center text-center">
      <img className="float right" src={this.props.image}alt="" className="img-fluid rounded shadow-sm"></img>
     </div>
    <Card.Body>
    <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.category}
      </Card.Text>
      <Card.Title>Brand:</Card.Title>
      <Card.Text>
        {product.brand}
      </Card.Text>
      <Card.Title>Price:</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
      <Card.Title>Status:</Card.Title>
      <Card.Text>
        PURCHASED!
      </Card.Text>
     
    </Card.Body>

    <Card.Footer>

    </Card.Footer>
  </Card>
 
</CardGroup>
<br/>
    
       </div>
  

    ));
  }


export default ConfTile;