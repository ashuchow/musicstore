import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardDeck, CardImg, Breadcrumb, Table } from "react-bootstrap";

class HotelTile extends Component {
  render() {
    return (
      <div>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src= {this.props.image} />
    <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>
        {this.props.category}
      </Card.Text>
      <Card.Title>Brand:</Card.Title>
      <Card.Text>
        {this.props.brand}
      </Card.Text>
      <Card.Title>Price:</Card.Title>
      <Card.Text>
        {this.props.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/bh">
                    <Button variant="danger">
                        Book 
                    </Button>
    </Link>
    </Card.Footer>
  </Card>
 
</CardDeck>
<br/>
    
       </div>
  

    );
  }
}

export default HotelTile;