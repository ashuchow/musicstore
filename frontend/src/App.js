import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
    </nav>
  </div>
  );
}

export default App;
