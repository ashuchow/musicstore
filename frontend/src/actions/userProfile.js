import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

class userProfile extends Component {
  render() {
    return (   
      <div>
      <div className="header">
          <h1>User Profile</h1>
        </div>

         <div>
      
    <div className="d-flex flex-column align-items-center text-center">
      <img className="float right" src={this.props.picture}alt="" className="img-fluid rounded shadow-sm"></img>
     </div>
  




      <div className="card mb-4 align-items-right">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-10 text-secondary">
              {this.props.name}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-4">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-10 text-secondary">
              {this.props.email}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-4">
              <h6 className="mb-0">Phone</h6>
            </div>
            <div className="col-sm-10 text-secondary">
              {this.props.phone}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-4">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-10 text-secondary">
              {this.props.address}
            </div>
          </div>
        </div>
      </div>
      
      
      </div>
      </div>
      
    );
  }
}

export default userProfile;