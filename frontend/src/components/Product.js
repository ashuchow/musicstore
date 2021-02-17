import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelTile from "../tiless/producttile";

class Product extends Component {
  render() {
    return (
      <div>
          
            <div className="header">
          <h1>Hotels</h1>
        </div>
        <div>
        <HotelTile
          
          hotelname = "Taj Palace"
          hotelprice = "1110"
          hotelcity = "New Delhi"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        />
        <HotelTile
          
          hotelname = "Taj Palace"
          hotelprice = "1110"
          hotelcity = "New Delhi"
          hotelimage = "https://en.wikipedia.org/wiki/Taj_Mahal_Palace_Hotel#/media/File:Mumbai_Aug_2018_(43397784544).jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        /><HotelTile
          
          hotelname = "Taj Palace"
          hotelprice = "1110"
          hotelcity = "New Delhi"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        />
        </div>

    
            
      </div>
    );
  }
}

export default Product;