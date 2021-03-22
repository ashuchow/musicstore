// This is the individual Product Page - users can view details of each product and take actions here.

import React, {Component} from "react";
import "../App.css";
import { Container, Card } from "react-bootstrap";
import Axios from "axios";
import Items from "../actions/product";
import ReviewTile from "../actions/reviews";
import { ProductConsumer } from "../context";

class Product extends Component {

    state = {
      products: [],
      newreview: "",
    };

    componentDidMount() {
      let url = window.location.pathname
      let prod_id = url.split("/")[2]
      fetch("http://localhost:5000/products/getproductbyid/" + prod_id)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ products: data });
          console.log(data);
        })
        .catch(console.log);
    }

    handleChange = async(e) => {
      await this.setState({newreview: e.target.value});
    }

    handleSubmit = async(e) => {
      e.preventDefault();
      let url = window.location.pathname
      let productId = url.split("/")[2]
      //console.log(this.state.newreview);
      //console.log("New review be added");
      Axios({
        method: "POST",
        data: {
          review: this.state.newreview,
          productId: productId,
        },
        withCredentials: true,
        url: "http://localhost:5000/users/addreview",
      }).then(function (res) {
        console.log(res);
        window.location.reload(false);
        alert(res.data);
      });

      await fetch("http://localhost:5000/products/getproductbyid/" + productId)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ products: data });
          console.log(data);
        })
        .catch(console.log);
    }

    render() {

      const addToCart = (cartProduct) => {
        Axios({
          method: "POST",
          data: {
            productId: cartProduct,
          },
          withCredentials: true,
          url: "http://localhost:5000/users/addtocart",
        }).then(function (res) {
          console.log(res);
          alert(res.data);
        });
      };

      const addToWishlist = (cartProduct) => {
        Axios({
          method: "POST",
          data: {
            productId: cartProduct,
          },
          withCredentials: true,
          url: "http://localhost:5000/users/addtowishlist",
        }).then(function (res) {
          console.log(res);
          alert(res.data);
        });
      };

      return (

      <div style={{paddingBottom: "5%"}}>
        <div className="product-style">


          <div className="item-b">
            <Container id="content">
            {this.state.products.map((product) =>(
              <li key={product._id}>
                <div className="itemstyle">
                <Items products={this.state.products} />
                {product.name}
                <br></br>
                {product.brand}
                <br></br>

                Price: Rs. {product.price}

                
    
     
   
                </div>     
                <button onClick={() => addToCart(product._id)}>Move to Cart</button>
                <button onClick={() => addToWishlist(product._id)}>Add to Wishlist({product.wought.length})</button>
                        
              </li> 
            ))}
            
            </Container>

            </div>
          </div>

          <div style={{marginTop: "3%", width: "100%", padding: "0%", color:"white"}}>
            <h1>Product Reviews</h1>
              <center>
                <ReviewTile products={this.state.products} />
              </center>

            <h1 style={{marginTop: "3%", color:"white"}}>Add a review!</h1>
            <form onSubmit={this.handleSubmit}>
              <label style={{width: "100%", display:"block"}}>
                <textarea style={{width:"100%"}} value={this.state.newreview} onChange={this.handleChange} placeholder="Add your review here!" />
                <button onClick={() => "submit"}>Submit</button>
              </label>
            </form>

          </div>

      </div>
      );
    }
  }
   
export default Product;




// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import HotelTile from "../tiless/producttile";

// class Product extends Component {
//   render() {
//     return (
//       <div>
          
//             <div className="header">
//           <h1>Hotels</h1>
//         </div>
//         <div>
//         <HotelTile
          
//           hotelname = "Taj Palace"
//           hotelprice = "1110"
//           hotelcity = "New Delhi"
//           hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
//           hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
//         />
//         <HotelTile
          
//           hotelname = "Taj Palace"
//           hotelprice = "1110"
//           hotelcity = "New Delhi"
//           hotelimage = "https://en.wikipedia.org/wiki/Taj_Mahal_Palace_Hotel#/media/File:Mumbai_Aug_2018_(43397784544).jpg"
//           hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
//         /><HotelTile
          
//           hotelname = "Taj Palace"
//           hotelprice = "1110"
//           hotelcity = "New Delhi"
//           hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
//           hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
//         />
//         </div>

    
            
//       </div>
//     );
//   }
// }

// export default Product;