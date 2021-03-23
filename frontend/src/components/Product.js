// This is the individual Product Page - users can view details of each product and take actions here.

import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Axios from "axios";
import Items from "../actions/product";
import ReviewTile from "../actions/reviews";

class Product extends Component {
  state = {
    products: [],
    newreview: "",
  };

  componentDidMount() {
    let url = window.location.pathname;
    let prod_id = url.split("/")[2];
    fetch("http://localhost:5000/products/getproductbyid/" + prod_id)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      })
      .catch(console.log);
  }

  handleChange = async (e) => {
    await this.setState({ newreview: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let url = window.location.pathname;
    let productId = url.split("/")[2];
    //console.log(this.state.newreview);
    //console.log("New review be added");
    Axios({
      method: "POST",
      data: {
        review: this.state.newreview,
        productId: productId,
      },
      withCredentials: true,
      url: "http://localhost:5000/users/addreview",
    }).then(function (res) {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });

    await fetch("http://localhost:5000/products/getproductbyid/" + productId)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      })
      .catch(console.log);
  };

  render() {
    const addToCart = (cartProduct) => {
      Axios({
        method: "POST",
        data: {
          productId: cartProduct,
        },
        withCredentials: true,
        url: "http://localhost:5000/users/addtocart",
      }).then(function (res) {
        console.log(res);
        alert(res.data);
      });
    };

    const addToWishlist = (cartProduct) => {
      Axios({
        method: "POST",
        data: {
          productId: cartProduct,
        },
        withCredentials: true,
        url: "http://localhost:5000/users/addtowishlist",
      }).then(function (res) {
        console.log(res);
        alert(res.data);
      });
    };

    return (
      <div style={{ paddingBottom: "5%" }}>
        <Container>
          <div className="product-style">
            <div className="item-b">
              <Container id="content">
                {this.state.products.map((product) => (
                  <li key={product._id}>
                    <div className="itemstyle">
                      <Items products={this.state.products} />
                      {product.name}
                      <br></br>
                      {product.brand}
                      <br></br>
                      Price: Rs. {product.price}
                    </div>
                    <center>
                      <div style={{width: "50%"}}>
                    <Row>
                      <Col>
                        <button onClick={() => addToCart(product._id)}>
                          Move to Cart
                        </button>
                      </Col>
                      <Col>
                        <button onClick={() => addToWishlist(product._id)}>
                          Add to Wishlist
                        </button>
                      </Col>
                    </Row>
                    </div>
                    </center>
                  </li>
                ))}
              </Container>
            </div>
          </div>

          <div
            style={{
              marginTop: "3%",
              width: "100%",
              padding: "0%",
              color: "white",
            }}
          >
            <h1>Reviews for the product:</h1>
            <center>
              <ReviewTile products={this.state.products} />
            </center>

            <h1 style={{ marginTop: "3%", color: "white" }}>Add a review!</h1>
            <form onSubmit={this.handleSubmit}>
              <label style={{ width: "100%", display: "block" }}>
                <textarea
                  style={{ width: "100%" }}
                  value={this.state.newreview}
                  onChange={this.handleChange}
                  placeholder="Add your review here!"
                />
                <center>
                  <div style={{ width: "10%" }}>
                    <button onClick={() => "submit"}>Submit</button>
                  </div>
                </center>
              </label>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Product;
