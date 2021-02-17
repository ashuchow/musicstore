import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardDeck, CardGroup, CardImg, Breadcrumb, Table } from "react-bootstrap";

class WishTile extends Component {
  render() {
    return (
      <div>
  <CardGroup>
  <Card  bg="dark" text="light">
  <div className="d-flex flex-column align-items-center text-center">
      <img className="float right" src={this.props.image}alt="" className="img-fluid rounded shadow-sm"></img>
     </div>
    <div class="col-sm-6">
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
    <Link to="/payment">
                    <Button variant="danger">
                        Buy Now
                    </Button>
    </Link>
    <Link to="/wishlist">
    <Button variant="danger">
                        Add to cart
                    </Button>
                    </Link>
    </Card.Footer>
    </div>
  </Card>
 
</CardGroup>
<br/>
    
       </div>
  

    );
  }
}

export default WishTile;