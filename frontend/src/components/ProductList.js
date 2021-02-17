import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelTile from "../actions/producttile";

class resultHotel extends Component {
  render() {
    return (
      <div>
          
            <div className="header">
          <h1>Products</h1>
        </div>
        <div>
        <HotelTile
          
          
          name = "Indian Tabla"
          category='Hindustani'
          image='http://cdn.shopify.com/s/files/1/1800/7761/products/TAAL_Set_4_-_Copper_5KG_Tablas_-_01_grande.jpg?v=1572282931'
          price= '2000'
          brand= 'Farrukkabadi Beats'
          
        />
        <HotelTile
                name='Electric Guitar'
                category='Guitars'
                image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
                price= '2000'
                brand= 'Gibson'

        />
        <HotelTile
         
        name='Electric Guitar'
        category='Guitars'
        image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
        price= '2000'
        brand= 'Gibson'
        />
                <HotelTile
         
         name='Electric Guitar'
         category='Guitars'
         image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
         price= '2000'
         brand= 'Gibson'
         />
                 <HotelTile
         
         name='Electric Guitar'
         category='Guitars'
         image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
         price= '2000'
         brand= 'Gibson'
         />
                 <HotelTile
         
         name='Electric Guitar'
         category='Guitars'
         image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
         price= '2000'
         brand= 'Gibson'
         />
                 <HotelTile
         
         name='Electric Guitar'
         category='Guitars'
         image='https://www.dressinn.com/f/13687/136872891/wrangler-logo-hoodie.jpg'
         price= '2000'
         brand= 'Gibson'
         />
        </div>

    
            
      </div>
    );
  }
}

export default resultHotel;