// This is the individual Product Page - users can view details of each product and take actions here.

import React, {Component} from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import Axios from "axios";
import ProductComp from "../actions/product";
import ReviewsComp from "../actions/reviews";

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
        <div className="product-container">
          <div className="item-a">
            <Container id="content">
              <ProductComp products={this.state.products} />
            </Container>
          </div>

          <div className="item-b">
            <Container id="content">
            {this.state.products.map((product) =>(
              <li key={product._id}>
                <div className="product-name" style={{fontSize: "4rem"}}>{product.name}</div><br />
                <div className="product-price" style={{fontSize: "3rem"}}><p>${product.price} </p></div><br />
                <div className="product-rating" style={{fontSize: "1.75rem",textAlign: "left"}}><p style={{fontWeight: "600"}}>Product Description:</p>
                  {product.brand}</div><br />
                <button onClick={() => addToCart(product._id)}>Add to Cart</button>
                <button onClick={() => addToWishlist(product._id)}>Save for Later ({product.wishers.length})</button>
              </li> 
            ))}
            </Container>

            </div>
          </div>

          <div style={{marginTop: "3%", width: "100%", padding: "0%"}}>
            <h1>Product Reviews</h1>
              <center>
                <ReviewsComp products={this.state.products} />
              </center>

            <h1 style={{marginTop: "3%"}}>Want to review this product?</h1>
            <form onSubmit={this.handleSubmit}>
              <label style={{width: "50%"}}>
                <textarea value={this.state.newreview} onChange={this.handleChange} placeholder="Add your review here!" />
                <input className="review-btn" type="submit" value="Submit" />
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