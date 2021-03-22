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
import Product from "./components/Product";
import Confirm from "./components/Confirm";
import profile from "./components/profile"
import Footer from "./components/Footer"



function App() {
  return (


  <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" exact component={Home} />
     
      <Route path="/products" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/product/" component={Product}/>
      <Route path="/payment" component={Details} />
      <Route path="/p" component={Confirm} />
      <Route path ="/prof" component={profile}/>
      <Route component={Default} />
    

    </Switch>
	<Footer/>
	 
  </Router>

  );
}

export default App;
