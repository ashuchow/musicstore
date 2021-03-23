import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import {ProductProvider} from "./context";
import Product from "./components/Product";
import profile from "./components/profile"
import Footer from "./components/Footer"



function App() {
  return (


  <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" exact component={Home} />
     
      <Route path="/products" component={ProductList} />
      <Route path="/cart" component={Cart} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/product/" component={Product}/>
      <Route path ="/profile" component={profile}/>
      <Route component={Default} />
    

    </Switch>
	<Footer/>
	 
  </Router>

  );
}

export default App;
