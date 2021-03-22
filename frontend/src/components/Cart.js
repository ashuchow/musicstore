// This is the Cart Page - will show products (if any) that are in the cart and wishlist.

// <Container id="content">
// <CartComp products={this.state.user.cart} />
// </Container>

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CartComp from "../actions/cart";
import WishComp from "../actions/wishlist";
import Axios from "axios";


class Cart extends Component {

  state = {
    products: [],
    wishlist: [],
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getcartitems",
    }).then((res) => {

      if (res.data === "Please log in to proceed!"){
        alert("Please log in to proceed!");
      }

      else{
        this.setState({ products: res.data });
        //console.log(res.data);
      }
      
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/getwishlistitems",
    }).then((res) => {

      if (res.data === "Please log in to proceed!"){
        console.log("Please log in to proceed!");
      }

      else{
        this.setState({ wishlist: res.data });
        //console.log(res.data);
      }
      
    });
  }

  moveToWishlist(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/users/movetowishlist",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromCart(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/users/removefromcart",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromWishlist(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/users/removefromwishlist",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  moveToCart(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/users/movetocart",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyProduct(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/users/buyproduct",
    }).then((res) => {
      console.log(res.data);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyAllProducts(){
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/users/buyallproducts",
    }).then((res) => {
      console.log(res.data);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  render() {
    return (
      <div>

        <center>
          <h1 style={{fontSize: "4rem"}}> SHOPPING CART </h1>
        </center>

        <div className="container">
          <Container id="content">
            <CartComp products={this.state.products}
                                moveToWishlist={this.moveToWishlist}
                                removeFromCart={this.removeFromCart}
                                buyProduct={this.buyProduct}
                                buyAllProducts={this.buyAllProducts} />
          </Container>
        </div>

        <div className="container">
          <Container id="content">
            <WishComp products={this.state.wishlist}
                                moveToCart={this.moveToCart}
                                removeFromWishlist={this.removeFromWishlist} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Cart;
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import CartTile from "../actions/carttile";

// class Cart extends Component {
//   render() {
//     return (
//       <div>
//             <header className = "header">
// 	<Link to="/">
// 		<h1>Musik Mart</h1>
//     </Link>
// 	</header>
          
//             <div className="header">
//           <h1>Cart</h1>
//         </div>
//         <div>
//         <CartTile
          
          
//           name = "Saxophone"
//           category='Brass'
//           image='data:image/jpeg;base64,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'
//           price= '2000'
//           brand= 'Wiseman'
          
//         />
//         <CartTile
//                 name='Electric Guitar'
//                 category='Guitars'
//                 image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNn3oaQUwMukPnKedpzWyQTBh8bvnCwY0B1A&usqp=CAU'
//                 price= '2000'
//                 brand= 'Gibson'

//         />
//         <CartTile
         
//          name='Synthesizer'
//          category='Keyboards'
//          image='data:image/jpeg;base64,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'
//          price= '2000'
//          brand= 'V-Synth'
         
//         />


//         </div>

    
            
//       </div>
//     );
//   }
// }

// export default Cart;