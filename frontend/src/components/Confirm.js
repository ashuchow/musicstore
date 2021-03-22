import React, { Component } from "react";
import { Link } from "react-router-dom";
import ConfTile from "../actions/confirm";

class Confirm extends Component {
    render() {
        return (
          <div>
                   <header className = "header">
	<Link to="/">
		<h1>Musik Mart</h1>
    </Link>
	</header>
              
                <div className="header">
              <h1>CONFIRMATION</h1>
            </div>
            
            <div>
                <h1>Thank you for shopping with MusikMart</h1>
            </div>
            <ConfTile
          
          
          name = "Indian Tabla"
          category='Hindustani'
          image='http://cdn.shopify.com/s/files/1/1800/7761/products/TAAL_Set_4_-_Copper_5KG_Tablas_-_01_grande.jpg?v=1572282931'
          price= '2000'
          brand= 'Farrukkabadi Beats'
          cname= "Dev Ghosh"
          address=" 123 Road Road"
          
        />
        
      </div>
    );
  }
}

export default Confirm;