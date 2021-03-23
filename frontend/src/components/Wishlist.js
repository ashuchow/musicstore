import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WishTile from "../actions/wishtile";
import Axios from "axios";

class Wishlist extends Component {
  state = {
    products: [],
    wishlist: [],
  };

  componentDidMount() {

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

  deleteWish(productId) {
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

  buy(productId) {
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

  render() {
    return (
      <div>
        <center>
          <h1
            style={{
              fontSize: "4rem",
              color: "white",
              fontFamily: "East Sea Dokdo",
            }}
          >
            {" "}
            WISHLIST{" "}
          </h1>
        </center>

        <div className="container">
          <Container id="content">
            <WishTile
              products={this.state.wishlist}
              moveToCart={this.moveToCart}
              deleteWish={this.deleteWish}
              buy={this.buy}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default Wishlist;
