import React, {Component} from "react";
import {Button} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
  <div>
    <header className = "header">
        <h1>Musik Mart</h1>
    </header>
    <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
    <a href="#">Cart</a>
    <a href="#">Login/SignUp</a>
    <a href="#">User Profile</a>
    <a href="#">Wishlist</a>
    </nav>
    
    
		<div className="mainbody"> 
            <h1>MUSIK Mart</h1>
            <h2>Your Stop For Anything Music</h2>
        </div>
        <div className= "ButtonContainer1">
            <Button variant="danger" size="lg">
            View Products
            </Button>
        </div>
    
    
    
    
    
   
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
 
	</div>
  );
}

export default Home;
