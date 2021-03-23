import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserItems = ({ products }) => {
  return (
    <div>
      <ul>
        {products.length === 0 ? (
          <div> Nothing to see here :(</div>
        ) : (
          products.map((product) => (
            <li key={product._id} style={{ width: "100%" }}>
              <div>
                <img
                  src={product.imageurl}
                  alt="product"
                  style={{ display: "flex", height: "15rem" }}
                />
              </div>
              <Container>
                <div>
                  <div>
                    <Link to={"/product/" + product._id}>{product.name}</Link>
                  </div>
                  <div>
                    <b>Rs. {product.price}</b>
                  </div>
                </div>
              </Container>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserItems;
