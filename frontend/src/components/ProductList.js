import React, { Component } from "react";
import {storeProducts} from '../data';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Product from './Product';
import { MDBCol, MDBIcon } from "mdbreact";



class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="header1">
          <h1>Products</h1>
        </div>
      <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
    




      </React.Fragment>
      
    );
  }
}

export default ProductList;