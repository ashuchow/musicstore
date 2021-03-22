
import React, { useState } from "react";
import Axios from "axios"; // for making http requests
import { Link } from 'react-router-dom';

export default function UserSignUp() {




    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  
    const [registerEmail, setRegisterEmail] = useState("");

  
  
    const register = () => {
      Axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
        //   mobile: registerMobile,
          email: registerEmail,
        },
        withCredentials: true,
        url: "http://localhost:5000/register",
      }).then(function (res) {
        console.log(res);
        alert(res.data);
      });
    };
    return (
        <div>
                   <header className = "header">
	<Link to="/">
		<h1>Musik Mart</h1>
    </Link>
	</header>
        <div>
            <div className="header">
          <h1>Sign-up</h1>
        </div>
        <div className = "form">
        <form>
            <ul className = "form-container">
                <li>
                    <h3>CREATE NEW ACCOUNT</h3>
                </li>
                <li>
                    <label htmlFor= "name">
                        Name
                    </label>
                    <input type = "name" name ="name" id = "name"onChange={(e) => setRegisterUsername(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                    <label htmlFor= "email">
                        Email
                    </label>
                    <input type = "email" name ="email" id = "email"  onChange={(e) => setRegisterEmail(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                    <label htmlFor= "address">
                        Address
                    </label>
                    <input type = "address" name ="address" id = "address" onChange={(e) => (e.target.value)}>
                    </input>
                    
                </li>
                <li>
                <label for= "password">Password</label>
                <input type = "password" name ="password" id = "password" onChange={(e) => setRegisterPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                <label for= "rePassword">RePassword</label>
                <input type = "rePassword" name ="rePassword" id = "rePassword" onChange={(e) => setRegisterPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                <button onClick={register}>Submit</button>
                </li>
                <li>
                    Already have an account? <Link to = "/login">Sign-IN</Link>
                </li>
               

            </ul>



        </form>

    </div>
    </div>
    </div>
    )
}

