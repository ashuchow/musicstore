import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardDeck, CardGroup, CardImg, Breadcrumb, Table } from "react-bootstrap";

class ProductTile extends Component {
  render() {
    return (
      <div>
  <CardGroup>
  <Card border="dark" style={{ width: '18px' }}>
  <div className="d-flex flex-column align-items-center text-center">
      <img className="float right" src={this.props.image}alt="" className="img-fluid rounded shadow-sm"></img>
     </div>
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
                        Buy now 
                    </Button>
    </Link>
    <Link to="/wishlist">
                    <Button variant="danger">
                        Add to Wishlist
                    </Button>
    </Link>
    <Link to="/cart">
                    <Button variant="danger">
                        Add to Cart
                    </Button>
    </Link>
    </Card.Footer>
  </Card>
 
</CardGroup>
<br/>
    
       </div>
  

    );
  }
}

export default ProductTile;