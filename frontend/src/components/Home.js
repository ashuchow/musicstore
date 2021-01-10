import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';


import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
  <div>
    <header className = "header">
	<Link to="/">
		<h1>Musik Mart</h1>
    </Link>
	</header>
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
    </nav>
    
    
		<div className="mainbody"> 
            <h1>MUSIK Mart</h1>
            <h2>Your Stop For Anything Music</h2>
        </div>
        <div className= "ButtonContainer1">
		<Link to ="/products">	
            <Button>
            View Products
            </Button>
		</Link>	
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
