import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Musik Mart</h3>

          <p className="footer-links">
            <a href="#">Home</a>·<a href="#">Contact</a>
          </p>

          <p className="footer-company-name">MusikMart &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>21 Connought Place</span> Delhi, India
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+9872652669</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:adityavsarkar@gmail.com">contact@MusikMart.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Musik Mart is an E-commerce shopping platform focused on music
            products and instruments. Made For Advanced Programming Course.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
