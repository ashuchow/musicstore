import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import CartTile from "../actions/carttile";
import Axios from "axios";

class Cart extends Component {
  state = {
    products: [],
    wishlist: [],
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getcartitems",
    }).then((res) => {
      if (res.data === "Please log in to proceed!") {
        alert("Please log in to proceed!");
      } else {
        this.setState({ products: res.data });
        //console.log(res.data);
      }
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getwishlistitems",
    }).then((res) => {
      if (res.data === "Please log in to proceed!") {
        console.log("Please log in to proceed!");
      } else {
        this.setState({ wishlist: res.data });
        //console.log(res.data);
      }
    });
  }

  moveToWishlist(productId) {
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        productId: productId,
      },
      url: "http://localhost:5000/users/movetowishlist",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromCart(productId) {
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        productId: productId,
      },
      url: "http://localhost:5000/users/removefromcart",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromWishlist(productId) {
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        productId: productId,
      },
      url: "http://localhost:5000/users/removefromwishlist",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  moveToCart(productId) {
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        productId: productId,
      },
      url: "http://localhost:5000/users/movetocart",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyProduct(productId) {
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        productId: productId,
      },
      url: "http://localhost:5000/users/buyproduct",
    }).then((res) => {
      console.log(res.data);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyAllProducts() {
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/users/buyallproducts",
    }).then((res) => {
      console.log(res.data);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  render() {
    return (
      <div>
        <center>
          <h1
            style={{
              fontSize: "4rem",
              fontFamily: "East Sea Dokdo",
              color: "white",
            }}
          >
            {" "}
            SHOPPING CART{" "}
          </h1>
        </center>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: rgb(217, 151, 84);
      color: rgb(37, 11, 11);
    }

    .btn-xxl {
      padding: 1rem 1rem;
      font-size: 1.5rem;
      color: white;
    }
    `}
        </style>
        <center>
          <div style={{ width: "30%" }} className="ButtonContainer1">
            <Button
              variant="flat"
              size="xxl"
              onClick={() => this.buyAllProducts()}
            >
              Buy All Products
            </Button>
          </div>
        </center>

        <div className="container">
          <Container id="content">
            <CartTile
              products={this.state.products}
              moveToWishlist={this.moveToWishlist}
              removeFromCart={this.removeFromCart}
              buyProduct={this.buyProduct}
              buyAllProducts={this.buyAllProducts}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default Cart;
