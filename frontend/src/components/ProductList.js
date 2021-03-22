
import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../actions/products";
import Axios from "axios";
import ProductTile from "../actions/producttile";

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
        <h1 style={{fontSize: "3rem", marginTop: "3%", color: "white", fontFamily:"East Sea Dokdo"}}> INSTRUMENTS</h1>
          <div className = "searchbar">
            <input type = "text" className="search" value = {this.state.searchterm} onChange = {this.editSearchTerm} placeholder = "Search" />
            
          </div>

          

          <label style={{color:"white"}}>
          Dexterity: &nbsp;
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value="A">All</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
            <option value="Ambi">Ambidexterous</option>
          </select>
          </label>

          <label style={{color:"white"}}>
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
            {this.state.products.map((product) => (<ProductTile product = {product}/>))} 
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;

