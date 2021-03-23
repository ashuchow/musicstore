// This is the Profile Page - users can view their account details and update their information here.

import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileItems from "../actions/profileitems";
import Axios from "axios";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

class Profile extends Component {
  state = {
    address: "",
    name: "",
    mobile: 0,
    orders: [],
    cart: [],
    wishlist: [],
    modal: false,
    newmobile: 0,
    newaddress: "",
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/user",
    }).then((res) => {
      if (res.data === "Please login first") {
        alert(res.data);
      } else {
        this.setState({
          mobile: res.data.mobile,
          name: res.data.username,
          address: res.data.address,
        });
      }
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getcartitems",
    }).then((res) => {
      if (res.data !== "Please log in to proceed!") {
        this.setState({ cart: res.data });
      }
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getwishlistitems",
    }).then((res) => {
      if (res.data !== "Please log in to proceed!") {
        this.setState({ wishlist: res.data });
      }
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getorderitems",
    }).then((res) => {
      if (res.data !== "Please log in to proceed!") {
        this.setState({ orders: res.data });
      }
    });
  }

  logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/logout",
    }).then((res) => {
      alert("You are logged out!");
      //console.log(res.data);
    });
  };

  updateNum = () => {
    Axios({
      method: "POST",
      data: {
        mobile: this.state.newmobile,
      },
      withCredentials: true,
      url: "http://localhost:5000/users/update/number",
    }).then((res) => console.log(res));
  };

  updateAdd = () => {
    Axios({
      method: "POST",
      data: {
        address: this.state.newaddress,
      },
      withCredentials: true,
      url: "http://localhost:5000/users/update/address",
    }).then((res) => console.log(res));
  };

  handleNumChange = async (e) => {
    await this.setState({ newmobile: e.target.value });
    //console.log(this.state.newmobile)
  };

  handleAddChange = async (e) => {
    await this.setState({ newaddress: e.target.value });
    //console.log(this.state.newaddress)
  };

  render() {
    return (
      <div>
        <Container>
          <Row><Col><h1 style={{color:"white"}}>
            <b>Welcome, {this.state.name}</b></h1></Col>
            <Col><p align="right">
              <button
                style={{ maxWidth: "10rem", padding: "0%", marginTop: "2%" }}
                onClick={this.logout}
              >
                {" "}
                Logout{" "}
              </button>
            </p>
            </Col>
          
          </Row>
          <h2 style={{color:"white"}}>
            Your profile information can be seen below.
            <br />
            Please make sure that you have the correct contact and shipping
            details. <br />
            You may also find your cart, wishlist and previously ordered items
            under your personal information.
          </h2>

          <div>
            <div className="userpage">
              <h1 style={{ fontSize: "2.5rem" }}>
                Your current account details:
              </h1>
              <br />
              <h3>
                <b>Contact Number:</b> {this.state.mobile}
                <br />
                <b>Shipping Address:</b> {this.state.address}
              </h3>

              <h4 style={{ height: "4rem" }}>
                {" "}{" "}
                <input type="text" placeholder="Change Contact Number" onChange={this.handleNumChange} />{" "}
                <button onClick={this.updateNum}> Update </button>{" "}
              </h4>
              <h4>
                {" "}{" "}
                <input type="text" placeholder="Change Shipping Address" onChange={this.handleAddChange} />{" "}
                <button onClick={this.updateAdd}> Update </button>{" "}
              </h4>
            </div>
          </div>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <center><h2 style={{color:"white"}}>Your <Link to="/cart">Cart</Link></h2></center>
              <div>
                <ProfileItems products={this.state.cart} />
              </div>
            </Col>

            <Col xs={6} md={4}>
            <center><h2 style={{color:"white"}}>Your <Link to="/wishlist">Wishlist</Link></h2></center>
              <div>
                <Container id="content">
                  <ProfileItems products={this.state.wishlist} />
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
        <center><h1 style={{color:"white"}}>Completed Orders</h1></center>
          <ProfileItems products={this.state.orders} />
        </Container>
      </div>
    );
  }
}
export default Profile;
