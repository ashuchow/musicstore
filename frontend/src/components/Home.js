import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: rgb(217, 151, 84);
      color: rgb(37, 11, 11);
    }

    .btn-xxl {
      padding: 5rem 1.5rem;
      font-size: 4rem;
    }
    `}
      </style>
      <Card>
        <Card.Img src="https://i.guim.co.uk/img/media/ad98f2dc808f18131e35e59c05ba6212671e8227/94_0_3061_1838/master/3061.jpg?width=1200&quality=85&auto=format&fit=max&s=fe0f9ee06af06c3c9f4b88c6dfd87b7b" />
        <Card.ImgOverlay>
          <div className="mainbody">
            <h1>MUSIK Mart</h1>
            <h2>Your Stop For Anything Music</h2>
          </div>
          <br />
          <br />
          <br />
          <center>
            <div style={{ width: "50%" }} className="ButtonContainer1">
              <Link to="/products">
                <Button variant="flat" size="xxl" >View Products</Button>
              </Link>
            </div>
          </center>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
