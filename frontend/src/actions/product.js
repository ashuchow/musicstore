// This is the single Product Component for the individual product pages - "ProductComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Zoom from "react-img-zoom";
import "../Login.css";

const Items = ({ products }) => {
  return (
    <div>

      <div className="product-style">
        {products.map((product) => (
          
            

            <div class="imgcontainer">
    <img src={product.imageurl} alt="Avatar" class="avatar"/>
  </div>
         
              
              



            
          
        ))}
      </div>
    </div>
  );
};

export default Items;