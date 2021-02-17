import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import styled from 'styled-components';


import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
  <div>

    
    <Card>
		<Card.Img src="https://i.guim.co.uk/img/media/ad98f2dc808f18131e35e59c05ba6212671e8227/94_0_3061_1838/master/3061.jpg?width=1200&quality=85&auto=format&fit=max&s=fe0f9ee06af06c3c9f4b88c6dfd87b7b"/>
		<Card.ImgOverlay>
		<div className="mainbody"> 
            <h1>MUSIK Mart</h1>
            <h2>Your Stop For Anything Music</h2>
        </div>
        <div className= "ButtonContainer1">
		<Link to ="/products">	
            <Button>
            View Products
            </Button>
		</Link>	
        </div>
		</Card.ImgOverlay>
		
		</Card>
	
    
    
    
    
  
 
	</div>
  );
}



export default Home;
