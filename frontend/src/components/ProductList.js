import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import ProductTile from "../actions/producttile";

class Home extends Component {
  state = {
    products: [],
    search: "",
    dexterity: "A",
    color: "A",
  };

  retrieveSearch = async (e) => {
    await this.setState({ search: e.target.value });
    console.log(this.state.search);
    //console.log(this.state.products)
    Axios({
      method: "GET",
      withCredentials: true,

      url: "http://localhost:5000/products/search/" + this.state.search,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  };

  handleDexterityChange = async (e) => {
    await this.setState({ dexterity: e.target.value });
    //console.log(this.state.dexterity)
    Axios({
      method: "GET",
      withCredentials: true,

      url:
        "http://localhost:5000/products/searchbydexterity/" + this.state.dexterity,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  };

  handleColorChange = async (e) => {
    await this.setState({ color: e.target.value });
    //console.log(this.state.color)
    Axios({
      method: "GET",
      withCredentials: true,

      url: "http://localhost:5000/products/searchbycolor/" + this.state.color,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  };

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
          <h1
            style={{
              fontSize: "3rem",
              marginTop: "3%",
              color: "white",
              fontFamily: "East Sea Dokdo",
            }}
          >
            {" "}
            INSTRUMENTS
          </h1>
          <div className="searchbar">
            <input
              type="text"
              className="search"
              value={this.state.search}
              onChange={this.retrieveSearch}
              placeholder="Search"
            />
          </div>
          <div style={{width: "30%"}}>
          <Row>
            <Col>
          <label style={{ color: "white", fontFamily: "East Sea Dokdo" }}>
            DEXTERITY: &nbsp;
            <select
              value={this.state.dexterity}
              onChange={this.handleDexterityChange}
            >
              <option value="All">All</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Ambi">Ambidexterous</option>
            </select>
          </label>
          </Col>
          <Col>
          <label style={{ color: "white", fontFamily: "East Sea Dokdo" }}>
            COLOR: &nbsp;
            <select value={this.state.dexterity} onChange={this.handleColorChange}>
              <option value="All">All</option>
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
              <option value="Silver">Silver</option>
              <option value="Red">Red</option>
            </select>
          </label>
          </Col>
          </Row>
          </div>
        </center>

        <div className="container" style={{ marginBottom: "5%" }}>
          <Container id="content">
            {this.state.products.map((product) => (
              <ProductTile product={product} />
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
