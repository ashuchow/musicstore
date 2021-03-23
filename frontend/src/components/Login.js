import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Axios from "axios"; // for making http requests
import GoogleButton from "react-google-button";
import './Login.css';
import { Button, Card, CardDeck, CardGroup, CardImg, Breadcrumb, Table } from "react-bootstrap";

// export default function Login() {
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [registerMobile, setRegisterMobile] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");


//   const register = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: registerUsername,
//         password: registerPassword,
//         mobile: registerMobile,
//         email: registerEmail,
//       },
//       withCredentials: true,
//       url: "http://localhost:5000/register",
//     }).then(function (res) {
//       console.log(res);
//       alert(res.data);
//     });
//   };

//   const login = () => {

//     Axios({
//       method: "POST",
//       data: {
//         username: loginUsername,
//         password: loginPassword,
//       },
//       withCredentials: true,
//       url: "http://localhost:5000/login",
//     }).then(function (res) {
//       console.log(res);
//       alert(res.data);
      
//     });
//   };

//   const googleAuth = () => {
//     window.open("http://localhost:5000/google");
//   };

  
//   return (
//     <div className="login">
//       <div>
//         <h1>Register Now!</h1>
//         <input
//           placeholder="Username"
//           onChange={(e) => setRegisterUsername(e.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Mobile Number"
//           onChange={(e) => setRegisterMobile(e.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Email ID"
//           onChange={(e) => setRegisterEmail(e.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Password"
//           type="password"
//           onChange={(e) => setRegisterPassword(e.target.value)}
//         />
//         <br />
//         <button onClick={register}>Submit</button>
//       </div>
//       <br /><br />

//       <div>
//         <h1>Login</h1>
//         <input
//           placeholder="Username"
//           onChange={(e) => setLoginUsername(e.target.value)}
//         />
//         <br />
//         <input
//           placeholder="Password"
//           type="password"
//           onChange={(e) => setLoginPassword(e.target.value)}
//         />
//         <br />
//         <button onClick={login}>Continue</button><br/>

        // <center>
        //   <GoogleButton onClick={googleAuth}/>
        // </center>

//       </div>
//       <br /><br />

//     </div>
//   );
// }

// export default userSignIn

export default function UserSignIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

    const login = () => {

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
      
    });
  };

  const googleAuth = () => {
    window.open("http://localhost:5000/google");
  };

  
    return ( 

      
        <div>
        <center>
          <h1 style={{ fontSize: "4rem", fontFamily:"East Sea Dokdo", color:"white"}}> SIGN IN </h1>
        </center>
           

        <Card bg="dark" text="light align-items-center">
        
        {/* <div className = "form"> */}
        <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="https://previews.123rf.com/images/surfupvector/surfupvector1904/surfupvector190400502/120462076-music-show-line-icon-rock-concert-electric-guitar-music-celebration-concept-vector-illustration-can-.jpg" alt="Avatar" class="avatar"/>
  </div>
            <center>

            <ul className = "form-container" >
              
                <li>
                <div class= "container">
                    <label for = "name">
                       <b>Username</b> 
                    </label>
                    <br></br>
                    <input type = "text" placeholder ="  Username" id = "name" onChange={(e) => setLoginUsername(e.target.value)}>
                    </input>
                </div>  
                </li>
                <li>
                <div class = "container">
                <label for= "password"><b>Password</b>
                </label>
                <br></br>

                <input type = "password" placeholder ="  Password" id = "password" onChange={(e) => setLoginPassword(e.target.value)}>
                    </input>
                    </div>
                </li>
                <li>
                <div class = "container">
                    <Link to ="/">
                    <button onClick={login}>Continue</button>
                    </Link>
                  </div>
                </li>
               
                <center>
          <GoogleButton onClick={googleAuth}/>
        </center>

               
                <li>
                    <Link to = "/signup" className ="button secondary text-center">Create a new Account</Link>
                </li>

            </ul>
            </center>


        
        </form>
        </Card>  
    </div>
    // </div>
    )
}




