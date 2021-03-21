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
		<footer className="footer-distributed">
 
		<div className="footer-left">
 
		<h3>Musik Mart</h3>
 
		<p className="footer-links">
		<a href="#">Home</a>

	·
		<a href="#">Contact</a>
    
		</p>
 
		<p className="footer-company-name">MusikMart &copy; 2021</p>
		</div>
 
		<div className="footer-center">
 
		<div>
		<i className="fa fa-map-marker"></i>
		<p><span>21 Connought Place</span> Delhi, India</p>
		</div>
 
		<div>
		<i className="fa fa-phone"></i>
		<p>+9872652669</p>
		</div>
 
		<div>
		<i className="fa fa-envelope"></i>
		<p><a href="mailto:adityavsarkar@gmail.com">contact@MusikMart.com</a></p>
		</div>
 
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>About the company</span>
    Musik Mart is an E-commerce shopping platform focused on music products and instruments. Made For Advanced Programming Course.
		</p>
 
		
 
		</div>
 
		</footer>

 
	
  </Router>

  );
}

export default App;
