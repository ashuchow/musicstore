import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";
import {ProductProvider} from "./context";


function App() {
  return (

  <Router>
    <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/products" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/wishlist" component={Wishlist} />
      <Route component={Default} />
    

    </Switch>
  
 
	
  </Router>
  
  );
}

export default App;
