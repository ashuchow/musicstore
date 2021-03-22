// This is the Shop Page / All Products Page - users can view, search for, and filter products here.

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../actions/products";
import Axios from "axios";

class Home extends Component {
  state = {
    products: [],
    searchterm: '',
    gender: "A",
    color: "A",
  };

  editSearchTerm = async(e) => {
    await this.setState({searchterm: e.target.value});
    console.log(this.state.searchterm)
    //console.log(this.state.products)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/products/search/"+this.state.searchterm,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });

  }

  handleGenderChange = async(e) =>{
    await this.setState({gender: e.target.value});
    //console.log(this.state.gender)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/products/searchbydexterity/"+this.state.gender,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }

  handleColorChange = async(e) =>{
    await this.setState({color: e.target.value});
    //console.log(this.state.color)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/products/searchbycolor/"+this.state.color,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    fetch("http://localhost:5000/products/allproducts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>

        <center>
          <div className = "search-bar">
            <input type = "text" className="search" value = {this.state.searchterm} onChange = {this.editSearchTerm} placeholder = "Search for a product..." />
            <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="search"/>
          </div>

          <h1 style={{fontSize: "3rem", marginTop: "3%"}}> View Products</h1>

          <label>
          Dexterity: &nbsp;
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value="A">All</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
            <option value="Ambi">Ambidexterous</option>
          </select>
          </label>

          <label>
          Color: &nbsp;
          <select value={this.state.gender} onChange={this.handleColorChange}>
            <option value="A">All</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Silver">Silver</option>
            <option value="Red">Red</option>
          </select>
          </label>

        </center>

        <div className="container" style={{marginBottom: "5%"}}>
          <Container id="content">
            <ProductsComp products={this.state.products} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;


// import React, {Component} from "react";
// import {Link} from 'react-router-dom';
// import {Button, Card} from 'react-bootstrap';
// import styled from 'styled-components';


// import "bootstrap/dist/css/bootstrap.min.css";

// function Home() {
//   return (
//   <div>

    
//     <Card>
// 		<Card.Img src="https://i.guim.co.uk/img/media/ad98f2dc808f18131e35e59c05ba6212671e8227/94_0_3061_1838/master/3061.jpg?width=1200&quality=85&auto=format&fit=max&s=fe0f9ee06af06c3c9f4b88c6dfd87b7b"/>
// 		<Card.ImgOverlay>
// 		<div className="mainbody"> 
//             <h1>MUSIK Mart</h1>
//             <h2>Your Stop For Anything Music</h2>
//         </div>
//         <div className= "ButtonContainer1">
// 		<Link to ="/products">	
//             <Button>
//             View Products
//             </Button>
// 		</Link>	
//         </div>
// 		</Card.ImgOverlay>
		
// 		</Card>
	
    
    
    
    
  
 
// 	</div>
//   );
// }



// export default Home;
