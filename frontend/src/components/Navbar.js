import React, { Component } from "react";
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/products">
          <a>Products</a>
        </Link>
        <Link to="/cart">
          <a>Cart</a>
        </Link>
        <Link to="/login">
          <a>Login</a>
        </Link>
        <Link to="/signup">
          <a>Sign-up</a>
        </Link>
        <Link to="/wishlist">
          <a>Wishlist</a>
        </Link>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
        <Link to="/profile">
          <a>Profile</a>
        </Link>
        </nav>
      </div>
      
    );
  }
}

export default Navbar;